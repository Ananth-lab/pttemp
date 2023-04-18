import { TusersService } from './tusers.service';
import { CreateTuserDto } from './dtos/create-tuser.dto';
export declare class AuthService {
    private tusersService;
    constructor(tusersService: TusersService);
    signup(body: CreateTuserDto): Promise<void>;
    signin(): void;
}
