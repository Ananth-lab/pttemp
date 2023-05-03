import { Get, Controller, Param, Post, Body } from '@nestjs/common';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
import { SubmodulesService } from './submodules.service';

@Controller('tenant_modules/sub')
export class SubmodulesController {
  constructor(private submodulesService: SubmodulesService) {}

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
