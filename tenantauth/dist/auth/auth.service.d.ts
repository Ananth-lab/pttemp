import { JwtService } from "@nestjs/jwt";
import { TusersService } from "src/tenantUser/tusers/tusers.service";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: TusersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        accessToken: string;
    }>;
}
