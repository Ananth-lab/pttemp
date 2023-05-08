import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { Subscription } from "./entities/subscription.entity";
import { Repository } from "typeorm";
import { Privilege } from "src/privileges/privilege.entity";
import { Role } from "src/roles/role.entity";
import { RolesService } from "src/roles/roles.service";
import { RacmapsService } from "src/roles/rac-maps.service";
export declare class SubscriptionService {
    private readonly subRepo;
    private readonly privRepo;
    private readonly roleRepo;
    private rolesService;
    private racmapsService;
    constructor(subRepo: Repository<Subscription>, privRepo: Repository<Privilege>, roleRepo: Repository<Role>, rolesService: RolesService, racmapsService: RacmapsService);
    consumeMessages(): Promise<void>;
    create(createSubscriptionDto: CreateSubscriptionDto): Promise<CreateSubscriptionDto & Subscription>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateSubscriptionDto: UpdateSubscriptionDto): string;
    remove(id: number): string;
}
