import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Racmap } from './rac-map.entity';
import { CreateRacmapDto } from './dtos/create-racmap.dto';
import { Role } from './role.entity';

@Injectable()
export class RacmapsService {
  constructor(@InjectRepository(Racmap) private repo: Repository<Racmap>) {}

  create(data: CreateRacmapDto) {
    const role = this.repo.create(data);
    this.repo.save(role);
  }

  async remove(id: Role) {
    const records = await this.repo.find({ where: { roleId: id } });
    return this.repo.remove(records);
  }
}
