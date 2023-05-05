import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Submodule } from './submodule.entity';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
import * as amqp from "amqplib";

@Injectable()
export class SubmodulesService {
  constructor(
    @InjectRepository(Submodule) private repo: Repository<Submodule>,
  ) {
    this.consumeMessages()
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
      console.log("Waiting for messages in subModule-queue", queue);
  
      // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
      await channel.bindQueue(queue, exchange, "tenantSubModuleDetails");
      await channel.bindQueue(queue, exchange, "updatetenantSubModuleDetails");
  
      channel.consume(
        queue,
        async (msg) => {
          if (msg) {
            console.log("Message received:subModule", msg.content.toString());
            const module= JSON.parse(msg.content.toString());
            if (msg.fields.routingKey === "tenantSubModuleDetails") {
              await this.create(module.tenantSubModuleDetails);
            } else if (msg.fields.routingKey === "updatetenantSubModuleDetails") {
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
  

  create(data: CreateSubmoduleDto) {
    const module = this.repo.create(data);
    return this.repo.save(module);
  }

  find() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne({ where: { id } });
  }
}
