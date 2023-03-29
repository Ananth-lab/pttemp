import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Psubmodule } from './psubmodule.entity';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';

@Injectable()
export class PsubmodulesService {
  constructor(
    @InjectRepository(Psubmodule) private repo: Repository<Psubmodule>,
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
