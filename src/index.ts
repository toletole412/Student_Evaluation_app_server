import "reflect-metadata";
import { createKoaServer } from "routing-controllers";
import { Action, BadRequestError } from "routing-controllers";
import setupDb from './db'
import Controller from "./controller"
import LoginController from './logins/controller'
import TeacherController from './teachers/controller'
import Teacher from './teachers/entity'
import { verify } from "./jwt";


const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    Controller,
    LoginController,
    TeacherController
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


setupDb()
  .then(_ =>
    app.listen(4000, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))
