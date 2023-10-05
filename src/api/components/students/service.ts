import { nodeModuleNameResolver } from "typescript"
import { CustomError } from "../../../utils/customErrors"
//import logger from "../../../utils/logger"
import { Student, StudentReq } from "./models"
import { StudentRepository } from "./repository"


export interface StudentService {
    getAllStudents(): Promise<Student[]>
    createStudent(studentReq: StudentReq): Promise<Student>
    //getStudentById(id: string): Promise<Student>
    //updateStudent(id: string, updates:Partial<StudentReq>): Promise<Student>
    //deleteStudent(id: string): Promise<void>
}

export class StudentServiceImpl implements StudentService {
    private studentRepository: StudentRepository

    constructor(studentRepository: StudentRepository){
        this.studentRepository = studentRepository
    }

    public getAllStudents(): Promise<Student[]> {
        const students: Promise<Student[]> =  this.studentRepository.getAllDoctors()
        return students
    }
    
    public createStudent(studentReq: StudentReq): Promise<Student> {
        try{
            return this.studentRepository.createStudent(studentReq)
        } catch (error){
            throw new CustomError ('CreationError', "Failed to create student in service", "students")
        }
    }}
/*
    public getDoctorById(id: number): Promise<Student> {
        try {
            return this.doctorRepository.getDoctorById(id)
        } catch (error) {
            logger.error('Failed to get doctor from service')
            throw new CustomError ('RecordNotFoundError', 'Record has not found yet', 'doctors')
        }
    }

    public async updateDoctor(id: number, updates: Partial<DoctorReq>): Promise<Doctor> {
        try {
            const existDoctor =  await this.doctorRepository.getDoctorById(id)
            if (!existDoctor) {
                throw new CustomError ( 'RecordNotFoundError', 'Record has not found yet', 'doctors' )
            } else {
            const updateDoctor = {...existDoctor, ...updates}
            this.doctorRepository.updateDoctor(id, updateDoctor)
            return updateDoctor }
        } catch (error) {
            logger.error( 'Failed to update doctor from service' )
            throw new CustomError ( 'UpdateError', 'Failed to update doctor from service', 'doctors' )
        }
    }

    public async deleteDoctor(id: number): Promise<void> {
        try {
            const existDoctor =  await this.doctorRepository.getDoctorById(id)          
            await this.doctorRepository.deleteDoctor(existDoctor.doctor_id)           
        } catch (error) {          
            logger.error('Failed to delete doctor from service')
            throw new CustomError ( 'DeleteError', 'Failed to delete doctor from service', 'doctors' )          
        }
    }
}*/
