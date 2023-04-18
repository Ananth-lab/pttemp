import { Test, TestingModule } from "@nestjs/testing";
import { TenantProfileController } from "./tenant_profile.controller";
import { TenantProfileService } from "./tenant_profile.service";

describe("TenantProfileController", () => {
  let controller: TenantProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TenantProfileController],
      providers: [TenantProfileService],
    }).compile();

    controller = module.get<TenantProfileController>(TenantProfileController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
