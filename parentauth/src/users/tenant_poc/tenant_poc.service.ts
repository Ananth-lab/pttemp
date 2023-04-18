import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTenantPocDto } from './dto/create-tenant_poc.dto';
import { UpdateTenantPocDto } from './dto/update-tenant_poc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantPoc } from './entities/tenant_poc.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenantPocService {
  constructor(@InjectRepository(TenantPoc) private readonly tenantPocRepo : Repository<TenantPoc>){}
  async create(createTenantPocDto: CreateTenantPocDto) {
    return await this.tenantPocRepo.save(createTenantPocDto)
  }

  // findAll() {
  //   return `This action returns all tenantPoc`;
  // }

  async findOne(id: string) {
    try{
    return await this.tenantPocRepo.findOne({where:{id}});
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  async update(id: string, updateTenantPocDto: UpdateTenantPocDto) {
    try{
      const currPoc = await this.tenantPocRepo.findOne({where : {id :id}});
      if(!currPoc) return currPoc;

      if(updateTenantPocDto.email){
        currPoc.email = updateTenantPocDto.email
      }

      if(updateTenantPocDto.name){
        currPoc.name = updateTenantPocDto.name
      }

      if(updateTenantPocDto.phone){
        currPoc.phone = updateTenantPocDto.phone
      }

      if(updateTenantPocDto.mobile){
        currPoc.mobile = updateTenantPocDto.mobile
      }
      await this.tenantPocRepo.save(currPoc);
      
      return "data updated"
    }
    catch(error){
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // remove(id: number) {
  //   return `This action removes a #${id} tenantPoc`;
  // }
}
