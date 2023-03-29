import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Tuser } from "./tuser.entity";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import { connectRabbitMQ } from "./rabbitmq.configurations";

@Injectable()
export class TusersService {
  constructor(@InjectRepository(Tuser) private repo: Repository<Tuser>) {}

  async create(body: CreateTuserDto) {
    const user = this.repo.create(body);

    try {
      const rabbitConnection = await connectRabbitMQ();
      if (!rabbitConnection) {
        throw new Error("Failed to connect to RabbitMQ");
      }

      const { channel, exchange } = rabbitConnection;
      await channel.publish(
        exchange,
        "createUser",
        Buffer.from(JSON.stringify(user))
      );
      console.log("Message sent:", user);

      return this.repo.save(user);
    } catch (error) {
      console.error("Failed to publish message to RabbitMQ:", error);
      throw error;
    }
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  findAllTusers() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const tuser = await this.repo.findOne({ where: { id } });

    if (!tuser) {
      throw new NotFoundException("not found");
    }
    return tuser;
  }
}
