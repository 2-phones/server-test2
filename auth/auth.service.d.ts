import { CreateUserDto, CreateTokenDto } from './../user/user.dto';
import { UsersEntity } from 'src/entities/Users.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { AuthInfoDto } from './auth.dto';
import { UsersRefreshTokensEntity } from 'src/entities/UsersRefreshTokens.entity';
export declare class AuthService {
    private readonly jwtService;
    private usersRepository;
    private tokenRepository;
    constructor(jwtService: JwtService, usersRepository: Repository<UsersEntity>, tokenRepository: Repository<UsersRefreshTokensEntity>);
    saveToken(refreshToken: CreateTokenDto): void;
    createToken(email: any): Promise<any>;
    getUser(email: string): boolean;
    createUser(profile: CreateUserDto): void;
    socialLogin(data: AuthInfoDto): Promise<any>;
    kakao(data: AuthInfoDto): Promise<any>;
    google(data: AuthInfoDto): Promise<any>;
    apple(data: AuthInfoDto): Promise<any>;
}
