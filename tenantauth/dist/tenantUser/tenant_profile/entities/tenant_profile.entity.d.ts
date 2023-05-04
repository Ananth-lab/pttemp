import { Tuser } from "src/tenantUser/tusers/tuser.entity";
export declare class TenantProfile {
    id: string;
    profileImage: string;
    billingName: string;
    billingAddress: string;
    gstin: string;
    tenant: Tuser;
}
