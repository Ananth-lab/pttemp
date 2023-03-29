import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tsubmodule } from './tsubmodule.entity';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';

@Injectable()
export class TsubmodulesService {
  constructor(
    @InjectRepository(Tsubmodule) private repo: Repository<Tsubmodule>,
  ) {}

  create(data: CreateSubmoduleDto) {
    const module = this.repo.create(data);
    return this.repo.save(module);
  }

  find() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne({ where: { id } });
  }
}
