import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tmodule } from './module.entity';
import { CreateModuleDto } from './dtos/create-module.dto';
import { Submodule } from './submodule.entity';
import * as amqp from "amqplib";


@Injectable()
export class ModulesService {
  constructor(@InjectRepository(Tmodule) private repo: Repository<Tmodule>) { this.consumeMessages()}



  async consumeMessages() {
    try {
      console.log("Connecting to RabbitMQ...");
      const connection = await amqp.connect(process.env.rabbitMqUrl);
      console.log("Connection to RabbitMQ established.");
      const channel = await connection.createChannel();
      const exchange = "user_exchange";
  
      await channel.assertExchange(exchange, "direct", { durable: true });
      const { queue } = await channel.assertQueue("", { exclusive: true });
      console.log("Waiting for messages in module-queue", queue);
  
      // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
      await channel.bindQueue(queue, exchange, "tenantModuleDetails");
      await channel.bindQueue(queue, exchange, "updatetenantModuleDetails");
  
      channel.consume(
        queue,
        async (msg) => {
          if (msg) {
            console.log("Message received:module", msg.content.toString());
            const module= JSON.parse(msg.content.toString());
            if (msg.fields.routingKey === "tenantModuleDetails") {
              await this.create(module.tenantModuleDetails);
            } else if (msg.fields.routingKey === "updatetenantModuleDetails") {
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
  

  create(data: CreateModuleDto) {
    const module = this.repo.create(data);
    return this.repo.save(module);
  }

  find() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  findOneIncludeSubmodule(id: string) {
    return this.repo.findOne({
      where: { id },
      relations: { submodules: true },
    });
  }

  async remove(id: string) {
    const module = await this.findOne(id);
    if (!module) {
      throw new NotFoundException('module not found');
    }
    return this.repo.remove(module);
  }
}
