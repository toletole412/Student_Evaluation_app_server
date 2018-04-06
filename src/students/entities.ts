import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne} from 'typeorm'
import Teacher from '../teachers/entity'

@Entity()
export class Batch extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  startDate: Date

  @Column('text')
  endDate: Date

  @OneToMany(_ => Student, student => student.batch, {eager: true})
  students: Student[]
}

@Entity()
export class Student extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  fullName: string

  @Column('text')
  picture: string

  @ManyToOne(_ => Batch, batch => batch.students )
  batch: Batch

  @OneToMany(_ => Evaluation, evaluation => evaluation.student, {eager:true} )
  evaluations: Evaluation[]
}

@Entity()
export class Evaluation extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('text')
  date: Date

  @Column('text')
  colourCode: string

  @Column('text', {nullable: true})
  remark: string

  @ManyToOne(_ => Student, student => student.evaluations)
  student: Student

  @ManyToOne(_ => Teacher, teacher => teacher.evaluations)
  teacher: Teacher
}
