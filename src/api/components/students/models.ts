export interface Student {
    id: string
    first_name: string
    last_name: string
    identification: string
    phone_number: number
    email: string
    level: string
    password_hash: string
    createdAt?: Date
    updatedAt?: Date
    
}

export interface StudentReq {
    first_name: string
    last_name: string
    identification: string
    phone_number: number
    email: string
    password_hash: string
}
