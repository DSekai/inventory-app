import { ErrorResponse } from "../../types/types"

export const handleErrorExepcion = (error: ErrorResponse) => {
  const errorMessages = error.message ?? 'Error in fetch'

  const errors = Array.isArray(errorMessages)
    ? errorMessages.map(error => error).join('')
    : errorMessages

  throw new Error(errors)
}