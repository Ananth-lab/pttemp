import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateTenantOrganisationDto } from "./dto/create-tenant_organisation.dto";
import { UpdateTenantOrganisationDto } from "./dto/update-tenant_organisation.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TenantOrganisation } from "./entities/tenant_organisation.entity";
import { Equal, Repository } from "typeorm";
import { equal } from "assert";

@Injectable()
export class TenantOrganisationService {
  constructor(
    @InjectRepository(TenantOrganisation)
    private readonly OrgRepo: Repository<TenantOrganisation>
  ) {}
  async create(createTenantOrganisationDto: CreateTenantOrganisationDto) {
    try {
      if (
        createTenantOrganisationDto.isParent == true &&
        createTenantOrganisationDto.tParentOrganisationId
      ) {
        const id = createTenantOrganisationDto.tParentOrganisationId.toString();
        console.log(id);
        const pOrg = await this.OrgRepo.find({ where: { id } });
        if (!pOrg.length)
          throw new HttpException("no data found with given parentId", 404);
      }
      if (
        (createTenantOrganisationDto.isParent == true &&
          !createTenantOrganisationDto.tParentOrganisationId) ||
        (!createTenantOrganisationDto.isParent &&
          createTenantOrganisationDto.tParentOrganisationId)
      ) {
        throw new HttpException(
          "no data found with give parentId or isParent is false",
          404
        );
      }
      return await this.OrgRepo.save(createTenantOrganisationDto);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    try {
      return await this.OrgRepo.find({ relations: ["tParentOrganisationId"] });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // findOne(id: String) {
  //   return `This action returns a #${id} tenantOrganisation`;
  // }

  async update(
    id: string,
    updateTenantOrganisationDto: UpdateTenantOrganisationDto
  ) {
    try {
      const organisation = await this.OrgRepo.findOne({ where: { id: id } });
      if (!organisation) return organisation;

      // Update fields that are present in the update DTO
      if (updateTenantOrganisationDto.name) {
        organisation.name = updateTenantOrganisationDto.name;
      }
      if (updateTenantOrganisationDto.tradename) {
        organisation.tradename = updateTenantOrganisationDto.tradename;
      }
      if (updateTenantOrganisationDto.gstin) {
        organisation.gstin = updateTenantOrganisationDto.gstin;
      }
      if (updateTenantOrganisationDto.pan) {
        organisation.pan = updateTenantOrganisationDto.pan;
      }
      if (updateTenantOrganisationDto.industry_domain) {
        organisation.industry_domain =
          updateTenantOrganisationDto.industry_domain;
      }
      if (updateTenantOrganisationDto.isParent !== undefined) {
        organisation.isParent = updateTenantOrganisationDto.isParent;
      }
      if(updateTenantOrganisationDto.tUserId) {organisation.tUserId=updateTenantOrganisationDto.tUserId}
      if (updateTenantOrganisationDto.isParent) {
        if (updateTenantOrganisationDto.tParentOrganisationId) {
          const id =
            updateTenantOrganisationDto.tParentOrganisationId.toString();
          //console.log(id);
          const parentOrganisation = await this.OrgRepo.find({ where: { id } });
          if (!parentOrganisation.length) {
            throw new NotFoundException(
              `Parent organisation with id ${updateTenantOrganisationDto.tParentOrganisationId} not found`
            );
          }
          organisation.tParentOrganisationId =
            updateTenantOrganisationDto.tParentOrganisationId;
        }
      }

      return await this.OrgRepo.save(organisation);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async remove(id: string) {
    try {
      return await this.OrgRepo.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
