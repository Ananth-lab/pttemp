import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { TusersService } from "./tusers.service";
import { AuthService } from "../../auth/auth.service";
import { LocalAuthGuard } from "src/auth/local-auth.guard";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import { AuthServices } from "./auth.service";

@Controller("tenant_users")
export class TusersController {
  constructor(
    private tusersService: TusersService,
    private authService: AuthService,
    private authServices : AuthServices
  ) {}

  @Get()
  getAll() {
    return this.tusersService.find();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  getUserById(id: string) {
    return this.tusersService.findById(id);
  }

  @Post("/signup")
  addUser(@Body() body: CreateTuserDto) {
    return this.authServices.signup(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post("/login")
  tenantLogin(@Request() req): any {
    return this.authService.login(req.user);
  }
}
