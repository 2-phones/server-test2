import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthInfoDto } from './auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getAll(): string;
    login(data: AuthInfoDto, res: Response): Promise<any>;
}
