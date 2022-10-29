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
exports.UsersTasksEntity = void 0;
const typeorm_1 = require("typeorm");
const Base_entity_1 = require("./Base.entity");
let UsersTasksEntity = class UsersTasksEntity extends Base_entity_1.BaseUpdateRelationEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'int', name: 'user_id' }),
    __metadata("design:type", Number)
], UsersTasksEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'int', name: 'task_id' }),
    __metadata("design:type", Number)
], UsersTasksEntity.prototype, "task_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', name: 'is_end', default: 0 }),
    __metadata("design:type", Number)
], UsersTasksEntity.prototype, "is_end", void 0);
UsersTasksEntity = __decorate([
    (0, typeorm_1.Entity)('users_tasks')
], UsersTasksEntity);
exports.UsersTasksEntity = UsersTasksEntity;
//# sourceMappingURL=UsersTasks.entity.js.map