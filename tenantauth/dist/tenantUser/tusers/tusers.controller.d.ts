import { TusersService } from "./tusers.service";
import { AuthService } from "../../auth/auth.service";
import { CreateTuserDto } from "./dtos/create-tuser.dto";
import { AuthServices } from "./auth.service";
export declare class TusersController {
    private tusersService;
    private authService;
    private authServices;
    constructor(tusersService: TusersService, authService: AuthService, authServices: AuthServices);
    getAll(): Promise<import("./tuser.entity").Tuser[]>;
    getUserById(id: string): Promise<import("./tuser.entity").Tuser>;
    addUser(body: CreateTuserDto): Promise<import("./tuser.entity").Tuser>;
    tenantLogin(req: any): any;
}
