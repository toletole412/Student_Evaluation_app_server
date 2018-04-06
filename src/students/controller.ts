import {
  JsonController, Authorized, CurrentUser, Param, BadRequestError, HttpCode,
  NotFoundError, ForbiddenError, Get, Body, Patch, Post, Put, Delete
} from 'routing-controllers'
//import Teacher from './teachers/entity'
import { Student, Batch, Evaluation } from './entities'
import { random, redP, yellowP, greenP } from '../lib/algorithm'
import Teacher from '../teachers/entity'

@JsonController()
export default class StudentController {

  @Get('/students/:id([0-9]+)')
  async Student(
    @Param('id') studentId: number
  ) {
    return Student.findOneById(studentId)
  }

//----------------batch--------------------------------------------
  //@Authorized()
  @Post('/batches')
  @HttpCode(201)
  async createBatch(
    @Body() batch: Batch
  ) {
    const newBatch = await Batch.create({
      startDate: batch.startDate,
      endDate: batch.endDate
    }).save()

    return newBatch
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

  //-----------------student---fetch, post, edit, delete ---------------

  //@Authorized()
  @Post('/:id([0-9]+)/student/new')
  @HttpCode(201)
  async addStudent(
     @Param('id') batchId: number,
     @Body() student: Student
   ) {
     const batch = await Batch.findOneById(batchId)
     if (!batch) throw new NotFoundError(`Batch  does not exist!`)


     const newStudent =  await Student.create({
       ...student,
       batch
     }).save()

     return newStudent
   }



  @Get('/batches/:id([0-9]+)/students')
  async fetchBatchStudent(
    @Param('id') batchId: number

  ) {
    const batch = await Batch.findOneById(batchId)

    if (!batch) throw new NotFoundError("Batch not found")

    return batch
  }

  @Get('/allStudents')
  async fetchAllstudents() {
    return  Student.find()
  }

  //@Authorized()
  @Get('/students/:id([0-9]+)')
  fetchStudent(
    @Param('id') id: number
  ) {
    return Student.findOneById(id)
  }

  //@Authorized()
  @Put('/students/:id([0-9]+)/edit')
  async editStudent(
    @Param('id') id: number,
    @Body() edit: Partial<Student>
  ) {
    const student = await Student.findOneById(id)
    if (!student) throw new NotFoundError('Cannot find student')

    return Student.merge(student, edit).save()
  }


  //@Authorized()
  @Delete('/students/:id([0-9]+)/delete')
  @HttpCode(201)
  async deleteStudent(
    @Param('id') studentId: number
  ) {
    const student = await Student.findOneById(studentId)
    if (!student) throw new NotFoundError(`Evaluation does not exist!`)
    await student.remove()
  }


//---------------random student ----------------------------------------

  //@Authorized()
  @Get('/batch/:id([0-9]+)/ask')
  async fetchRandomStudent(
    @CurrentUser() teacher: Teacher,
    @Param('id') batchId: number
  ) {
    const batch = await Batch.findOneById(batchId)

    if (!batch) throw new NotFoundError("Batch not found")


    return random(batch)
  }


//------------- percentage bar ----------------------------------

  @Get('/:id([0-9]+)/redP')
  async redP(
    @Param('id') batchId: number
  ) {
    const batch = await Batch.findOneById(batchId)

    if (!batch) throw new NotFoundError("Batch not found")


    return redP(batch)
  }

  @Get('/:id([0-9]+)/greenP')
  async greenP(
    @Param('id') batchId: number
  ) {
    const batch = await Batch.findOneById(batchId)

    if (!batch) throw new NotFoundError("Batch not found")


    return greenP(batch)
  }

  @Get('/:id([0-9]+)/yellowP')
  async yellowP(
    @Param('id') batchId: number
  ) {
    const batch = await Batch.findOneById(batchId)

    if (!batch) throw new NotFoundError("Batch not found")


    return yellowP(batch)
  }


//----------------------evaluation-------------------

  //@Authorized()
  @Delete('/evaluation/:id([0-9]+)/delete')
  @HttpCode(201)
  async deleteEvaluation(
    @Param('id') evaluationId: number
  ) {
    const evaluation= await Evaluation.findOneById(evaluationId)
    if (!evaluation) throw new NotFoundError(`Evaluation does not exist!`)
    await evaluation.remove()
  }

  //@Authorized()
  @Post('/students/:id([0-9]+)/evaluation')
  async postEvaluation(
    @Param('id') studentId: number,
    @Body() evaluation: Evaluation
  ) {
    const student = await Student.findOneById(studentId)
    if (!student) throw new BadRequestError(`Student does not exist`)

    const newEvaluation = await Evaluation.create({
      ...evaluation,
      student
    }).save();

    return newEvaluation
  }

  @Get('/evaluation/:id')
  fetchOneEvaluation(
    @Param('id') id: number
  ) {
    return Evaluation.findOneById(id)
  }

  //@Authorized()
  @Put('/students/:id([0-9]+)/evaluation/edit')
  async editEvaluation(
    @Param('id') evaluationId: number,
    @Body() edit: Partial<Evaluation>
  ) {
    const evaluation = await Evaluation.findOneById(evaluationId)
    if (!evaluation) throw new BadRequestError(`Evaluation does not exist`)

    return Evaluation.merge(evaluation, edit).save()
  }



  }
