import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
import { SubmodulesService } from './submodules.service';
export declare class SubmodulesController {
    private submodulesService;
    constructor(submodulesService: SubmodulesService);
    addModule(body: CreateSubmoduleDto): Promise<import("./submodule.entity").Submodule>;
    getModules(): Promise<import("./submodule.entity").Submodule[]>;
    getModule(id: string): Promise<void>;
}
