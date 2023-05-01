import { CreateSubscriptionDto } from "./dto/create-subscription.dto";
import { UpdateSubscriptionDto } from "./dto/update-subscription.dto";
import { Subscription } from "./entities/subscription.entity";
import { Repository } from "typeorm";
export declare class SubscriptionService {
    private readonly subRepo;
    constructor(subRepo: Repository<Subscription>);
    create(createSubscriptionDto: CreateSubscriptionDto): Promise<CreateSubscriptionDto & Subscription>;
    findAll(): string;
    findOne(id: number): string;
    findOneByTuserId(id: any): Promise<Subscription>;
    update(id: number, updateSubscriptionDto: UpdateSubscriptionDto): string;
    remove(id: number): string;
}
