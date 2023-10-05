import { db } from "../../../db/database"
import { Student, StudentReq } from "./models"
// import logger from '../../../utils/logger'
import { CustomError } from "../../../utils/customErrors"

export class StudentRepository {
    public async createStudent(student: StudentReq): Promise<Student> {
        try {
            const [createdStudent] =  await db('students').insert(student).returning('*') // select * from doctors where id_doctor=?
            return createdStudent
        } catch (error) {
            throw new CustomError ('CreationError','Failed to create student in repository', 'students')
        }
    }

    public async getAllDoctors(): Promise<Student[]> {
        try {
            return  db.select('*').from('students')
        } catch (error) {
            throw new CustomError( 'GetAllError', 'Failed getting all students in repository', 'students' )
        }
    }};
/*
    public async getDoctorById(id: number): Promise<Doctor> {
        try{
            const doctor: Doctor = await db('doctors').where({ doctor_id: id }).first()
            return doctor
        } catch (error){
            logger.error( 'Failed get doctor by id in the repository', {error})
            throw new CustomError ('RecordNotFoundError','Record has not been found yet', 'doctors')
        }
    }

    public async updateDoctor(id: number, updates: Partial<DoctorReq>): Promise<void> {
        try{
            await db('doctors').where({ doctor_id: id }).update(updates);      
        } catch (error){
            logger.error( 'Failed updated doctor in repository', {error})
            throw new CustomError ('UpdateError', 'Failed updated doctor in repository', 'doctors')
        }
    }

    public async deleteDoctor(id: number): Promise<void> {
        try{
            await db('doctors').where({ doctor_id: id }).del()
        } catch (error){
            logger.error( 'Failed deleting doctor in repository', {error})
            throw new CustomError ( 'DeleteError', 'Failed deleting doctor in repository', 'doctors')
        }
    }
}
*/
export default{
    StudentRepository
}