import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  ParseUUIDPipe,
  UsePipes,
  ValidationPipe,
  HttpException,
  UseGuards,
} from "@nestjs/common";
import { TusersService } from "./tusers.service";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import { UpdateTuserDto } from "./dtos/update-tuser.dto";
import { AuthService } from "src/auth/auth.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@Controller("tenant_users")
export class TusersController {
  constructor(
    private tusersService: TusersService,
    private authService: AuthService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post("/signup")
  addUser(@Body() body: CreateTuserDto) {
    return this.authService.tsignup(body);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(":id")
  @UsePipes(ValidationPipe)
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() body: UpdateTuserDto
  ) {
    const organisation = await this.tusersService.update(id, body);
    if (!organisation) throw new HttpException("no data found", 404);
    return "data updated";
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getTusers() {
    return this.tusersService.findAllTusers();
  }

  @UseGuards(JwtAuthGuard)
  @Get("/:id")
  getAPuser(@Param("id") id: string) {
    return this.tusersService.findOne(id);
  }
}
