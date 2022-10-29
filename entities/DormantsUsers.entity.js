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
exports.DormantsUsersEntity = void 0;
const typeorm_1 = require("typeorm");
const Base_entity_1 = require("./Base.entity");
let DormantsUsersEntity = class DormantsUsersEntity extends Base_entity_1.BaseUpdateMasterEntity {
};
__decorate([
    (0, typeorm_1.Index)('EMAIL_UNIQUE', { unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar', name: 'email', length: 30 }),
    __metadata("design:type", String)
], DormantsUsersEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'name', length: 30 }),
    __metadata("design:type", String)
], DormantsUsersEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'profile_url',
        length: 255,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", String)
], DormantsUsersEntity.prototype, "profile_url", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'profile_color',
        length: 10,
    }),
    __metadata("design:type", String)
], DormantsUsersEntity.prototype, "profile_color", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'social_type',
        length: 10,
    }),
    __metadata("design:type", String)
], DormantsUsersEntity.prototype, "social_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
        name: 'is_connect',
        default: 0,
    }),
    __metadata("design:type", Number)
], DormantsUsersEntity.prototype, "is_connect", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'datetime',
        name: 'last_connected_at',
        precision: 6,
        nullable: true,
        default: null,
    }),
    __metadata("design:type", Date)
], DormantsUsersEntity.prototype, "last_connected_at", void 0);
DormantsUsersEntity = __decorate([
    (0, typeorm_1.Entity)('dormants_users')
], DormantsUsersEntity);
exports.DormantsUsersEntity = DormantsUsersEntity;
//# sourceMappingURL=DormantsUsers.entity.js.map