import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { Subscription } from "./entities/subscription.entity";
import { Repository } from "typeorm";
import { Tmodule } from "src/tmodules/tmodule.entity";
import { Tsubmodule } from "src/tmodules/tsubmodule.entity";
export declare class SubscriptionService {
    private readonly subRepo;
    private readonly moduleRepo;
    private readonly subModuleRepo;
    constructor(subRepo: Repository<Subscription>, moduleRepo: Repository<Tmodule>, subModuleRepo: Repository<Tsubmodule>);
    create(createSubscriptionDto: CreateSubscriptionDto): Promise<{
        statusCode: number;
        body: {
            message: string;
            errors: any[];
        };
    } | {
        statusCode: number;
        body: CreateSubscriptionDto & Subscription;
    }>;
    findAll(): string;
    findOne(id: number): string;
    findOneByTuserId(id: any): Promise<Subscription>;
    update(id: number, updateSubscriptionDto: UpdateSubscriptionDto): string;
    remove(id: number): string;
}
