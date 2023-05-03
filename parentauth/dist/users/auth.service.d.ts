import { TusersService } from './tusers.service';
import { PusersService } from './pusers.service';
import { CreateTuserDto } from './dtos/create-tuser.dto';
import { JwtService } from '@nestjs/jwt';
import { CreatePuserDto } from './dtos/create-puser.dto';
export declare class AuthService {
    private tusersService;
    private pusersService;
    private jwtService;
    constructor(tusersService: TusersService, pusersService: PusersService, jwtService: JwtService);
    psignup(body: CreatePuserDto): Promise<import("./puser.entity").Puser>;
    pSignin(email: string, password: string): Promise<{
        user: import("./puser.entity").Puser;
        token: string;
    }>;
    tsignup(body: CreateTuserDto): Promise<CreateTuserDto & import("./tuser.entity").Tuser>;
    tSignin(email: string, password: string): Promise<{
        user: import("./tuser.entity").Tuser;
        token: string;
    }>;
}
