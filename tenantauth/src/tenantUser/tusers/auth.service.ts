import { BadRequestException, Injectable } from '@nestjs/common';
import { TusersService } from './tusers.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CreateTuserDto } from './dtos/create-tuser.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private tusersService: TusersService) {}

  async signup(body: CreateTuserDto) {
    const user = await this.tusersService.findOne(body.email);
    if (user) {
      throw new BadRequestException('email in use');
    }

    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(body.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');

    const newuser = await this.tusersService.create({
      ...body,
      password: result,
    });

    return newuser;
  }

  signin() {}
}
