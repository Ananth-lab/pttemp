import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomBytes } from "crypto";
import { CreateTuserDto } from "src/tenantUser/tusers/dtos/create-tuser.dto";
import { TusersService } from "src/tenantUser/tusers/tusers.service";
import { scrypt } from "crypto";
import { promisify } from "util";
const scryptAsync = promisify(scrypt);
@Injectable()
export class AuthService {
  constructor(
    private userService: TusersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user && user.password == password) {
      const { password, email, ...rest } = user;
      return rest;
    }
    return null;
  }

  async signup(body: CreateTuserDto) {
    const user = await this.userService.findOne(body.email);
    if (user) {
      throw new BadRequestException('email in use');
    }

    const salt = randomBytes(8).toString('hex');

    const hash = (await scryptAsync(body.password, salt, 32)) as Buffer;
    const result = salt + '.' + hash.toString('hex');

    const newuser = await this.userService.create({
      ...body,
      password: result,
    });

    return newuser;
  }

  async login(user: any) {
    const payload = { id: user.id, model: user.model };
    const token = this.jwtService.sign(payload, {
      secret: "this is secret key",
    });
    return {accessToken : token};
  }
}
