export interface UnexpectedError { 
    _tag: 'UnexpectedError', 
    message: string
}

export type ValidationErrors = Record<string, string>

export interface ValidationError { 
    _tag: 'ValidationError'
    errors: ValidationErrors
}

export type Error = UnexpectedError | ValidationError

export const toUnexpectedError = (error: any): UnexpectedError => ({
    _tag: 'UnexpectedError',
    message: String(error)
})

export const toValidationError = (errors: ValidationErrors): ValidationError => ({
    _tag: 'ValidationError',
    errors
})

export const isValidationError = (error: Error): error is ValidationError => {
    return error._tag === 'ValidationError'
}