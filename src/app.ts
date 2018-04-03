import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import { Action, BadRequestError } from "routing-controllers";
import Controller from "./controller"
import LoginController from './logins/controller'
import TeacherController from './teachers/controller'
import StudentController from './students/controller'
import Teacher from './teachers/entity'
import { verify } from "./jwt";



export default createKoaServer({
  cors: true,
  controllers: [
    Controller,
    LoginController,
    TeacherController,
    StudentController
],

authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization
    if (header && header.startsWith('Bearer ')) {
       const [ , token ] = header.split(' ')

       try {
         return !!(token && verify(token))
      }
       catch (e) {
         throw new BadRequestError(e)
      }
    }
     return false
   },

 currentUserChecker: async (action: Action) => {
   const header: string = action.request.headers.authorization;
   if (header && header.startsWith('Bearer ')) {
     const [ , token ] = header.split(' ');

     if (token) {
        const { id } = verify(token)
        return Teacher.findOneById(id)
      }
     }
   }
  })
