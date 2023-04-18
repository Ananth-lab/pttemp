import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateIndustryDomainDto } from './dto/create-industry_domain.dto';
import { UpdateIndustryDomainDto } from './dto/update-industry_domain.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IndustryDomain } from './entities/industry_domain.entity';
import { Repository } from 'typeorm';
import * as amqp from "amqplib";
import { connectRabbitMQ } from '../rabbitM/rabbitMq.sender';

@Injectable()
export class IndustryDomainService {
constructor(@InjectRepository(IndustryDomain) private readonly domainRepo:Repository<IndustryDomain>){this.consumeMessages()}

async consumeMessages() {
  try {
    console.log("Connecting to RabbitMQ...");
    const connection = await amqp.connect("amqp://localhost");
    console.log("Connection to RabbitMQ established.");
    const channel = await connection.createChannel();
    const exchange = "user_exchange";

    await channel.assertExchange(exchange, "direct", { durable: true });
    const { queue } = await channel.assertQueue("", { exclusive: true });
    console.log("Waiting for messages in queue: Domain", queue);

    // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
    await channel.bindQueue(queue, exchange, "createIndustryDomain");
    await channel.bindQueue(queue, exchange, "updatIndustryDomain");

    channel.consume(
      queue,
      async (msg) => {
        if (msg) {
          console.log("Message received:", msg.content.toString());
          const domain: IndustryDomain = JSON.parse(msg.content.toString());
          if (msg.fields.routingKey === "createIndustryDomain") {
            await this.create(domain);
          } else if (msg.fields.routingKey === "updateIndustryDomain") {
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


  // findOne(id: number) {
  //   return `This action returns a #${id} industryDomain`;
  // }

  async update(id:string, updateIndustryDomainDto: UpdateIndustryDomainDto) {
    try{ 
      const domain =await this.domainRepo.findOne({where:{id}})
      if(!domain) return domain 
      if(updateIndustryDomainDto.name)domain.name=updateIndustryDomainDto.name
      const industryDomain= this.domainRepo.save(domain)
      const rabbitConnection = await connectRabbitMQ();
      if (!rabbitConnection) {
        throw new Error('Failed to connect to RabbitMQ');
      }
  
      const { channel, exchange } = rabbitConnection;
      await channel.publish(exchange, 'updateIndustryDomainByT', Buffer.from(JSON.stringify(industryDomain)));
      console.log('Message sent: from industryDomain',industryDomain);
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
