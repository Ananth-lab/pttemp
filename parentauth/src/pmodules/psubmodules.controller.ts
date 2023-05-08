import { Get, Controller, Param, Post, Body, UseGuards } from '@nestjs/common';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
import { PsubmodulesService } from './psubmodules.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('parent_modules/sub')
export class PsubmodulesController {
  constructor(private submodulesService: PsubmodulesService) {}

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
