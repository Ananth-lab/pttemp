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
import { PmodulesService } from './pmodules.service';

@Controller('parent_modules')
export class ModulesController {
  constructor(private pmodulesService: PmodulesService) {}

  @Post()
  addModule(@Body() body: CreateModuleDto) {
    return this.pmodulesService.create(body);
  }

  @Get()
  getModules() {
    return this.pmodulesService.find();
  }

  @Get('/:id')
  async getModule(@Param('id') id: string) {
    const module = await this.pmodulesService.findOne(id);
    if (!module) {
      throw new NotFoundException('Module not found');
    }
    return module;
  }

  @Get('/:id/submodules')
  async getSubmodules(@Param('id') id: string) {
    const module = await this.pmodulesService.findOneIncludeSubmodule(id);
    if (!module) {
      throw new NotFoundException('Module not found');
    }
    return module;
  }
}
