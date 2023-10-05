import  { Router } from 'express'
//import doctorRoutes from './components/students/routes'
//import citaRoutes from './components/appointments/routes'
import studentsRoutes from './components/students/routes'


const router = Router()

//router.use('/doctors', doctorRoutes)
//router.use('/appointments', citaRoutes)
router.use('/students', studentsRoutes)

export default router