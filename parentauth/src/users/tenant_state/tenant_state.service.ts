import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTenantStateDto } from './dto/create-tenant_state.dto';
import { UpdateTenantStateDto } from './dto/update-tenant_state.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantState } from './entities/tenant_state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenantStateService {
  constructor(@InjectRepository(TenantState) private readonly statRep:Repository<TenantState>){}

  
  async create(createTenantStateDto: CreateTenantStateDto) {
    try{
    return await this.statRep.save(createTenantStateDto) 
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }

  }

  // findAll() {
  //   return `This action returns all tenantState`;
  // }

  async findOne(id: string) {
    try{
    return await this.statRep.findOne({where:{id}});
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }
  // update(id: number, updateTenantStateDto: UpdateTenantStateDto) {
  //   return `This action updates a #${id} tenantState`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} tenantState`;
  // }
}
