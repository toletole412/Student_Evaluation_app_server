import {
  JsonController, Authorized, CurrentUser, Post, Param, BadRequestError, HttpCode, NotFoundError, ForbiddenError, Get,
  Body, Patch
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
}


  // @Get('/allBatches')
  // allBatches() {
  //   return Student.find()
  // }


//}
