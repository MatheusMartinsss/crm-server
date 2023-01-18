const updateClienteUseCase = require('../../domain/useCases/update-cliente-useCase')
const { notFound, fieldAlreadyInUse, emailAlreadyInUse, unauthorized } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = updateUserRouter = async (request) => {
    try {
        const cliente = await updateClienteUseCase(request.user, request.params.id, request.body)
        return httpResponse.ok(cliente)
    } catch (error) {
        switch (error.name) {
            case emailAlreadyInUse: return httpResponse.badRequest(error)
            case fieldAlreadyInUse: return httpResponse.badRequest(error)
            case unauthorized: return httpResponse.unauthorized(error)
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}