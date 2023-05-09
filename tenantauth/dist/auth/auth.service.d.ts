import { JwtService } from "@nestjs/jwt";
import { CreateTuserDto } from "src/tenantUser/tusers/dtos/create-tuser.dto";
import { TusersService } from "src/tenantUser/tusers/tusers.service";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: TusersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    signup(body: CreateTuserDto): Promise<import("../tenantUser/tusers/tuser.entity").Tuser>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
}
