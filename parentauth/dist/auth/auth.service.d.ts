import { JwtService } from "@nestjs/jwt";
import { CreatePuserDto } from "src/users/dtos/create-puser.dto";
import { PusersService } from "src/users/pusers.service";
import { TusersService } from "src/users/tusers.service";
import { CreateTuserDto } from "src/users/dtos/create-tuser.dto";
export declare class AuthService {
    private pusersService;
    private tusersService;
    private jwtService;
    constructor(pusersService: PusersService, tusersService: TusersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    psignup(body: CreatePuserDto): Promise<import("../users/puser.entity").Puser>;
    login(user: any): Promise<{
        user: any;
        accessToken: string;
    }>;
    tsignup(body: CreateTuserDto): Promise<CreateTuserDto & import("../users/tuser.entity").Tuser>;
}
