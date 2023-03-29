import {
  Body,
  Controller,
  Get,
  Post,
  NotFoundException,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { BsmapsService } from './bsmaps.service';
import { BundlesService } from './bundles.service';
import { CreateBundleBodyDto } from './dtos/create-bundle-body.dto';
import { UpdateBundleDto } from './dtos/update-bundle.dto';
import { UpdateBundleSubmoduleDto } from './dtos/update-bundle-submodule.dto';

@Controller('bundles')
export class BundlesController {
  constructor(
    private bundlesService: BundlesService,
    private bsmapsService: BsmapsService,
  ) {}

  @Post()
  async addBundle(@Body() body: CreateBundleBodyDto) {
    const bundle = await this.bundlesService.create(body);
    for (let i = 0; i < body.submoduleIds.length; i++) {
      const tsubmodule = body.submoduleIds[i];
      this.bsmapsService.create({ tsubmodule, bundle });
    }

    return bundle;
  }

  @Get()
  getBundles() {
    return this.bundlesService.find();
  }

  @Patch('/:id')
  updateBundle(@Param('id') id: string, @Body() body: UpdateBundleDto) {
    return this.bundlesService.update(id, body);
  }

  @Delete('/:id')
  deleteBundle(@Param('id') id: string) {
    return this.bundlesService.remove(id);
  }

  @Get('/:id/submodules')
  async getSubmodules(@Param('id') id: string) {
    const bundle = await this.bundlesService.findOneIncludeSubmodule(id);
    if (!bundle) {
      throw new NotFoundException('bundle not found');
    }
    return bundle;
  }

  @Patch('/:id/submodules')
  async updateSubmodules(
    @Param('id') id: string,
    @Body() body: UpdateBundleSubmoduleDto,
  ) {
    const bundle = await this.bundlesService.findById(id);
    if (!bundle) {
      throw new NotFoundException('bundle not found!');
    }

    await this.bsmapsService.remove(bundle);

    for (let i = 0; i < body.submoduleIds.length; i++) {
      const tsubmodule = body.submoduleIds[i];
      this.bsmapsService.create({ tsubmodule, bundle });
    }

    return bundle;
  }
}
