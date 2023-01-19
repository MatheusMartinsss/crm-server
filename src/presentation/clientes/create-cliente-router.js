const createClienteUseCase = require('../../domain/useCases/clientes/create-cliente-useCase')
const httpResponse = require('../../utils/helpers/http-helper')
const { emailAlreadyInUse, missingParamError } = require('../../utils/helpers/errors-helper')
module.exports = createClienteRouter = async (request) => {
    try {
        const cliente = await createClienteUseCase(request.user, request.body)
        return httpResponse.created(cliente)
    } catch (error) {
        switch (error.name) {
            case emailAlreadyInUse: return httpResponse.badRequest(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError(error)
        }
    }
}