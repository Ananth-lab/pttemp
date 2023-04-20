import { TmodulesService } from './tmodules.service';
import { CreateTmoduleDto } from './dtos/create-module.dto';
export declare class TmodulesController {
    private tmodulesService;
    constructor(tmodulesService: TmodulesService);
    addModule(body: CreateTmoduleDto): Promise<import("./tmodule.entity").Tmodule>;
    getModules(): Promise<import("./tmodule.entity").Tmodule[]>;
    getModule(id: string): Promise<import("./tmodule.entity").Tmodule>;
    getSubmodules(id: string): Promise<import("./tmodule.entity").Tmodule>;
}
