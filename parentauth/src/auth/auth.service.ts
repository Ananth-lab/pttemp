import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomBytes } from "crypto";
import { CreatePuserDto } from "src/users/dtos/create-puser.dto";
import { PusersService } from "src/users/pusers.service";
import { TusersService } from "src/users/tusers.service";
import { promisify } from "util";
import { scrypt } from "crypto";
import { CreateTuserDto } from "src/users/dtos/create-tuser.dto";

const scryptAsync = promisify(scrypt);

@Injectable()
export class AuthService {
  constructor(
    private pusersService: PusersService,
    private tusersService : TusersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.pusersService.findOne(email);
    if (!user[0]) {
      throw new NotFoundException("user not found");
    }
    const [salt, storedHash] = user[0].password.split(".");

    const hash = (await scryptAsync(password, salt, 32)) as Buffer;

    if (storedHash !== hash.toString("hex")) {
      throw new BadRequestException("Wrong password");
    }

    if (user && storedHash == hash.toString("hex")) {
      const { password, email, ...rest } = user[0];
      return rest;
    }
    return null;
  }

  async psignup(body: CreatePuserDto) {
    const users = await this.pusersService.findOne(body.email);
    if (users.length) {
      throw new BadRequestException("email in use");
    }
    const salt = randomBytes(8).toString("hex");
    const hash = (await scryptAsync(body.password, salt, 32)) as Buffer;
    const result = salt + "." + hash.toString("hex");
    const user = await this.pusersService.create({ ...body, password: result });
    return user;
  }

  async login(user: any) {
    const payload = { id: user.id, model: user.model };
    const token = this.jwtService.sign(payload, {
      secret: "this is secret key",
    });
    return { user, accessToken: token };
  }
  // async pSignin(email: string, password: string) {
  //   const [user] = await this.pusersService.find(email);
  //   if (!user) {
  //     throw new NotFoundException('user not found');
  //   }

  //   const [salt, storedHash] = user.password.split('.');

  //   const hash = (await scrypt(password, salt, 32)) as Buffer;

  //   if (storedHash !== hash.toString('hex')) {
  //     throw new BadRequestException('wrong email or password');
  //   }

  //   const token = this.jwtService.sign(
  //     { id: user.id, model: user.model },
  //     {
  //       secret: 'this is secret key',
  //     },
  //   );

  //   return { user, token };
  // }

  async tsignup(body: CreateTuserDto) {
    const users = await this.tusersService.find(body.email);
    if (users.length) {
      throw new BadRequestException('email in use');
    }

    if (!body.password) {
      const passwordLength = 10; // Set your desired password length here
      const buffer = await promisify(randomBytes)(passwordLength);
      const randomPassword = buffer.toString('hex');
      body.password = randomPassword;
    }
    const salt = randomBytes(8).toString('hex');
    const hash = (await scryptAsync(body.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');
    const user = await this.tusersService.create({ ...body, password: result });
    return user;
  }
}
