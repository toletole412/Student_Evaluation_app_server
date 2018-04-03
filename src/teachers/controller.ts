import { JsonController, Post, Body, Get, Authorized } from 'routing-controllers'
import Teacher from './entity';

@JsonController()
export default class TeacherController {
  //for test
  @Post('/teachers')
  async signup(
    @Body() teacher: Teacher
  ){
    const {password, ...rest} = teacher
    const entity = Teacher.create(rest)
    await entity.setPassword(password)
    return entity.save()
  }
  //for test
  //@Authorized()
  @Get('/teachers')
  allTeachers() {
    return Teacher.find()
  }
}
