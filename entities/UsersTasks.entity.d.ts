import { BaseUpdateRelationEntity } from './Base.entity';
export declare class UsersTasksEntity extends BaseUpdateRelationEntity {
    user_id: number;
    task_id: number;
    is_end: number;
}
