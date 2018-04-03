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
// describe('StudentController_check if post new Batch or not', () => {
//   test('/batches', async () => {
//
//     await request(await app.callback())
//     .post('/batches')
//     .set('Accept', 'application/json')
//     .send(postBatch)
//     .expect(201)
//   })
// })

describe('StudentController_check if fetch all batches or not', () => {
  test('/fetchBatches', async () => {

    await request(await app.callback())
    .get('/fetchBatches')
    .set('Accept', 'application/json')
    .expect(200)
  })
})

// const addStudent = {
//   "fullName": "Janet Jeon",
//   "picture": "https://imagizer.imageshack.com/v2/280x200q90/922/mWnlLK.png"
// }

// describe('StudentController_check if add student well or not', () => {
//   test('/students', async () => {
//
//     await request(await app.callback())
//     .post('/students')
//     .set('Accept', 'application/json')
//     .send(addStudent)
//     .expect(201)
//   })
// })


describe('StudentController_check if get specific student well or not', () => {
  test('/students/1', async () => {

    await request(await app.callback())
    .get('/students/1')
    .set('Accept', 'application/json')
    .expect(200)
  })
})

const edit = {
  fullName: "Yoonji Oh"
}

describe('StudentController_check if edit student well or not', () => {
  test('/students/1', async () => {

    await request(await app.callback())
    .put('/students/1')
    .set('Accept', 'application/json')
    .send(edit)
    .expect(200)
  })
})

describe('StudentController_check if delete student well or not', () => {
  test('/students/5', async () => {

    await request(await app.callback())
    .delete('/students/5')
    .expect(200)
  })
})
