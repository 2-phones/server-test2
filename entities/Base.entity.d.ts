import { BaseEntity } from 'typeorm';
export declare class BaseRelationEntity extends BaseEntity {
    created_at: Date;
}
export declare class BaseUpdateRelationEntity extends BaseRelationEntity {
    updated_at: Date;
}
declare class BaseMasterEntity extends BaseRelationEntity {
    id: number;
}
export declare class BaseUpdateMasterEntity extends BaseMasterEntity {
    updated_at: Date;
}
export declare class BaseDeleteMasterEntity extends BaseUpdateMasterEntity {
    deleted_at: Date | null;
}
export {};
