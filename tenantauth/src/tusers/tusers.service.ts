import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tuser } from './tuser.entity';
import { CreateTuserDto } from './dtos/create-tuser.dto';
import { receiveMessage } from './rabbitmq.receiver';

@Injectable()
export class TusersService {
  constructor(@InjectRepository(Tuser) private repo: Repository<Tuser>) {}

  create(body: CreateTuserDto) {
    receiveMessage()
    // const user = this.repo.create(body);
    // this.repo.save(user);
  }

  findOne(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  find() {
    return this.repo.find();
  }

  async findById(id: string) {
    const tuser = await this.repo.findOne({ where: { id } });
    if (!tuser) {
      throw new NotFoundException('user not found!');
    }
  }
}
