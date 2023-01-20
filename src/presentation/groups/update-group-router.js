const updateGroupUseCase = require('../../domain/useCases/groups/update-group-useCase')
const { notFound, fieldAlreadyInUse, unauthorized, missingParamError } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = updateGroupRouter = async (httpRequest) => {
    try {
        const group = await updateGroupUseCase(httpRequest.params.id, httpRequest.body)
        return httpResponse.ok(group)
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