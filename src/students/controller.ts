import {
  JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode,
  NotFoundError, ForbiddenError, Get, Body, Put, Delete
} from 'routing-controllers'
//import Teacher from './teachers/entity'
import { Student, Batch, Evaluation } from './entities'

@JsonController()
export default class StudentController {

  //@Authorized()
  @Post('/batches')
  @HttpCode(201)
  createBatch(
    @Body() batch: Batch
  ) {
    return batch.save()
  }

  //@Authorized()
  @Get('/fetchBatches')
  fetchBatches() {
    return Batch.find()
  }

  //@Authorized()
  @Post('/students')
  @HttpCode(201)
  addStudent(
    @Body() student: Student
  ) {
    return student.save()
  }

  //@Authorized()
  @Get('/fetchAllStudents')
  fetchAllstudents() {
    return Student.find()
  }

  //@Authorized()
  @Get('/students/:id([0-9]+)')
  fetchStudent(
    @Param('id') id: number
  ) {
    return Student.findOneById(id)
  }

  @Put('/students/:id([0-9]+)')
  async editStudent(
    @Param('id') id: number,
    @Body() edit: Partial<Student>
  ) {
    const student = await Student.findOneById(id)
    if (!student) throw new NotFoundError('Cannot find student')

    return Student.merge(student, edit).save()
  }

  @Delete('/students/:id([0-9]+)')
  async deleteStudent(
    @Param('id') id: number,
    @Body() Delete
  ) {
    const student = await Student.removeById(id)
    if (!student) throw new NotFoundError('Cannot find student')

    return Student.merge(student, Delete).save()
  }
}
