import { Module } from "@nestjs/common";
import { TenantBranchAddressService } from "./tenant_branch_address.service";
import { TenantBranchAddressController } from "./tenant_branch_address.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TenantBranchAddress } from "./entities/tenant_branch_address.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TenantBranchAddress])],
  controllers: [TenantBranchAddressController],
  providers: [TenantBranchAddressService],
})
export class TenantBranchAddressModule {}
