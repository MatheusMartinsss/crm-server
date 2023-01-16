const findUserUseCase = require('../../domain/useCases/find-user-useCase')
const { missingParamError, notFound } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = findUserRouter = async (httpRequest) => {
    try {
        const user = await findUserUseCase(httpRequest.params.id)
        return httpResponse.ok(user)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError()
        }
    }
}