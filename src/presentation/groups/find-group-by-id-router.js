const findGroupByIdUseCase = require('../../domain/useCases/groups/find-group-by-id-useCase')
const { missingParamError, notFound, unauthorized } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')

module.exports = findGroupByIdRouter = async (httpRequest) => {

    try {
        const group = await findGroupByIdUseCase(httpRequest.params.id)
        return httpResponse.ok(group)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            case missingParamError: return httpResponse.badRequest(error)
            case unauthorized: return httpResponse.unauthorized(error)
            default: return httpResponse.serverError(error)
        }
    }
}