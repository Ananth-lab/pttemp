import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTenantOrganisationAddressDto } from './dto/create-tenant_organisation_address.dto';
import { UpdateTenantOrganisationAddressDto } from './dto/update-tenant_organisation_address.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantOrganisationAddress } from './entities/tenant_organisation_address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenantOrganisationAddressService {
constructor(@InjectRepository(TenantOrganisationAddress) private readonly repoOrAd:Repository<TenantOrganisationAddress>){}



  async create(createTenantOrganisationAddressDto: CreateTenantOrganisationAddressDto) {
    try{
    return await this.repoOrAd.save(createTenantOrganisationAddressDto)
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }


  async update(id: string, updateTenantOrganisationAddressDto: UpdateTenantOrganisationAddressDto) {
    try{
   const orgAdd=await this.repoOrAd.findOne({where:{id}})
   if(!orgAdd) return orgAdd
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
  return await this.repoOrAd.save(orgAdd);
} catch (error) {
  throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
}
  }
  

  async remove(id: string) {
    try{
    return await this.repoOrAd.delete(id)
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }
}
