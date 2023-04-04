import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTenantBranchDto } from "./dto/create-tenant_branch.dto";
import { UpdateTenantBranchDto } from "./dto/update-tenant_branch.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TenantBranch } from "./entities/tenant_branch.entity";
import { Repository } from "typeorm";

@Injectable()
export class TenantBranchService {
  constructor(
    @InjectRepository(TenantBranch)
    private readonly branchRep: Repository<TenantBranch>
  ) {}
  async create(createTenantBranchDto: CreateTenantBranchDto) {
    try {
      return await this.branchRep.save(createTenantBranchDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, updateTenantBranchDto: UpdateTenantBranchDto) {
    try {
      const branch = await this.branchRep.findOne({ where: { id: id } });
      if (!branch) return branch;

      if (updateTenantBranchDto.gstin) {
        branch.gstin = updateTenantBranchDto.gstin;
      }

      if (
        updateTenantBranchDto.isparent == true ||
        updateTenantBranchDto.isparent == false
      ) {
        branch.isparent = updateTenantBranchDto.isparent;
      }

      if (updateTenantBranchDto.name) {
        branch.name = updateTenantBranchDto.name;
      }
      return await this.branchRep.save(branch);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
