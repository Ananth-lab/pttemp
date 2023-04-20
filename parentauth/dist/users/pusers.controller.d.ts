import { PusersService } from './pusers.service';
import { AuthService } from './auth.service';
import { CreatePuserDto } from './dtos/create-puser.dto';
import { SinginDto } from './dtos/signin.dto';
export declare class PusersController {
    private pusersService;
    private authService;
    constructor(pusersService: PusersService, authService: AuthService);
    addUser(body: CreatePuserDto): Promise<void>;
    parentUserLogin(body: SinginDto): Promise<{
        user: import("./puser.entity").Puser;
        token: string;
    }>;
    getPusers(): Promise<import("./puser.entity").Puser[]>;
    getMe(): void;
}
