import { SubscriptionService } from './subscription.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    create(createSubscriptionDto: CreateSubscriptionDto): Promise<{
        statusCode: number;
        body: {
            message: string;
            errors: any[];
        };
    } | {
        statusCode: number;
        body: CreateSubscriptionDto & import("./entities/subscription.entity").Subscription;
    }>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateSubscriptionDto: UpdateSubscriptionDto): string;
    remove(id: string): string;
}
