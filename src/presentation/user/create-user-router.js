const createUserUseCase = require('../../domain/useCases/create-user-useCase')
const httpResponse = require('../../utils/helpers/http-helper')
const { emailAlreadyInUse, missingParamError } = require('../../utils/helpers/errors-helper')
module.exports = createUserRouter = async (request) => {
    try {
        const user = await createUserUseCase(request.body)
        return httpResponse.created(user)
    } catch (error) {
        switch (error.name) {
            case emailAlreadyInUse: return httpResponse.badRequest(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError(error)
        }
    }
}