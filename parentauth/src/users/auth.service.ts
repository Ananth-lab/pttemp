import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { TusersService } from './tusers.service';
import { PusersService } from './pusers.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CreateTuserDto } from './dtos/create-tuser.dto';
import { JwtService } from '@nestjs/jwt';
import { CreatePuserDto } from './dtos/create-puser.dto';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private tusersService: TusersService,
    private pusersService: PusersService,
    private jwtService: JwtService,
  ) {}

  async psignup(body: CreatePuserDto) {
    const users = await this.pusersService.find(body.email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }

    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(body.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');

    const user = await this.pusersService.create({ ...body, password: result });

    return user;
  }

  async pSignin(email: string, password: string) {
    const [user] = await this.pusersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('wrong email or password');
    }

    const token = this.jwtService.sign(
      { id: user.id, model: user.model },
      {
        secret: 'this is secret key',
      },
    );

    return { user, token };
  }

  async tsignup(body: CreateTuserDto) {
    const users = await this.tusersService.find(body.email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }

    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(body.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');

    const user = await this.tusersService.create({ ...body, password: result });

    return user;
  }

  async tSignin(email: string, password: string) {
    const [user] = await this.tusersService.find(email);
    if (!user) {
      throw new NotFoundException('user not found');
    }

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString('hex')) {
      throw new BadRequestException('wrong email or password');
    }

    const token = this.jwtService.sign(
      { id: user.id, model: user.model },
      {
        secret: 'this is secret key',
      },
    );

    return { user, token };
  }
}
