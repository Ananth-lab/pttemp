import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Privilege } from './privilege.entity';
import { CreatePrivilegeDto } from './dtos/create-privilege.dto';

@Injectable()
export class PrivilegesService {
  constructor(
    @InjectRepository(Privilege) private repo: Repository<Privilege>,
  ) {}

  create(data: CreatePrivilegeDto) {
    const privilege = this.repo.create(data);
    return this.repo.save(privilege);
  }

  find() {
    return this.repo.find();
  }
}
