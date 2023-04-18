import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tuser } from './tuser.entity';
import { CreateTuserDto } from './dtos/create-tuser.dto';
import { connectRabbitMQ } from './rabbit';
import { UpdateTuserDto } from './dtos/update-tuser.dto';


@Injectable()
export class TusersService {
  constructor(@InjectRepository(Tuser) private repo: Repository<Tuser>) {}

  async create(body: CreateTuserDto) {
    try {
      const user =  await this.repo.save(body);
      const rabbitConnection = await connectRabbitMQ();
      if (!rabbitConnection) {
        throw new Error('Failed to connect to RabbitMQ');
      }
  
      const { channel, exchange } = rabbitConnection;
      await channel.publish(exchange, 'createUser', Buffer.from(JSON.stringify(user)));
      console.log('Message sent:', user);
  
     // const user1 =await this.repo.save(user);
    //  console.log(user,"receving from postna")
      return user
    } catch (error) {
      console.error('Failed to publish message to RabbitMQ:', error);
      throw error;
    }
  }
  


  find(email: string) {
    return this.repo.find({ where: { email } });
  }

  findAllTusers() {
    return this.repo.find();
  }

  async update(
    id: string,
    UpdateTuserDto: UpdateTuserDto
  ) {
      const user = await this.repo.findOne({ where: { id: id } });
      if (!user) return user;
      if(UpdateTuserDto.email ){
        user.email = UpdateTuserDto.email; 
      }
      if(UpdateTuserDto.name ){
        user.name = UpdateTuserDto.name; 
      }
      if(UpdateTuserDto.mobile ){
        user.mobile = UpdateTuserDto.mobile; 
      }

      return await this.repo.save(user)
    }

  async findOne(id: string) {
    const tuser = await this.repo.findOne({ where: { id } });

    if (!tuser) {
      throw new NotFoundException('not found');
    }
    return tuser;
  }
}
