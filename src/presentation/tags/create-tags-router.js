const createTagUseCase = require('../../domain/useCases/tags/create-tag-useCase')
const { missingParamError,  fieldAlreadyInUse } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = createTagRouter = async (httpRequest) => {
    try {
        const tag = await createTagUseCase(httpRequest.body)
        return httpResponse.created(tag)
    } catch (error) {
        switch (error.name) {
            case fieldAlreadyInUse: return httpResponse.badRequest(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError(error)
        }
    }
}