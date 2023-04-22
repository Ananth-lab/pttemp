import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTenantOrganisationAddressDto } from "./dto/create-tenant_organisation_address.dto";
import { UpdateTenantOrganisationAddressDto } from "./dto/update-tenant_organisation_address.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TenantOrganisationAddress } from "./entities/tenant_organisation_address.entity";
import { Repository } from "typeorm";
import * as amqp from "amqplib";
require ("dotenv").config()

@Injectable()
export class TenantOrganisationAddressService {
  constructor(
    @InjectRepository(TenantOrganisationAddress)
    private readonly repoOrAd: Repository<TenantOrganisationAddress>
  ) {this.consumeMessages()}


  


  async consumeMessages() {
    try {
      console.log("Connecting to RabbitMQ...");
      const connection = await amqp.connect(process.env.rabbitMqUrl);
      console.log("Connection to RabbitMQ established.");
      const channel = await connection.createChannel();
      const exchange = "user_exchange";
  
      await channel.assertExchange(exchange, "direct", { durable: true });
      const { queue } = await channel.assertQueue("", { exclusive: true });
      console.log("Waiting for messages in organisationAddressQueue", queue);
  
      // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
      await channel.bindQueue(queue, exchange, "tenantOrgAdddressDetails");
      await channel.bindQueue(queue, exchange, "updatetenantOrgAdddressDetails");
  
      channel.consume(
        queue,
        async (msg) => {
          if (msg) {
            console.log("Message received:", msg.content.toString());
            const organisationAddress= JSON.parse(msg.content.toString());
            if (msg.fields.routingKey === "tenantOrgAdddressDetails") {
              await this.create(organisationAddress.tenantOrgAdddressDetails);
            } else if (msg.fields.routingKey === "updatetenantOrgAdddressDetails") {
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
  
  async findOne(id: string) {
    try{
      return await this.repoOrAd.findOne({where:{id}, relations: {tenantOrganisationId:{tUserId:true,industry_domain:true},country:true,state:true}});
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  async create(
    createTenantOrganisationAddressDto: CreateTenantOrganisationAddressDto
  ) {
    try {
      if (
        (createTenantOrganisationAddressDto.isParent == null &&
          createTenantOrganisationAddressDto.parentOaddress) ||
        (createTenantOrganisationAddressDto.isParent == false &&
          createTenantOrganisationAddressDto.parentOaddress)
      ) {
        createTenantOrganisationAddressDto.isParent == false;
        createTenantOrganisationAddressDto.parentOaddress = null;
      }
      return await this.repoOrAd.save(createTenantOrganisationAddressDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(
    id: string,
    updateTenantOrganisationAddressDto: UpdateTenantOrganisationAddressDto
  ) {
    try {
      const orgAdd = await this.repoOrAd.findOne({ where: { id } });
      if (!orgAdd) return orgAdd;
      if (updateTenantOrganisationAddressDto.name) {
        orgAdd.name = updateTenantOrganisationAddressDto.name;
      }
      if (updateTenantOrganisationAddressDto.address) {
        orgAdd.address = updateTenantOrganisationAddressDto.address;
      }
      if (updateTenantOrganisationAddressDto.plot_no) {
        orgAdd.plot_no = updateTenantOrganisationAddressDto.plot_no;
      }
      if (updateTenantOrganisationAddressDto.city) {
        orgAdd.city = updateTenantOrganisationAddressDto.city;
      }
      if (updateTenantOrganisationAddressDto.state) {
        orgAdd.state = updateTenantOrganisationAddressDto.state;
      }
      if (updateTenantOrganisationAddressDto.post_code) {
        orgAdd.post_code = updateTenantOrganisationAddressDto.post_code;
      }
      if (updateTenantOrganisationAddressDto.country) {
        orgAdd.country = updateTenantOrganisationAddressDto.country;
      }
      if (updateTenantOrganisationAddressDto.isParent) {
        orgAdd.parentOaddress =
          updateTenantOrganisationAddressDto.parentOaddress;
        orgAdd.isParent = updateTenantOrganisationAddressDto.isParent;
      }
      return await this.repoOrAd.save(orgAdd);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string) {
    try {
      return await this.repoOrAd.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
