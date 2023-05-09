import { Get, Controller, Param, Post, Body, UseGuards } from '@nestjs/common';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
import { TsubmodulesService } from './tsubmodules.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('tenant_modules/sub')
export class TsubmodulesController {
  constructor(private submodulesService: TsubmodulesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  addModule(@Body() body: CreateSubmoduleDto) {
    return this.submodulesService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getModules() {
    return this.submodulesService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getModule(@Param('id') id: string) {
    // const user = await this.tmodulesService.findOne(parseInt(id));
    // if (!user) {
    //   throw new NotFoundException('User not found');
    // }
    // return user;
    // return
  }
}
