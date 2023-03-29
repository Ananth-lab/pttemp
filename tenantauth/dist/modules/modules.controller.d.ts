import { CreateModuleDto } from './dtos/create-module.dto';
import { ModulesService } from './modules.service';
export declare class ModulesController {
    private tmodulesService;
    constructor(tmodulesService: ModulesService);
    addModule(body: CreateModuleDto): void;
    getModules(): Promise<import("./module.entity").Tmodule[]>;
    getModule(id: string): Promise<import("./module.entity").Tmodule>;
    getSubmodules(id: string): Promise<import("./module.entity").Tmodule>;
}
