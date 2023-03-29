import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bsmap } from './bsmap.entity';
import { CreateBsmapDto } from './dtos/create-bsmap';
import { Bundle } from './bundle.entity';

@Injectable()
export class BsmapsService {
  constructor(@InjectRepository(Bsmap) private repo: Repository<Bsmap>) {}

  create(data: CreateBsmapDto) {
    const role = this.repo.create(data);
    this.repo.save(role);
  }

  async remove(id: Bundle) {
    const records = await this.repo.find({ where: { bundle: id } });
    return this.repo.remove(records);
  }
}
