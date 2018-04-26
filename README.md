# Student Evaluator Server

This is a server for Student Evaluator app

It has these endpoints:

* `POST /logins`: log in and receive a JWT
* `POST /batches`: create a new batch
* `POST /:id([0-9]+)/student/new`: create a new student
* `POST /students/:id([0-9]+)/evaluation`: create a new evaluation

* `PATCH /games/:id`: update an existing game
* `PUT /students/:id([0-9]+)/edit`: update an existing student information
* `PUT /students/:id([0-9]+)/evaluation/edit`: update an existing evaluation

* `GET /students/:id([0-9]+)`: one student information
* `GET /batches/:id([0-9]+)/students`: all student in one batch
* `GET /batches`: list all batches
* `GET /batches/:id`: one batch information
* `GET /allStudents`: list all students
* `GET /evaluation/:id`: one evaluation
* `GET /batch/:id([0-9]+)/ask`: one random student
* `GET /:id([0-9]+)/redP`: percentage of red color evaluation
* `GET /:id([0-9]+)/greenP`: percentage of green color evaluation
* `GET /:id([0-9]+)/yellowP`: percentage of yellow color evaluation

* `DELETE /students/:id([0-9]+)/delete`: delete one student
* `DELETE /evaluation/:id([0-9]+)/delete`: delete one evaluation

## Running

* You need a working Postgres database that is preferrably empty (drop all the tables) and running 
* Install the dependencies using `yarn install`
* Compile the app (Typescript > Javascript) using `yarn compile` (during development you can use `yarn watch`)
* `yarn start`
 
