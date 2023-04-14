import { Tuser } from "src/users/tuser.entity";
export declare class TenantProfile {
    id: string;
    profileImage: string;
    billingName: string;
    billingAddress: string;
    gstin: string;
    tenant: Tuser;
}
