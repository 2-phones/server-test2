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
exports.PlacesEntity = void 0;
const typeorm_1 = require("typeorm");
const Base_entity_1 = require("./Base.entity");
let PlacesEntity = class PlacesEntity extends Base_entity_1.BaseUpdateMasterEntity {
};
__decorate([
    (0, typeorm_1.Index)('INVITE_CODE_UNIQUE', { unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar', name: 'invite_code', length: 100 }),
    __metadata("design:type", String)
], PlacesEntity.prototype, "invite_code", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', name: 'name', length: 30 }),
    __metadata("design:type", String)
], PlacesEntity.prototype, "name", void 0);
PlacesEntity = __decorate([
    (0, typeorm_1.Entity)('places')
], PlacesEntity);
exports.PlacesEntity = PlacesEntity;
//# sourceMappingURL=Places.entity.js.map