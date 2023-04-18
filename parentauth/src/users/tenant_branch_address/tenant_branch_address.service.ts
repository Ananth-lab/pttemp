import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTenantBranchAddressDto } from "./dto/create-tenant_branch_address.dto";
import { UpdateTenantBranchAddressDto } from "./dto/update-tenant_branch_address.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TenantBranchAddress } from "./entities/tenant_branch_address.entity";
import { Repository } from "typeorm";

@Injectable()
export class TenantBranchAddressService {
  constructor(
    @InjectRepository(TenantBranchAddress)
    private readonly tenantBranchRepo: Repository<TenantBranchAddress>
  ) {}
  async create(createTenantBranchAddressDto: CreateTenantBranchAddressDto) {
    try {
      return await this.tenantBranchRepo.save(createTenantBranchAddressDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string) {
    try{
    return await this.tenantBranchRepo.findOne({where:{id}});
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
  }

  async update(
    id: string,
    updateTenantBranchAddressDto: UpdateTenantBranchAddressDto
  ) {
    try {
      const curAdd = await this.tenantBranchRepo.findOne({ where: { id: id } });
      if (!curAdd) return curAdd;

      if (updateTenantBranchAddressDto.city) {
        curAdd.city = updateTenantBranchAddressDto.city;
      }

      if (updateTenantBranchAddressDto.name) {
        curAdd.name = updateTenantBranchAddressDto.name;
      }

      if (updateTenantBranchAddressDto.plot_no) {
        curAdd.plot_no = updateTenantBranchAddressDto.plot_no;
      }

      if (updateTenantBranchAddressDto.post_code) {
        curAdd.post_code = updateTenantBranchAddressDto.post_code;
      }

      if (updateTenantBranchAddressDto.address) {
        curAdd.address = updateTenantBranchAddressDto.address;
      }

      return await this.tenantBranchRepo.save(curAdd);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
