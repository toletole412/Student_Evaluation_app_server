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
const typeorm_1 = require("typeorm");
let Batch = class Batch extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Batch.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", Date)
], Batch.prototype, "startDate", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", Date)
], Batch.prototype, "endDate", void 0);
__decorate([
    typeorm_1.OneToMany(_ => Student, student => student.batch, { eager: true }),
    __metadata("design:type", Array)
], Batch.prototype, "students", void 0);
Batch = __decorate([
    typeorm_1.Entity()
], Batch);
exports.Batch = Batch;
let Student = class Student extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Student.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Student.prototype, "fullName", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Student.prototype, "picture", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => Batch, batch => batch.students),
    __metadata("design:type", Batch)
], Student.prototype, "batch", void 0);
__decorate([
    typeorm_1.OneToMany(_ => Evaluation, evaluation => evaluation.student, { eager: true }),
    __metadata("design:type", Array)
], Student.prototype, "evaluations", void 0);
Student = __decorate([
    typeorm_1.Entity()
], Student);
exports.Student = Student;
let Evaluation = class Evaluation extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Evaluation.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", Date)
], Evaluation.prototype, "date", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Evaluation.prototype, "colourCode", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], Evaluation.prototype, "remark", void 0);
__decorate([
    typeorm_1.ManyToOne(_ => Student, student => student.evaluations),
    __metadata("design:type", Student)
], Evaluation.prototype, "student", void 0);
Evaluation = __decorate([
    typeorm_1.Entity()
], Evaluation);
exports.Evaluation = Evaluation;
//# sourceMappingURL=entities.js.map