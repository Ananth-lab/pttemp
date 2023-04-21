import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tuser } from './tuser.entity';
import { CreateTuserDto } from './dtos/create-tuser.dto';
import { connectRabbitMQ } from './rabbit';
import { UpdateTuserDto } from './dtos/update-tuser.dto';
import * as amqp from "amqplib";

@Injectable()
export class TusersService {
  constructor(@InjectRepository(Tuser) private repo: Repository<Tuser>) {this.consumeMessages()}


  async consumeMessages() {
    try {
      console.log("Connecting to RabbitMQ...");
      const connection = await amqp.connect(process.env.rabbitMqUrl);
      console.log("Connection to RabbitMQ established.");
      const channel = await connection.createChannel();
      const exchange = "tUser_exchange";

      await channel.assertExchange(exchange, "direct", { durable: true });
      const { queue } = await channel.assertQueue("", { exclusive: true });
      console.log("Waiting for messages in queue in: tuser", queue);

      // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
      await channel.bindQueue(queue, exchange, "tenantUserDetails");
      await channel.bindQueue(queue, exchange, "updatetenantUserDetails");

      channel.consume(
        queue,
        async (msg) => {
          if (msg) {
            console.log("Message received in:", msg.content.toString());
            const user = JSON.parse(msg.content.toString());
            if (msg.fields.routingKey === "tenantUserDetails") {
              await this.create(user.tenantUserDetails);
            } else if (msg.fields.routingKey === "updatetenantUserDetails") {
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

  async create(body: CreateTuserDto) {
    try {
      const user =  await this.repo.save(body);
      return user
    } catch (error) {
      console.error('Failed to publish message to RabbitMQ:', error);
      throw error;
    }
  }
  


  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  findAllTusers() {
    return this.repo.find();
  }

  async update(
    id: string,
    UpdateTuserDto: UpdateTuserDto
  ) {
      const user = await this.repo.findOne({ where: { id: id } });
      if (!user) return user;
      if(UpdateTuserDto.email ){
        user.email = UpdateTuserDto.email; 
      }
      if(UpdateTuserDto.name ){
        user.name = UpdateTuserDto.name; 
      }
      if(UpdateTuserDto.mobile ){
        user.mobile = UpdateTuserDto.mobile; 
      }

      return await this.repo.save(user)
    }

  async findOne(id: string) {
    const tuser = await this.repo.findOne({ where: { id } });

    if (!tuser) {
      throw new NotFoundException('not found');
    }
    return tuser;
  }
}
