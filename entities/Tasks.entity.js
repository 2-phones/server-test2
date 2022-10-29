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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksEntity = void 0;
const typeorm_1 = require("typeorm");
const Base_entity_1 = require("./Base.entity");
let TasksEntity = class TasksEntity extends Base_entity_1.BaseUpdateMasterEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'category_id' }),
    __metadata("design:type", Number)
], TasksEntity.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'create_user_id' }),
    __metadata("design:type", Number)
], TasksEntity.prototype, "create_user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        name: 'repeat_cycle',
        enum: ['1D', '1W', '1M'],
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], TasksEntity.prototype, "repeat_cycle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', name: 'memo', nullable: true, default: null }),
    __metadata("design:type", String)
], TasksEntity.prototype, "memo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', name: 'notice_available', default: 1 }),
    __metadata("design:type", Number)
], TasksEntity.prototype, "notice_available", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        name: 'ended_at',
        precision: 6,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Date)
], TasksEntity.prototype, "end_repeat_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', name: 'excute_at', precision: 6 }),
    __metadata("design:type", Date)
], TasksEntity.prototype, "excute_at", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        name: 'previous_task_id',
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Number)
], TasksEntity.prototype, "previous_task_id", void 0);
TasksEntity = __decorate([
    (0, typeorm_1.Entity)('tasks')
], TasksEntity);
exports.TasksEntity = TasksEntity;
//# sourceMappingURL=Tasks.entity.js.map