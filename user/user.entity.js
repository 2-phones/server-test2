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
exports.Users = void 0;
const typeorm_1 = require("typeorm");
let Users = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 30 }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 30 }),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'profile_url', length: 255 }),
    __metadata("design:type", String)
], Users.prototype, "profile_url", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'profile_color', length: 10 }),
    __metadata("design:type", String)
], Users.prototype, "profile_color", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'social_type', length: 10 }),
    __metadata("design:type", String)
], Users.prototype, "social_type", void 0);
Users = __decorate([
    (0, typeorm_1.Entity)({ schema: 'DobbyTestA', name: 'testuser' })
], Users);
exports.Users = Users;
//# sourceMappingURL=user.entity.js.map