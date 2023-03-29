import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
import { PsubmodulesService } from './psubmodules.service';

@Controller('parent_modules/sub')
export class PsubmodulesController {
  constructor(private submodulesService: PsubmodulesService) {}

  @Post()
  addModule(@Body() body: CreateSubmoduleDto) {
    return this.submodulesService.create(body);
  }

  @Get()
  getModules() {
    return this.submodulesService.find();
  }

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
