import {
  Get,
  Controller,
  Param,
  NotFoundException,
  Post,
  Body,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { CreateModuleDto } from "./dtos/create-module.dto";
import { PmodulesService } from "./pmodules.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("parent_modules")
export class ModulesController {
  constructor(private pmodulesService: PmodulesService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  addModule(@Body() body: CreateModuleDto) {
    return this.pmodulesService.create(body);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  getModules() {
    return this.pmodulesService.find();
  }
  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  async getModule(@Param("id") id: string) {
    const module = await this.pmodulesService.findOne(id);
    if (!module) {
      throw new NotFoundException("Module not found");
    }
    return module;
  }
  @UseGuards(JwtAuthGuard)
  @Get("/:id/submodules")
  async getSubmodules(@Param("id") id: string) {
    const module = await this.pmodulesService.findOneIncludeSubmodule(id);
    if (!module) {
      throw new NotFoundException("Module not found");
    }
    return module;
  }
}
