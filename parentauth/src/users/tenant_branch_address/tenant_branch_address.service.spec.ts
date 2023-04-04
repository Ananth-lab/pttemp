import { Test, TestingModule } from "@nestjs/testing";
import { TenantBranchAddressService } from "./tenant_branch_address.service";

describe("TenantBranchAddressService", () => {
  let service: TenantBranchAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TenantBranchAddressService],
    }).compile();

    service = module.get<TenantBranchAddressService>(
      TenantBranchAddressService
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
