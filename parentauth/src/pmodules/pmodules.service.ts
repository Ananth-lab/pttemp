import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Pmodule } from './pmodule.entity';
import { CreateModuleDto } from './dtos/create-module.dto';
import { Psubmodule } from './psubmodule.entity';

@Injectable()
export class PmodulesService {
  constructor(@InjectRepository(Pmodule) private repo: Repository<Pmodule>) {}

  create(data: CreateModuleDto) {
    const module = this.repo.create(data);
    return this.repo.save(module);
  }

  find() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  findOneIncludeSubmodule(id: string) {
    return this.repo.findOne({
      where: { id },
      relations: { submodules: true },
    });
  }

  async remove(id: string) {
    const module = await this.findOne(id);
    if (!module) {
      throw new NotFoundException('module not found');
    }
    return this.repo.remove(module);
  }
}
