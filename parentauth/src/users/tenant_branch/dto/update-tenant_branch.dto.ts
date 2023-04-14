import { PartialType } from "@nestjs/mapped-types";
import { CreateTenantBranchDto } from "./create-tenant_branch.dto";
import { IsBoolean, IsString, IsUUID, ValidateIf } from "class-validator";
import { TenantOrganisation } from "src/users/tenant_organisation/entities/tenant_organisation.entity";
import { TenantBranch } from "../entities/tenant_branch.entity";

export class UpdateTenantBranchDto extends PartialType(CreateTenantBranchDto) {
   
    @ValidateIf((doc) => doc.organisation_id)
    @IsUUID()
    organisation_id: TenantOrganisation;
  
   
    @IsString()
    name: string;
  
   
    @IsString()
    gstin: string;
  
    @IsBoolean()
    isParent: boolean;
  
   
    @ValidateIf(doc=>doc.parentbranch)
    @IsUUID()
    parentbranch: TenantBranch;
}
