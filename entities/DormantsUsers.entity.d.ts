import { BaseUpdateMasterEntity } from './Base.entity';
export declare class DormantsUsersEntity extends BaseUpdateMasterEntity {
    email: string;
    name: string;
    profile_url: string | null;
    profile_color: string;
    social_type: string;
    is_connect: number;
    last_connected_at: Date | null;
}
