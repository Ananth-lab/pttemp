import { TusersService } from "./tusers.service";
import { AuthService } from "./auth.service";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import { SinginDto } from "./dtos/signin.dto";
import { UpdateTuserDto } from "./dtos/update-tuser.dto";
export declare class TusersController {
    private tusersService;
    private authService;
    constructor(tusersService: TusersService, authService: AuthService);
    addUser(body: CreateTuserDto): Promise<import("./tuser.entity").Tuser>;
    update(id: string, body: UpdateTuserDto): Promise<string>;
    tenantUserLogin(body: SinginDto): Promise<{
        user: import("./tuser.entity").Tuser;
        token: string;
    }>;
    getTusers(): Promise<import("./tuser.entity").Tuser[]>;
    getAPuser(id: string): Promise<import("./tuser.entity").Tuser>;
}
