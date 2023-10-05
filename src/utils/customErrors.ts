
type ErrorType =
    'RecordNotFoundError' |
    'CreationError' |
    'UpdateError' |
    'DeleteError' |
    'GetAllError'

type ComponentName = 
    'students' |
    'classes' |
    'teachers'

export class CustomError extends Error {
    constructor(errorType: ErrorType, message: string, componentName: ComponentName ){
        super(message)
        this.name = `${componentName} ${errorType}`
    }
}