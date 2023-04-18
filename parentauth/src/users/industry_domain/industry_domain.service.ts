import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateIndustryDomainDto } from './dto/create-industry_domain.dto';
import { UpdateIndustryDomainDto } from './dto/update-industry_domain.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IndustryDomain } from './entities/industry_domain.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IndustryDomainService {
constructor(@InjectRepository(IndustryDomain) private readonly domainRepo:Repository<IndustryDomain>){}

  async create(createIndustryDomainDto: CreateIndustryDomainDto) {
    try{ 
      return await this.domainRepo.save(createIndustryDomainDto)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

 async findAll() {
    try{ 
      return await this.domainRepo.find()
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async findOne(id: string) {
    try{
    return await this.domainRepo.findOne({where:{id}});
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  async update(id:string, updateIndustryDomainDto: UpdateIndustryDomainDto) {
    try{ 
      const domain =await this.domainRepo.findOne({where:{id}})
      if(!domain) return domain 
      if(updateIndustryDomainDto.name)domain.name=updateIndustryDomainDto.name
      return this.domainRepo.save(domain)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  

  async remove(id: string) {
    try{ 
      return await this.domainRepo.delete(id)
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
