import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateTenantCountryDto } from './dto/create-tenant_country.dto';
import { UpdateTenantCountryDto } from './dto/update-tenant_country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantCountry } from './entities/tenant_country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenantCountryService {
constructor(@InjectRepository(TenantCountry)private readonly countryRepository:Repository<TenantCountry>){}

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

  // update(id: number, updateTenantCountryDto: UpdateTenantCountryDto) {
  //   return `This action updates a #${id} tenantCountry`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tenantCountry`;
  // }
}
