import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
import { PsubmodulesService } from './psubmodules.service';
export declare class PsubmodulesController {
    private submodulesService;
    constructor(submodulesService: PsubmodulesService);
    addModule(body: CreateSubmoduleDto): Promise<import("./psubmodule.entity").Psubmodule>;
    getModules(): Promise<import("./psubmodule.entity").Psubmodule[]>;
    getModule(id: string): Promise<void>;
}
