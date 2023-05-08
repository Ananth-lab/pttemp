import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { TusersService } from "src/tenantUser/tusers/tusers.service";

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

  async login(user: any) {
    const payload = { id: user.id, model: user.model };
    const token = this.jwtService.sign(payload, {
      secret: "this is secret key",
    });
    return {accessToken : token};
  }
}
