import {
  Get,
  Controller,
  Param,
  NotFoundException,
  Post,
  Body,
  Delete,
} from '@nestjs/common';
import { CreateModuleDto } from './dtos/create-module.dto';
import { ModulesService } from './modules.service';

@Controller('tenant_modules')
export class ModulesController {
  constructor(private tmodulesService: ModulesService) {}

  @Post()
  addModule(@Body() body: CreateModuleDto) {
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
