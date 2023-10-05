import { Student } from './models';
import { Request, Response } from 'express'
import { StudentService } from './service'
import logger from '../../../utils/logger'
import { CustomError } from '../../../utils/customErrors'
import { createStudentSchema } from "./validations/student.validation"

export interface StudentController {
    getAllStudents(req: Request, res: Response): void
    createStudent(req: Request, res: Response): void  
    //getStudentById(req: Request, res: Response): void 
    //updateStudent(req: Request, res: Response): void   
    //deleteStudent(req: Request, res: Response): void  
}

export class StudentControllerImpl implements StudentController {
    private  studentService:  StudentService
    
    constructor ( studentService: StudentService ){
        this.studentService = studentService
    }
    public  async getAllStudents(req: Request, res: Response): Promise<void> {
        try {
            const students = await this.studentService.getAllStudents()
            res.status(200).json(students)
            
        } catch (error) {
            res.status(400).json({message: "Error getting all students"})
        }
    }
    public  createStudent(req: Request, res: Response): void {

        const { error, value } = createStudentSchema.validate(req.body)
        if (error){
            res.status(400).json({message: error.details[0].message})
        } else {
            this.studentService.createStudent(value)
            .then(
                (student) => {
                    res.status(201).json(student)
                    
                },
                (error) => {
                    logger.error(error)
                    if (error instanceof CustomError){
                        res.status(400).json({
                            error_name: error.name,
                            message: "Failed Creating a student in controler"
                        })
                    } else {
                        res.status(400).json({
                            message: "Internal Server Error"
                        })
                    }
                }
            )
        }
    }};
/*
    public async getPatientById (req: Request, res: Response): Promise<void> {
        try{
            const id = parseInt(req.params.id)
            if (isNaN(id)){
                throw new Error("Id must be a number") 
            }
            const patient =  await this.patientService.getPatientById(id)
            if (patient) {
                res.status(200).json(patient)
            } else {
                throw new CustomError ('RecordNotFoundError', 'Record has not found yet', 'patients' ) 
            }
        } catch (error) {
            logger.error(error)
            if (error instanceof CustomError){
                res.status(400).json({error: error.message})
            } else {
                res.status(400).json({error: "Failed to retrieve patient"})
            }
        }
    }

    public async updatePatient (req: Request, res: Response): Promise<void> {
        try{
            const id = parseInt(req.params.id)
            const updatesReq = req.body
            const patient =  await this.patientService.updatePatient(id, updatesReq)
            if (patient) {
                res.status(200).json(patient)
            } else {
                throw new CustomError ('UpdateError', 'Failed updating patient in controller', 'patients')
            }
        } catch (error) {
            logger.error(error)
            if (error instanceof CustomError){
                res.status(400).json({error: error.message})
            } else {
                res.status(400).json({error: "Failed to update patient"})
            }
        }
    }

    public async deletePatient (req: Request, res: Response): Promise<void> {
        try{
            const id = parseInt(req.params.id)
            await this.patientService.deletePatient(id)
            
            res.status(200).json({message: `Patient ${id} was deleted successfully`})
        } catch (error) {
            logger.error(error)
            if (error instanceof CustomError){
                res.status(400).json({error: error.message})
            } else {
                res.status(400).json({error: "Failed to delete patient"})
            }
        }
    }

} */