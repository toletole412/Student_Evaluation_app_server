import { JsonController, Get, Authorized } from 'routing-controllers'
import Teacher from './entity';

@JsonController()
export default class TeacherController {

  //for test
  //@Authorized()
  @Get('/teachers')
  allTeachers() {
    return Teacher.find()
  }
}
