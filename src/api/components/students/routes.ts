import  { Router} from 'express'
import { StudentController, StudentControllerImpl } from './controller'
import { StudentRepository } from './repository'
import { StudentServiceImpl } from './service'


const router = Router()
const repository = new StudentRepository()
const service = new StudentServiceImpl(repository)
const controller: StudentController = new StudentControllerImpl(service)


router.get('',  controller.getAllStudents.bind(controller))
router.post('/create',  controller.createStudent.bind(controller))
//router.get('/:id',  controller.getStudentById.bind(controller))
//router.delete('/:id',  controller.deleteStudent.bind(controller))
//router.put('/:id',  controller.updateStudent.bind(controller))

export default router