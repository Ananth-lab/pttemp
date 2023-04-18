import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpException, HttpCode, ValidationPipe, UsePipes } from '@nestjs/common';
import { IndustryDomainService } from './industry_domain.service';
import { CreateIndustryDomainDto } from './dto/create-industry_domain.dto';
import { UpdateIndustryDomainDto } from './dto/update-industry_domain.dto';

@Controller('industry-domain')
export class IndustryDomainController {
  constructor(private readonly industryDomainService: IndustryDomainService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createIndustryDomainDto: CreateIndustryDomainDto) {
    return await this.industryDomainService.create(createIndustryDomainDto);
  }

  @Get()
 async findAll() {
    return await this.industryDomainService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.industryDomainService.findOne(+id);
  // }

  @Patch(':id')
  @UsePipes(ValidationPipe)
 async update(@Param('id',ParseUUIDPipe) id: string, @Body() updateIndustryDomainDto: UpdateIndustryDomainDto) {
    const domain= await this.industryDomainService.update(id, updateIndustryDomainDto);
    if (!domain) throw new HttpException("no data found", 404);
    return "data updated";
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id',ParseUUIDPipe) id: string) {
    return await this.industryDomainService.remove(id);
  }
}
