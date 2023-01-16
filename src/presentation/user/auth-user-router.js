const authUserUseCase = require('../../domain/useCases/auth-user-useCase')
const { missingParamError, notFound, unauthorized } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = authUserRouter = async (httpRequest) => {
    try {
        const { email, password } = httpRequest.body
        const user = await authUserUseCase(email, password)
        return httpResponse.ok(user)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            case unauthorized: return httpResponse.unauthorized(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError()
        }
    }
}