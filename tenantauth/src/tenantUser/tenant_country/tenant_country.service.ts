import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateTenantCountryDto } from './dto/create-tenant_country.dto';
import { UpdateTenantCountryDto } from './dto/update-tenant_country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantCountry } from './entities/tenant_country.entity';
import { Repository } from 'typeorm';
import * as amqp from "amqplib";
require ("dotenv").config()
import { connectRabbitMQ } from '../rabbitM/rabbitMq.sender';

@Injectable()
export class TenantCountryService {
constructor(@InjectRepository(TenantCountry)private readonly countryRepository:Repository<TenantCountry>){this.consumeMessages()}



async consumeMessages() {
  try {
    console.log("Connecting to RabbitMQ...");
    const connection = await amqp.connect(process.env.rabbitMqUrl);
    console.log("Connection to RabbitMQ established.");
    const channel = await connection.createChannel();
    const exchange = "user_exchange";

    await channel.assertExchange(exchange, "direct", { durable: true });
    const { queue } = await channel.assertQueue("", { exclusive: true });
    console.log("Waiting for messages in queue:Country", queue);

    // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
    await channel.bindQueue(queue, exchange, "createCountry");
    await channel.bindQueue(queue, exchange, "updatCountry");

    channel.consume(
      queue,
      async (msg) => {
        if (msg) {
          console.log("Message received:", msg.content.toString());
          const country:TenantCountry= JSON.parse(msg.content.toString());
          if (msg.fields.routingKey === "createCountry") {
            await this.create(country);
          } else if (msg.fields.routingKey === "updateCountry") {
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

  async create(createTenantCountryDto: CreateTenantCountryDto) {
    try{
      return await this.countryRepository.save(createTenantCountryDto)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  
  }

  // findAll() {
  //   return `This action returns all tenantCountry`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} tenantCountry`;
  // }

  async  update(id: string, updateTenantCountryDto: UpdateTenantCountryDto) {
    try{ 
      const country =await this.countryRepository.findOne({where:{id}})
      if(!country) return country 
      if(updateTenantCountryDto.name)country.name=updateTenantCountryDto.name
      const teantCountry= this.countryRepository.save(country)
      const rabbitConnection = await connectRabbitMQ();
      if (!rabbitConnection) {
        throw new Error('Failed to connect to RabbitMQ');
      }
  
      const { channel, exchange } = rabbitConnection;
      await channel.publish(exchange, 'updateCountryByT', Buffer.from(JSON.stringify(teantCountry)));
      console.log('Message sent: from teantCountry',teantCountry);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  // remove(id: number) {
  //   return `This action removes a #${id} tenantCountry`;
  // }
}
