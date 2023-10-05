import Joi from 'joi'

const createStudentSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    identification: Joi.string().required(),
    phone_number: Joi.number().integer().required(),
    email: Joi.string().email().required()
})

export { createStudentSchema }