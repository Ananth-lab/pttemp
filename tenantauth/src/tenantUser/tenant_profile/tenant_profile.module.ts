import { Module } from "@nestjs/common";
import { TenantProfileService } from "./tenant_profile.service";
import { TenantProfileController } from "./tenant_profile.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TenantProfile } from "./entities/tenant_profile.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TenantProfile])],
  controllers: [TenantProfileController],
  providers: [TenantProfileService],
})
export class TenantProfileModule {}
