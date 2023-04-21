import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateIndustryDomainDto } from './dto/create-industry_domain.dto';
import { UpdateIndustryDomainDto } from './dto/update-industry_domain.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IndustryDomain } from './entities/industry_domain.entity';
import { Repository } from 'typeorm';
import * as amqp from "amqplib";
@Injectable()
export class IndustryDomainService {
constructor(@InjectRepository(IndustryDomain) private readonly domainRepo:Repository<IndustryDomain>){this.consumeMessages()}


async consumeMessages() {
  try {
    console.log("Connecting to RabbitMQ...");
    const connection = await amqp.connect(process.env.rabbitMqUrl);
    console.log("Connection to RabbitMQ established.");
    const channel = await connection.createChannel();
    const exchange = "tUser_exchange";

    await channel.assertExchange(exchange, "direct", { durable: true });
    const { queue } = await channel.assertQueue("", { exclusive: true });
    console.log("Waiting for messages in queue: Domain", queue);

    // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
    await channel.bindQueue(queue, exchange, "tenantIndustyDetails");
    await channel.bindQueue(queue, exchange, "updatetenantIndustyDetails");

    channel.consume(
      queue,
      async (msg) => {
        if (msg) {
          console.log("Message received:", msg.content.toString());
          const domain = JSON.parse(msg.content.toString());
          if (msg.fields.routingKey === "tenantIndustyDetails") {
            await this.create(domain.tenantIndustyDetails);
          } else if (msg.fields.routingKey === "updatetenantIndustyDetails") {
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

  async create(createIndustryDomainDto: CreateIndustryDomainDto) {
    try{ 
      return await this.domainRepo.save(createIndustryDomainDto)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async findAll() {
    try{ 
      return await this.domainRepo.find()
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async findOne(id: string) {
    try{
    return await this.domainRepo.findOne({where:{id}});
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  async update(id:string, updateIndustryDomainDto: UpdateIndustryDomainDto) {
    try{ 
      const domain =await this.domainRepo.findOne({where:{id}})
      if(!domain) return domain 
      if(updateIndustryDomainDto.name)domain.name=updateIndustryDomainDto.name
      return this.domainRepo.save(domain)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  

  async remove(id: string) {
    try{ 
      return await this.domainRepo.delete(id)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
