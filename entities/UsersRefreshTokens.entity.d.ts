import { BaseUpdateRelationEntity } from './Base.entity';
export declare class UsersRefreshTokensEntity extends BaseUpdateRelationEntity {
    user_id: number;
    ip: string;
    token: string;
    expired_at: Date;
}
