const findClienteUseCase = require('../../domain/useCases/find-cliente-useCase')
const { missingParamError, notFound, unauthorized } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = findClienteRouter = async (httpRequest) => {
    try {
        const cliente = await findClienteUseCase(httpRequest.user, httpRequest.params.id)
        return httpResponse.ok(cliente)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            case missingParamError: return httpResponse.badRequest(error)
            case unauthorized: return httpResponse.unauthorized()
            default: return httpResponse.serverError()
        }
    }
}