const findTagByIdUseCase = require('../../domain/useCases/tags/find-tag-by-id-useCase')
const { missingParamError, notFound, unauthorized } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')

module.exports = findTagByIdRouter = async (httpRequest) => {

    try {
        const tag = await findTagByIdUseCase(httpRequest.params.id)
        return httpResponse.ok(tag)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            case missingParamError: return httpResponse.badRequest(error)
            case unauthorized: return httpResponse.unauthorized(error)
            default: return httpResponse.serverError(error)
        }
    }
}