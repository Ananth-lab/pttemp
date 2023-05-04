import { HttpException, Injectable } from "@nestjs/common";
import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Subscription } from "./entities/subscription.entity";
import { Equal, Repository } from "typeorm";
import { Tmodule } from "src/tmodules/tmodule.entity";
import { Tsubmodule } from "src/tmodules/tsubmodule.entity";

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subRepo: Repository<Subscription>,
    @InjectRepository(Tmodule)
    private readonly moduleRepo : Repository<Tmodule>,
    @InjectRepository(Tsubmodule)
    private readonly subModuleRepo : Repository<Tsubmodule>,

  ) {}
  async create(createSubscriptionDto: CreateSubscriptionDto) {
    let errorMessages = [];
  
    if (createSubscriptionDto.module) {
      for (const moduleId of createSubscriptionDto.module) {
        const data = await this.moduleRepo.findOne({ where: { id: moduleId } });
        if (!data) {
          errorMessages.push(`Module with ID ${moduleId} not found`);
        }
      }
    }
  
    if (createSubscriptionDto.subModule) {
      for (const submoduleId of createSubscriptionDto.subModule) {
        const data = await this.subModuleRepo.findOne({ where: { id: submoduleId } });
        if (!data) {
          errorMessages.push(`Submodule with ID ${submoduleId} not found`);
        }
      }
    }
  
    if (errorMessages.length > 0) {
      const errorResponse = {
        message: 'Validation failed',
        errors: errorMessages,
      };
      return {
        statusCode: 400,
        body: errorResponse,
      };
    }
  
    const savedSubscription = await this.subRepo.save(createSubscriptionDto);
    return {
      statusCode: 201,
      body: savedSubscription,
    };
  }
  
  

  findAll() {
    return `This action returns all subscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  findOneByTuserId(id : any){
    return this.subRepo.findOne({where : {tUser : Equal(id)}})
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscription`;
  }
}
