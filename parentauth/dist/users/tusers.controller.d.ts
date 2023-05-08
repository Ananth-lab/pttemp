import { TusersService } from "./tusers.service";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import { UpdateTuserDto } from "./dtos/update-tuser.dto";
import { AuthService } from "src/auth/auth.service";
export declare class TusersController {
    private tusersService;
    private authService;
    constructor(tusersService: TusersService, authService: AuthService);
    addUser(body: CreateTuserDto): Promise<CreateTuserDto & import("./tuser.entity").Tuser>;
    update(id: string, body: UpdateTuserDto): Promise<string>;
    getTusers(): Promise<import("./tuser.entity").Tuser[]>;
    getAPuser(id: string): Promise<import("./tuser.entity").Tuser>;
}
