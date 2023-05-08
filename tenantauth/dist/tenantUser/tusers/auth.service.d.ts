import { TusersService } from './tusers.service';
import { CreateTuserDto } from './dtos/create-tuser.dto';
export declare class AuthServices {
    private tusersService;
    constructor(tusersService: TusersService);
    signup(body: CreateTuserDto): Promise<import("./tuser.entity").Tuser>;
}
