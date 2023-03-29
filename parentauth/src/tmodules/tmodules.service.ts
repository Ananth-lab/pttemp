import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tmodule } from './tmodule.entity';
import { CreateTmoduleDto } from './dtos/create-module.dto';

@Injectable()
export class TmodulesService {
  constructor(@InjectRepository(Tmodule) private repo: Repository<Tmodule>) {}

  create(data: CreateTmoduleDto) {
    const tmodule = this.repo.create(data);
    return this.repo.save(tmodule);
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
}
