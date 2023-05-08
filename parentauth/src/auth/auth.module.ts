import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: "this is secret key",
      signOptions: { expiresIn: "10d" },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports : [AuthService]
})
export class AuthModule {}
