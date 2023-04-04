import { Module } from "@nestjs/common";
import { TenantBranchService } from "./tenant_branch.service";
import { TenantBranchController } from "./tenant_branch.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TenantBranch } from "./entities/tenant_branch.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TenantBranch])],
  controllers: [TenantBranchController],
  providers: [TenantBranchService],
})
export class TenantBranchModule {}
