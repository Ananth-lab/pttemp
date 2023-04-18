import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTenantPocDto } from './dto/create-tenant_poc.dto';
import { UpdateTenantPocDto } from './dto/update-tenant_poc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantPoc } from './entities/tenant_poc.entity';
import { Repository } from 'typeorm';
import * as amqp from "amqplib";

@Injectable()
export class TenantPocService {
  constructor(@InjectRepository(TenantPoc) private readonly tenantPocRepo : Repository<TenantPoc>){ this.consumeMessages()}


  
async consumeMessages() {
  try {
    console.log("Connecting to RabbitMQ...");
    const connection = await amqp.connect("amqp://localhost");
    console.log("Connection to RabbitMQ established.");
    const channel = await connection.createChannel();
    const exchange = "user_exchange";

    await channel.assertExchange(exchange, "direct", { durable: true });
    const { queue } = await channel.assertQueue("", { exclusive: true });
    console.log("Waiting for messages in queue:Poc", queue);

    // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
    await channel.bindQueue(queue, exchange, "createPoc");
    await channel.bindQueue(queue, exchange, "updatPoc");

    channel.consume(
      queue,
      async (msg) => {
        if (msg) {
          console.log("Message received:", msg.content.toString());
          const poc:TenantPoc= JSON.parse(msg.content.toString());
          if (msg.fields.routingKey === "createPoc") {
            await this.create(poc);
          } else if (msg.fields.routingKey === "updatePoc") {
              //await this.update();
          }
          channel.ack(msg);
        }
      },
      { noAck: false }
    );
  } catch (err) {
    console.error("Failed to connect to RabbitMQ");
    console.error(err);
  }
}

  async create(createTenantPocDto: CreateTenantPocDto) {
    return await this.tenantPocRepo.save(createTenantPocDto)
  }

  // findAll() {
  //   return `This action returns all tenantPoc`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} tenantPoc`;
  // }

  async update(id: string, updateTenantPocDto: UpdateTenantPocDto) {
    try{
      const currPoc = await this.tenantPocRepo.findOne({where : {id :id}});
      if(!currPoc) return currPoc;

      if(updateTenantPocDto.email){
        currPoc.email = updateTenantPocDto.email
      }

      if(updateTenantPocDto.name){
        currPoc.name = updateTenantPocDto.name
      }

      if(updateTenantPocDto.phone){
        currPoc.phone = updateTenantPocDto.phone
      }

      if(updateTenantPocDto.mobile){
        currPoc.mobile = updateTenantPocDto.mobile
      }
      await this.tenantPocRepo.save(currPoc);
      
      return "data updated"
    }
    catch(error){
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} tenantPoc`;
  // }
}
