import { BaseUpdateMasterEntity } from './Base.entity';
export declare type RepeatCycle = '1D' | '1W' | '1D';
export declare class TasksEntity extends BaseUpdateMasterEntity {
    category_id: number;
    create_user_id: number;
    repeat_cycle: RepeatCycle | null;
    memo: string | null;
    notice_available: number;
    end_repeat_at: Date | null;
    excute_at: Date;
    previous_task_id: number | null;
}
