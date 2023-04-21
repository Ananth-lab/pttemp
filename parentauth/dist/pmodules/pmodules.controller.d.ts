import { CreateModuleDto } from './dtos/create-module.dto';
import { PmodulesService } from './pmodules.service';
export declare class ModulesController {
    private pmodulesService;
    constructor(pmodulesService: PmodulesService);
    addModule(body: CreateModuleDto): Promise<import("./pmodule.entity").Pmodule>;
    getModules(): Promise<import("./pmodule.entity").Pmodule[]>;
    getModule(id: string): Promise<import("./pmodule.entity").Pmodule>;
    getSubmodules(id: string): Promise<import("./pmodule.entity").Pmodule>;
}
