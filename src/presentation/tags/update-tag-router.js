const updateTagUseCase = require('../../domain/useCases/tags/update-tag-useCase')
const { notFound, fieldAlreadyInUse, unauthorized, missingParamError } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = updateTagRouter = async (httpRequest) => {
    try {
        const tag = await updateTagUseCase(httpRequest.params.id, httpRequest.body)
        return httpResponse.ok(tag)
    } catch (error) {
        switch (error.name) {
            case fieldAlreadyInUse: return httpResponse.badRequest(error)
            case missingParamError: return httpResponse.badRequest(error)
            case unauthorized: return httpResponse.unauthorized(error)
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}