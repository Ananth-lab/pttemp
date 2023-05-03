import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Submodule } from './submodule.entity';
import { CreateSubmoduleDto } from './dtos/create-submodule.dto';

@Injectable()
export class SubmodulesService {
  constructor(
    @InjectRepository(Submodule) private repo: Repository<Submodule>,
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
