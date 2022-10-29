"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const Users_entity_1 = require("../entities/Users.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const jwt_1 = require("@nestjs/jwt");
const typeorm_2 = require("typeorm");
const UsersRefreshTokens_entity_1 = require("../entities/UsersRefreshTokens.entity");
let AuthService = class AuthService {
    constructor(jwtService, usersRepository, tokenRepository) {
        this.jwtService = jwtService;
        this.usersRepository = usersRepository;
        this.tokenRepository = tokenRepository;
    }
    saveToken(refreshToken) {
        const data = Object.assign(Object.assign({}, refreshToken), { ip: '1,2,34', expired_at: new Date() });
        this.tokenRepository.save(data);
    }
    async createToken(email) {
        const payload = { email };
        const accessToken = await this.jwtService.sign(payload);
        const refreshToken = await this.jwtService.sign({}, {
            expiresIn: '14d',
        });
        this.saveToken({ token: refreshToken });
        return { accessToken, refreshToken };
    }
    getUser(email) {
        const user = this.usersRepository.findOne({
            where: { email },
        });
        return user ? true : false;
    }
    createUser(profile) {
        this.usersRepository.save(profile);
    }
    async socialLogin(data) {
        const type = data.social_type;
        console.log(data);
        try {
            const profile = type === 'kakao'
                ? await this.kakao(data)
                : type === 'google'
                    ? await this.google(data)
                    : await this.apple(data);
            console.log(profile);
            const token = await this.createToken(profile.email);
            if (!this.getUser(profile.email))
                this.createUser(profile);
            return token;
        }
        catch (err) {
            return err;
        }
    }
    async kakao(data) {
        try {
            const userInfo = await axios_1.default.get(process.env.KAKAO_URL, {
                headers: { Authorization: `Bearer ${data.access_token}` },
            });
            const { nickname: name, profile_image_url: profile_url } = userInfo.data.kakao_account.profile;
            const { email } = userInfo.data.kakao_account;
            return { name, profile_url, email, social_type: data['social_type'] };
        }
        catch (err) {
            return err;
        }
    }
    async google(data) {
        return 'hello';
    }
    async apple(data) {
        return 'apple';
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(Users_entity_1.UsersEntity)),
    __param(2, (0, typeorm_1.InjectRepository)(UsersRefreshTokens_entity_1.UsersRefreshTokensEntity)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map