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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const routing_controllers_1 = require("routing-controllers");
const entities_1 = require("./entities");
let StudentController = class StudentController {
    createBatch(batch) {
        return batch.save();
    }
    fetchBatches() {
        return entities_1.Batch.find();
    }
    addStudent(student) {
        return student.save();
    }
    fetchAllstudents() {
        return entities_1.Student.find();
    }
    fetchStudent(id) {
        return entities_1.Student.findOneById(id);
    }
    async editStudent(id, edit) {
        const student = await entities_1.Student.findOneById(id);
        if (!student)
            throw new routing_controllers_1.NotFoundError('Cannot find student');
        return entities_1.Student.merge(student, edit).save();
    }
    async deleteStudent(id, Delete) {
        const student = await entities_1.Student.removeById(id);
        if (!student)
            throw new routing_controllers_1.NotFoundError('Cannot find student');
        return entities_1.Student.merge(student, Delete).save();
    }
};
__decorate([
    routing_controllers_1.Post('/batches'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.Batch]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "createBatch", null);
__decorate([
    routing_controllers_1.Get('/fetchBatches'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "fetchBatches", null);
__decorate([
    routing_controllers_1.Post('/students'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.Student]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "addStudent", null);
__decorate([
    routing_controllers_1.Get('/fetchAllStudents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "fetchAllstudents", null);
__decorate([
    routing_controllers_1.Get('/students/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "fetchStudent", null);
__decorate([
    routing_controllers_1.Put('/students/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "editStudent", null);
__decorate([
    routing_controllers_1.Delete('/students/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
StudentController = __decorate([
    routing_controllers_1.JsonController()
], StudentController);
exports.default = StudentController;
//# sourceMappingURL=controller.js.map