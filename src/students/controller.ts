import {
  JsonController, Authorized, CurrentUser, Param, BadRequestError, HttpCode,
  NotFoundError, ForbiddenError, Get, Body, Patch,Post, Put, Delete
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
  @Get('/batches')
  fetchBatches() {
    return Batch.find()
  }

  //@Authorized()
  @Get('/batches/:id')
  fetchOneBatch(
    @Param('id') id: number
  ) {
    return Batch.findOneById(id)
  }

  //@Authorized()
  @Post('/students/:id([0-9]+)')
  @HttpCode(201)
  async addStudent(
    @Param('id') batchId: number,
    @Body()
    student: Student
  ) {
    const batch = await Batch.findOneById(batchId)

    if (!batch) throw new NotFoundError("Batch not found")
    student.batch = batch
    const newStudent = await Student.create({...student,batch}).save();

    return newStudent
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
  //import algorithm here



  //@Authorized()
  @Put('/students/:id([0-9]+)')
  async editStudent(
    @Param('id') id: number,
    @Body() edit: Partial<Student>
  ) {
    const student = await Student.findOneById(id)
    if (!student) throw new NotFoundError('Cannot find student')

    return Student.merge(student, edit).save()
  }

  //@Authorized()
  @Delete('/students/:id([0-9]+)')
  async deleteStudent(
    @Param('id') id: number,
    @Body() Delete
  ) {
    const student = await Student.removeById(id)
    if (!student) throw new NotFoundError('Cannot find student')

    return Student.merge(student, Delete).save()
  }

  // @Post('/students/:id([0-9]+)/evaluation')
  // async postEvaluation(
  //   @Param('id') id: number
  // ) {
  //   const student = await Student.findOneById(id)
  //   if (!student) throw new BadRequestError(`Student does not exist`)
  //
  //   const evaluation = await Evaluation.create({
  //     date,
  //     colourCode,
  //     remark
  //   }).save()
  // }
}
