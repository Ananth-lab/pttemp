import { CreateSubmoduleDto } from './dtos/create-submodule.dto';
import { TsubmodulesService } from './tsubmodules.service';
export declare class TsubmodulesController {
    private submodulesService;
    constructor(submodulesService: TsubmodulesService);
    addModule(body: CreateSubmoduleDto): Promise<import("./tsubmodule.entity").Tsubmodule>;
    getModules(): Promise<import("./tsubmodule.entity").Tsubmodule[]>;
    getModule(id: string): Promise<void>;
}
