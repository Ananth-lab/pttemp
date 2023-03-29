import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TmodulesService } from './tmodules.service';
import { CreateTmoduleDto } from './dtos/create-module.dto';

@Controller('tenant_modules')
export class TmodulesController {
  constructor(private tmodulesService: TmodulesService) {}

  @Post()
  addModule(@Body() body: CreateTmoduleDto) {
    return this.tmodulesService.create(body);
  }

  @Get()
  getModules() {
    return this.tmodulesService.find();
  }

  @Get('/:id')
  async getModule(@Param('id') id: string) {
    const module = await this.tmodulesService.findOne(id);
    if (!module) {
      throw new NotFoundException('Module not found');
    }
    return module;
  }

  @Get('/:id/submodules')
  async getSubmodules(@Param('id') id: string) {
    const module = await this.tmodulesService.findOneIncludeSubmodule(id);
    if (!module) {
      throw new NotFoundException('Module not found');
    }
    return module;
  }
}
