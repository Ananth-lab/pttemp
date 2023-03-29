import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';
import { CreateRoleDto } from './dtos/create-role.dto';
import { Submodule } from 'src/modules/submodule.entity';
import { UpdateRoleDto } from './dtos/update-role.dto';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Role) private repo: Repository<Role>) {}

  create(data: CreateRoleDto) {
    const role = this.repo.create(data);
    return this.repo.save(role);
  }

  find() {
    return this.repo.find();
  }

  findOneIncludeSubmodule(id: string) {
    return this.repo.findOne({
      where: { id },

      relations: {
        racs: {
          privilegeId: true,
          submoduleId: true,
        },
      },
    });
  }

  async remove(id: string) {
    const role = await this.repo.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException('role not found');
    }
    this.repo.remove(role);
    return role;
  }

  async update(id: string, data: UpdateRoleDto) {
    const role = await this.repo.findOne({ where: { id } });
    if (!role) {
      throw new NotFoundException('role not found');
    }

    if (data.name) role.name = data.name;
    if (data.description) role.description = data.description;
    return this.repo.save(role);
  }
}
