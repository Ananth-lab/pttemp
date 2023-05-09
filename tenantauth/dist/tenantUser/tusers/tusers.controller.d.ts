import { TusersService } from "./tusers.service";
import { AuthService } from "../../auth/auth.service";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
export declare class TusersController {
    private tusersService;
    private authService;
    constructor(tusersService: TusersService, authService: AuthService);
    getAll(): Promise<import("./tuser.entity").Tuser[]>;
    getUserById(id: string): Promise<import("./tuser.entity").Tuser>;
    addUser(body: CreateTuserDto): Promise<import("./tuser.entity").Tuser>;
    tenantLogin(req: any): any;
}
