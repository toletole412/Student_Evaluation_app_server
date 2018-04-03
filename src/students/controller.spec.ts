import 'jest'
import * as request from 'supertest'
import app from '../app'
import setupDb from '../db'

beforeAll(async () => {
  await setupDb()
})

// const postBatch = {
//   "startDate": '2018-02-4',
//   "endDate": '2018-04-19'
// }
//
// describe('StudentController', () => {
//   test('/batches', async () => {
//
//     await request(await app.callback())
//     .post('/batches')
//     .set('Accept', 'application/json')
//     .send(postBatch)
//     .expect(201)
//   })
// })
