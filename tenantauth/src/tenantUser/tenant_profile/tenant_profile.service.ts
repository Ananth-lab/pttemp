import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTenantProfileDto } from "./dto/create-tenant_profile.dto";
//import { UpdateTenantProfileDto } from "./dto/update-tenant_profile.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TenantProfile } from "./entities/tenant_profile.entity";
import { Repository } from "typeorm";
import { UpdateTenantProfileDto } from "./dto/update-tenant_profile.dto";
require ("dotenv").config()

@Injectable()
export class TenantProfileService {
  constructor(
    @InjectRepository(TenantProfile)
    private readonly profileRepo: Repository<TenantProfile>
  ) {}
  async create(createTenantProfileDto: CreateTenantProfileDto) {
    try {
      return await this.profileRepo.save(createTenantProfileDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, updateTenantProfileDto: UpdateTenantProfileDto) {
    try {
      const profile = await this.profileRepo.findOne({ where: { id: id } });
      if (!profile) return profile;

      if (updateTenantProfileDto.profileImage) {
        profile.profileImage = updateTenantProfileDto.profileImage;
      }

      if (updateTenantProfileDto.billingAddress) {
        profile.billingAddress = updateTenantProfileDto.billingAddress;
      }

      if (updateTenantProfileDto.billingName) {
        profile.billingName = updateTenantProfileDto.billingName;
      }

      if (updateTenantProfileDto.gstin) {
        profile.gstin = updateTenantProfileDto.gstin;
      }

      return await this.profileRepo.save(profile);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
