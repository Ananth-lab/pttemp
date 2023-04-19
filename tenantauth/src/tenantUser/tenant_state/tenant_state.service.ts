import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTenantStateDto } from './dto/create-tenant_state.dto';
import { UpdateTenantStateDto } from './dto/update-tenant_state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantState } from './entities/tenant_state.entity';
import { Repository } from 'typeorm';
import * as amqp from "amqplib";
require ("dotenv").config()

@Injectable()
export class TenantStateService {
  constructor(@InjectRepository(TenantState) private readonly statRep:Repository<TenantState>){this.consumeMessages()}

  
async consumeMessages() {
  try {
    console.log("Connecting to RabbitMQ...");
    const connection = await amqp.connect(process.env.rabbitMqUrl);
    console.log("Connection to RabbitMQ established.");
    const channel = await connection.createChannel();
    const exchange = "user_exchange";

    await channel.assertExchange(exchange, "direct", { durable: true });
    const { queue } = await channel.assertQueue("", { exclusive: true });
    console.log("Waiting for messages in queue:State", queue);

    // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
    await channel.bindQueue(queue, exchange, "createState");
    await channel.bindQueue(queue, exchange, "updatState");

    channel.consume(
      queue,
      async (msg) => {
        if (msg) {
          console.log("Message received:state", msg.content.toString());
          const state:TenantState= JSON.parse(msg.content.toString());
          if (msg.fields.routingKey === "createState") {
            await this.create(state);
          } else if (msg.fields.routingKey === "updateState") {
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


  
  async create(createTenantStateDto: CreateTenantStateDto) {
    try{
    return await this.statRep.save(createTenantStateDto) 
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  }

  // findAll() {
  //   return `This action returns all tenantState`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} tenantState`;
  // }

  // update(id: number, updateTenantStateDto: UpdateTenantStateDto) {
  //   return `This action updates a #${id} tenantState`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tenantState`;
  // }
}
