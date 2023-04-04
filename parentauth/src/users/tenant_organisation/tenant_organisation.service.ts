import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTenantOrganisationDto } from './dto/create-tenant_organisation.dto';
import { UpdateTenantOrganisationDto } from './dto/update-tenant_organisation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantOrganisation } from './entities/tenant_organisation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenantOrganisationService {
constructor(@InjectRepository(TenantOrganisation) private readonly OrgRepo:Repository<TenantOrganisation>){}
  async create(createTenantOrganisationDto: CreateTenantOrganisationDto) {
    try{
    return await this.OrgRepo.save(createTenantOrganisationDto)
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}

  

  // findAll() {
  //   return `This action returns all tenantOrganisation`;
  // }

  // findOne(id: String) {
  //   return `This action returns a #${id} tenantOrganisation`;
  // }

  async update(id: string, updateTenantOrganisationDto: UpdateTenantOrganisationDto) {
    try{
    const organisation = await this.OrgRepo.findOne({ where: { id: id } });
   if(!organisation) return organisation

   
    // Update fields that are present in the update DTO
    if (updateTenantOrganisationDto.name) {
      organisation.name = updateTenantOrganisationDto.name;
    }
    if (updateTenantOrganisationDto.tradename) {
      organisation.tradename = updateTenantOrganisationDto.tradename;
    }
    if (updateTenantOrganisationDto.gstin) {
      organisation.gstin = updateTenantOrganisationDto.gstin;
    }
    if (updateTenantOrganisationDto.pan) {
      organisation.pan = updateTenantOrganisationDto.pan;
    }
    if (updateTenantOrganisationDto.industry_domain) {
      organisation.industry_domain = updateTenantOrganisationDto.industry_domain;
    }
    if (updateTenantOrganisationDto.isParent !== undefined) {
      organisation.isParent = updateTenantOrganisationDto.isParent;
    }
    if (updateTenantOrganisationDto.parentOrganisationId) {
      // const parentOrganisation = await this.OrgRepo.findOne(updateTenantOrganisationDto.parentOrganisation);
      // if (!parentOrganisation) {
      //   throw new NotFoundException(`Parent organisation with id ${updateTenantOrganisationDto.parentOrganisation} not found`);
      // }
      organisation.parentOrganisationId =updateTenantOrganisationDto.parentOrganisationId;
    }
    if (updateTenantOrganisationDto.billing_address) {
      organisation.billing_address = updateTenantOrganisationDto.billing_address;
    }

    return await this.OrgRepo.save(organisation);
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  }

  async remove(id: string) {
    try{
    return await this.OrgRepo.delete(id)
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }
}
