import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tuser } from "./tuser.entity";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import * as amqp from "amqplib";
import { UpdateTuserDto } from "./dtos/update-tuser.dto";
import { connectRabbitMQ } from "../rabbitM/rabbitMq.sender";

@Injectable()
export class TusersService {
  constructor(@InjectRepository(Tuser) private repo: Repository<Tuser>) {
    this.consumeMessages();
  }

  async consumeMessages() {
    try {
      console.log("Connecting to RabbitMQ...");
      const connection = await amqp.connect(process.env.rabbitMqUrl);
      console.log("Connection to RabbitMQ established.");
      const channel = await connection.createChannel();
      const exchange = "user_exchange";

      await channel.assertExchange(exchange, "direct", { durable: true });
      const { queue } = await channel.assertQueue("", { exclusive: true });
      console.log("Waiting for messages in queue in:", queue);

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
    const user = this.repo.create(body);
   return  await this.repo.save(user);
  }

  findOne(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  find() {
    return this.repo.find();
  }

  async update(
    id: string,
    updateTuserDto: UpdateTuserDto
  ) {
    try{
      const user = await this.repo.findOne({ where: { id: id } });
      if (!user) return user;
      if(updateTuserDto.email ){
        user.email = updateTuserDto.email; 
      }
      if(updateTuserDto.name ){
        user.name = updateTuserDto.name; 
      }
      if(updateTuserDto.mobile ){
        user.mobile = updateTuserDto.mobile; 
      }
      const tuser=await this.repo.save(user)
      const rabbitConnection = await connectRabbitMQ();
      if (!rabbitConnection) {
        throw new Error('Failed to connect to RabbitMQ');
      }
      const { channel, exchange } = rabbitConnection;
      await channel.publish(exchange, 'updateTuserDetails', Buffer.from(JSON.stringify(user)));
      console.log('Message sent:', Tuser);
      return user
    } catch (error) {
      console.error('Failed to publish message to RabbitMQ:', error);
      throw error;
    }
  }
  
    


  async findById(id: string) {
    const tuser = await this.repo.findOne({ where: { id } });
    if (!tuser) {
      throw new NotFoundException("user not found!");
    }
  }
}
