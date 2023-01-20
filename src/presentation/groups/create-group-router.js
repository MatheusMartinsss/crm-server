const createGroupUseCase = require('../../domain/useCases/groups/create-group-useCase')
const { missingParamError, unauthorized, fieldAlreadyInUse } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = createGroupRouter = async (httpRequest) => {
    try {
        const group = await createGroupUseCase(httpRequest.body)
        return httpResponse.created(group)
    } catch (error) {
        switch (error.name) {
            case unauthorized: return httpResponse.badRequest(error)
            case fieldAlreadyInUse: return httpResponse.badRequest(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError(error)
        }
    }
}