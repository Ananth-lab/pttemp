import { TenantOrganisationAddress } from 'src/users/tenant_organisation_address/entities/tenant_organisation_address.entity';
import { TenantState } from 'src/users/tenant_state/entities/tenant_state.entity';
export declare class TenantCountry {
    id: string;
    name: string;
    states: TenantState;
    tOrganisationAddress: TenantOrganisationAddress;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
