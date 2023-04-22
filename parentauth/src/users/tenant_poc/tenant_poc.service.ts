import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTenantPocDto } from './dto/create-tenant_poc.dto';
import { UpdateTenantPocDto } from './dto/update-tenant_poc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantPoc } from './entities/tenant_poc.entity';
import { Equal, Repository } from 'typeorm';
import * as amqp from "amqplib";

@Injectable()
export class TenantPocService {
  constructor(@InjectRepository(TenantPoc) private readonly tenantPocRepo : Repository<TenantPoc>){this.consumeMessages()}

  

  async consumeMessages() {
    try {
      console.log("Connecting to RabbitMQ...");
      const connection = await amqp.connect(process.env.rabbitMqUrl);
      console.log("Connection to RabbitMQ established.");
      const channel = await connection.createChannel();
      const exchange = "tUser_exchange";
  
      await channel.assertExchange(exchange, "direct", { durable: true });
      const { queue } = await channel.assertQueue("", { exclusive: true });
      console.log("Waiting for messages in queue: poc", queue);
  
      // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
      await channel.bindQueue(queue, exchange, "tenantPocDetails");
      await channel.bindQueue(queue, exchange, "updatetenantPocDetails");
  
      channel.consume(
        queue,
        async (msg) => {
          if (msg) {
            console.log("Message received:", msg.content.toString());
            const domain = JSON.parse(msg.content.toString());
            if (msg.fields.routingKey === "tenantPocDetails") {
              await this.create(domain.tenantPocDetails);
            } else if (msg.fields.routingKey === "updatetenantPocDetails") {
              //  await this.update(user);
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
    try{
    return await this.tenantPocRepo.save(createTenantPocDto)
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  // findAll() {
  //   return `This action returns all tenantPoc`;
  // }

  async findOne(id: string) {
    try{
    return await this.tenantPocRepo.findOne({where:{id}});
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  async findOneOnOrg(id: string) {
    try{
    return await this.tenantPocRepo.findOne({where : {tenantOrganisation_id : Equal(id)}}); 
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

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
