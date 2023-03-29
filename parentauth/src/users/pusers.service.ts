import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Puser } from './puser.entity';
import { CreatePuserDto } from './dtos/create-puser.dto';

@Injectable()
export class PusersService {
  constructor(@InjectRepository(Puser) private repo: Repository<Puser>) {}

  create(body: CreatePuserDto) {
    const user = this.repo.create(body);
    return this.repo.save(user);
  }

  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  findAllPusers() {
    return this.repo.find();
  }
}
