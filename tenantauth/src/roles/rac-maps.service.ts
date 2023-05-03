import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.repo.save(role);
  }

  async remove(id: Role) {
    const records = await this.repo.find({ where: { roleId: id } });
    return this.repo.remove(records);

    // const role = await this.repo.findOne({ where: { id } });
    // if (!role) {
    //   throw new NotFoundException('role not found');
    // }
    // return this.repo.remove(role);

    // this.repo.delete({ roleId: id });
  }
}
