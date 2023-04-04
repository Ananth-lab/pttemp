import { Test, TestingModule } from "@nestjs/testing";
import { TenantBranchAddressController } from "./tenant_branch_address.controller";
import { TenantBranchAddressService } from "./tenant_branch_address.service";

describe("TenantBranchAddressController", () => {
  let controller: TenantBranchAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantBranchAddressController],
      providers: [TenantBranchAddressService],
    }).compile();

    controller = module.get<TenantBranchAddressController>(
      TenantBranchAddressController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
