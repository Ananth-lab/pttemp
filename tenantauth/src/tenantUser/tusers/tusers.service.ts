import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tuser } from "./tuser.entity";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import * as amqp from "amqplib";

@Injectable()
export class TusersService {
  constructor(@InjectRepository(Tuser) private repo: Repository<Tuser>) {
    this.consumeMessages();
  }

  async consumeMessages() {
    try {
      console.log("Connecting to RabbitMQ...");
      const connection = await amqp.connect("amqp://localhost");
      console.log("Connection to RabbitMQ established.");
      const channel = await connection.createChannel();
      const exchange = "user_exchange";

      await channel.assertExchange(exchange, "direct", { durable: true });
      const { queue } = await channel.assertQueue("", { exclusive: true });
      console.log("Waiting for messages in queue:", queue);

      // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
      await channel.bindQueue(queue, exchange, "createUser");
      await channel.bindQueue(queue, exchange, "updateUser");

      channel.consume(
        queue,
        async (msg) => {
          if (msg) {
            console.log("Message received:", msg.content.toString());
            const user: Tuser = JSON.parse(msg.content.toString());
            if (msg.fields.routingKey === "createUser") {
              await this.create(user);
            } else if (msg.fields.routingKey === "updateUser") {
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
    console.log("Creating user:", body);
    const user = this.repo.create(body);
    await this.repo.save(user);
  }

  findOne(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  find() {
    return this.repo.find();
  }

  async findById(id: string) {
    const tuser = await this.repo.findOne({ where: { id } });
    if (!tuser) {
      throw new NotFoundException("user not found!");
    }
  }
}
