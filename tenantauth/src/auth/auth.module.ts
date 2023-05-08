import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { TusersModule } from "src/tenantUser/tusers/tusers.module";
import { PassportModule } from "@nestjs/passport";
import { LocalStrategy } from "./local.strategy";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy";

@Module({
  imports: [
    TusersModule,
    PassportModule,
    JwtModule.register({
      secret: "SECRET",
      signOptions: { expiresIn: "10d" },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports : [AuthService]
})
export class AuthModule {}
