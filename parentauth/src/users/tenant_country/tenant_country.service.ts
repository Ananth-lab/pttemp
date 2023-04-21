import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateTenantCountryDto } from './dto/create-tenant_country.dto';
import { UpdateTenantCountryDto } from './dto/update-tenant_country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantCountry } from './entities/tenant_country.entity';
import { Repository } from 'typeorm';
import * as amqp from "amqplib";

@Injectable()
export class TenantCountryService {
constructor(@InjectRepository(TenantCountry)private readonly countryRepository:Repository<TenantCountry>){this.consumeMessages()}

async consumeMessages() {
  try {
    console.log("Connecting to RabbitMQ...");
    const connection = await amqp.connect(process.env.rabbitMqUrl);
    console.log("Connection to RabbitMQ established.");
    const channel = await connection.createChannel();
    const exchange = "tUser_exchange";

    await channel.assertExchange(exchange, "direct", { durable: true });
    const { queue } = await channel.assertQueue("", { exclusive: true });
    console.log("Waiting for messages in queue:Country", queue);

    // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
    await channel.bindQueue(queue, exchange, "tenantCountryDetails");
    await channel.bindQueue(queue, exchange, "updatetenantCountryDetails");

    channel.consume(
      queue,
      async (msg) => {
        if (msg) {
          console.log("Message received:", msg.content.toString());
          const country= JSON.parse(msg.content.toString());
          if (msg.fields.routingKey === "tenantCountryDetails") {
            await this.create(country.tenantCountryDetails);
            console.log("created")
          } else if (msg.fields.routingKey === "updatetenantCountryDetails") {
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




  async findOne(id: string) {
    try{
    return await this.countryRepository.findOne({where:{id}});
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

  // update(id: number, updateTenantCountryDto: UpdateTenantCountryDto) {
  //   return `This action updates a #${id} tenantCountry`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tenantCountry`;
  // }
}
