import { Inject, Injectable } from "@nestjs/common";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Subscription } from "./entities/subscription.entity";
import { Repository } from "typeorm";
import * as amqp from "amqplib";
import { PrivilegesService } from "src/privileges/privileges.service";
import { Privilege } from "src/privileges/privilege.entity";
import { createPrivateKey } from "crypto";
import { CreatePrivilegeDto } from "src/privileges/dtos/create-privilege.dto";
import { Role } from "src/roles/role.entity";
import { CreateRoleBodyDto } from "src/roles/dtos/create-role-body.dto";
import { RolesController } from "src/roles/roles.controller";
import { RolesService } from "src/roles/roles.service";
import { RacmapsService } from "src/roles/rac-maps.service";

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subRepo: Repository<Subscription>,
    @InjectRepository(Privilege)
    private readonly privRepo: Repository<Privilege>,
    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,
    private rolesService: RolesService,
    private racmapsService: RacmapsService,
  ) {
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
      console.log("Waiting for messages in subscription-queue", queue);

      // Bind the queue to the exchange with routing keys 'createUser' and 'updateUser'
      await channel.bindQueue(queue, exchange, "tenantSubscriptionDetails");
      await channel.bindQueue(
        queue,
        exchange,
        "updatetenantSubscriptionDetails"
      );

      channel.consume(
        queue,
        async (msg) => {
          if (msg) {
            console.log(
              "Message received:subscription",
              msg.content.toString()
            );
            const subscription = JSON.parse(msg.content.toString());
            if (msg.fields.routingKey === "tenantSubscriptionDetails") {
              const subs = await this.create(subscription.tenantSubscriptionDetails);
              const dto = new CreatePrivilegeDto();
              dto.privilegeName = "super";
              const priv = await this.privRepo.save(dto);
              const roledto = new CreateRoleBodyDto();
              roledto.name = "superadmin";
              const rac = [];
              interface MyObject {
                submoduleId: string[];
                moduleId: string[];
                privilegeId : string;
              }
              
              const obj: MyObject = {
                submoduleId: subs.subModule,
                moduleId: subs.module,
                privilegeId : priv.id
              };

              obj.submoduleId = subs.subModule;
              obj.moduleId = subs.module;
              obj.privilegeId = priv.id;
              
              rac.push(obj);
              roledto.rac = rac;
              const role = await this.rolesService.create(roledto);
              for (let i = 0; i < roledto.rac.length; i++) {
                const tmp = roledto.rac[i];
                this.racmapsService.create({ ...tmp, roleId: role });
              }
            } else if (
              msg.fields.routingKey === "updatetenantSubscriptionDetails"
            ) {
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

  create(createSubscriptionDto: CreateSubscriptionDto) {
    return this.subRepo.save(createSubscriptionDto);
  }

  findAll() {
    return `This action returns all subscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
