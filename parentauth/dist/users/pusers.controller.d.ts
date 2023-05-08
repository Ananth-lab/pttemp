import { PusersService } from './pusers.service';
import { CreatePuserDto } from './dtos/create-puser.dto';
import { AuthService } from 'src/auth/auth.service';
export declare class PusersController {
    private pusersService;
    private authService;
    constructor(pusersService: PusersService, authService: AuthService);
    addUser(body: CreatePuserDto): Promise<import("./puser.entity").Puser>;
    parentUserLogin(req: any): any;
    getPusers(): Promise<import("./puser.entity").Puser[]>;
    getMe(): void;
}
