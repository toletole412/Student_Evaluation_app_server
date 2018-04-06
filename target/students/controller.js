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
const algorithm_1 = require("../lib/algorithm");
const entity_1 = require("../teachers/entity");
let StudentController = class StudentController {
    async Student(studentId) {
        return entities_1.Student.findOneById(studentId);
    }
    async createBatch(batch) {
        const newBatch = await entities_1.Batch.create({
            startDate: batch.startDate,
            endDate: batch.endDate
        }).save();
        return newBatch;
    }
    fetchBatches() {
        return entities_1.Batch.find();
    }
    fetchOneBatch(id) {
        return entities_1.Batch.findOneById(id);
    }
    async addStudent(batchId, student) {
        const batch = await entities_1.Batch.findOneById(batchId);
        if (!batch)
            throw new routing_controllers_1.NotFoundError(`Batch  does not exist!`);
        const newStudent = await entities_1.Student.create(Object.assign({}, student, { batch })).save();
        return newStudent;
    }
    async fetchBatchStudent(batchId) {
        const batch = await entities_1.Batch.findOneById(batchId);
        if (!batch)
            throw new routing_controllers_1.NotFoundError("Batch not found");
        return batch;
    }
    async fetchAllstudents() {
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
    async deleteStudent(studentId) {
        const student = await entities_1.Student.findOneById(studentId);
        if (!student)
            throw new routing_controllers_1.NotFoundError(`Evaluation does not exist!`);
        await student.remove();
    }
    async fetchRandomStudent(teacher, batchId) {
        const batch = await entities_1.Batch.findOneById(batchId);
        if (!batch)
            throw new routing_controllers_1.NotFoundError("Batch not found");
        return algorithm_1.random(batch);
    }
    async redP(batchId) {
        const batch = await entities_1.Batch.findOneById(batchId);
        if (!batch)
            throw new routing_controllers_1.NotFoundError("Batch not found");
        return algorithm_1.redP(batch);
    }
    async greenP(batchId) {
        const batch = await entities_1.Batch.findOneById(batchId);
        if (!batch)
            throw new routing_controllers_1.NotFoundError("Batch not found");
        return algorithm_1.greenP(batch);
    }
    async yellowP(batchId) {
        const batch = await entities_1.Batch.findOneById(batchId);
        if (!batch)
            throw new routing_controllers_1.NotFoundError("Batch not found");
        return algorithm_1.yellowP(batch);
    }
    async deleteEvaluation(evaluationId) {
        const evaluation = await entities_1.Evaluation.findOneById(evaluationId);
        if (!evaluation)
            throw new routing_controllers_1.NotFoundError(`Evaluation does not exist!`);
        await evaluation.remove();
    }
    async postEvaluation(studentId, evaluation) {
        const student = await entities_1.Student.findOneById(studentId);
        if (!student)
            throw new routing_controllers_1.BadRequestError(`Student does not exist`);
        const newEvaluation = await entities_1.Evaluation.create(Object.assign({}, evaluation, { student })).save();
        return newEvaluation;
    }
    fetchOneEvaluation(id) {
        return entities_1.Evaluation.findOneById(id);
    }
    async editEvaluation(evaluationId, edit) {
        const evaluation = await entities_1.Evaluation.findOneById(evaluationId);
        if (!evaluation)
            throw new routing_controllers_1.BadRequestError(`Evaluation does not exist`);
        return entities_1.Evaluation.merge(evaluation, edit).save();
    }
};
__decorate([
    routing_controllers_1.Get('/students/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "Student", null);
__decorate([
    routing_controllers_1.Post('/batches'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.Batch]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "createBatch", null);
__decorate([
    routing_controllers_1.Get('/batches'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "fetchBatches", null);
__decorate([
    routing_controllers_1.Get('/batches/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "fetchOneBatch", null);
__decorate([
    routing_controllers_1.Post('/:id([0-9]+)/student/new'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, entities_1.Student]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "addStudent", null);
__decorate([
    routing_controllers_1.Get('/batches/:id([0-9]+)/students'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "fetchBatchStudent", null);
__decorate([
    routing_controllers_1.Get('/allStudents'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "fetchAllstudents", null);
__decorate([
    routing_controllers_1.Get('/students/:id([0-9]+)'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "fetchStudent", null);
__decorate([
    routing_controllers_1.Put('/students/:id([0-9]+)/edit'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "editStudent", null);
__decorate([
    routing_controllers_1.Delete('/students/:id([0-9]+)/delete'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteStudent", null);
__decorate([
    routing_controllers_1.Get('/batch/:id([0-9]+)/ask'),
    __param(0, routing_controllers_1.CurrentUser()),
    __param(1, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entity_1.default, Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "fetchRandomStudent", null);
__decorate([
    routing_controllers_1.Get('/:id([0-9]+)/redP'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "redP", null);
__decorate([
    routing_controllers_1.Get('/:id([0-9]+)/greenP'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "greenP", null);
__decorate([
    routing_controllers_1.Get('/:id([0-9]+)/yellowP'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "yellowP", null);
__decorate([
    routing_controllers_1.Delete('/evaluation/:id([0-9]+)/delete'),
    routing_controllers_1.HttpCode(201),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "deleteEvaluation", null);
__decorate([
    routing_controllers_1.Post('/students/:id([0-9]+)/evaluation'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, entities_1.Evaluation]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "postEvaluation", null);
__decorate([
    routing_controllers_1.Get('/evaluation/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "fetchOneEvaluation", null);
__decorate([
    routing_controllers_1.Put('/students/:id([0-9]+)/evaluation/edit'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StudentController.prototype, "editEvaluation", null);
StudentController = __decorate([
    routing_controllers_1.JsonController()
], StudentController);
exports.default = StudentController;
//# sourceMappingURL=controller.js.map