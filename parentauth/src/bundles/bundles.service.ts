import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bundle } from './bundle.entity';
import { CreateBundleDto } from './dtos/create-bundle.dto';
import { UpdateBundleDto } from './dtos/update-bundle.dto';

@Injectable()
export class BundlesService {
  constructor(@InjectRepository(Bundle) private repo: Repository<Bundle>) {}

  // create(data: CreateRoleDto) {
  //   const role = this.repo.create(data);
  //   return this.repo.save(role);
  // }
  create(data: CreateBundleDto) {
    const bundle = this.repo.create(data);
    return this.repo.save(bundle);
  }

  find() {
    return this.repo.find();
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  async remove(id: string) {
    const bundle = await this.repo.findOne({ where: { id } });
    if (!bundle) {
      throw new NotFoundException('bundle not found');
    }
    return this.repo.remove(bundle);
  }

  findOneIncludeSubmodule(id: string) {
    return this.repo.findOne({
      where: { id },
      relations: {
        bsmaps: {
          tsubmodule: true,
        },
      },
    });
  }

  async update(id: string, data: UpdateBundleDto) {
    const bundle = await this.repo.findOne({ where: { id } });
    if (!bundle) {
      throw new NotFoundException('bundle not found');
    }

    if (data.name) bundle.name = data.name;
    if (data.description) bundle.description = data.description;
    if (data.status) bundle.status = data.status;
    if (data.isPaid) bundle.isPaid = data.isPaid;
    return this.repo.save(bundle);
  }
}
