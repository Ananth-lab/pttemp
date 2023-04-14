import { BsmapsService } from './bsmaps.service';
import { BundlesService } from './bundles.service';
import { CreateBundleBodyDto } from './dtos/create-bundle-body.dto';
import { UpdateBundleDto } from './dtos/update-bundle.dto';
import { UpdateBundleSubmoduleDto } from './dtos/update-bundle-submodule.dto';
export declare class BundlesController {
    private bundlesService;
    private bsmapsService;
    constructor(bundlesService: BundlesService, bsmapsService: BsmapsService);
    addBundle(body: CreateBundleBodyDto): Promise<import("./bundle.entity").Bundle>;
    getBundles(): Promise<import("./bundle.entity").Bundle[]>;
    updateBundle(id: string, body: UpdateBundleDto): Promise<import("./bundle.entity").Bundle>;
    deleteBundle(id: string): Promise<import("./bundle.entity").Bundle>;
    getSubmodules(id: string): Promise<import("./bundle.entity").Bundle>;
    updateSubmodules(id: string, body: UpdateBundleSubmoduleDto): Promise<import("./bundle.entity").Bundle>;
}
