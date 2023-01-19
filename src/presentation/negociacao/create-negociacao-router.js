const createNegociacaoUseCase = require('../../domain/useCases/negociacoes/create-negociacao-useCase')
const { unauthorized, missingParamError } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')

module.exports = createNegociacaoRouter = async (httpRequest) => {
    try {
        const negociacao = await createNegociacaoUseCase(httpRequest.user, httpRequest.body)
        return httpResponse.created(negociacao)
    } catch (error) {
        switch (error.name) {
            case missingParamError: return httpResponse.badRequest(error)
            case unauthorized: return httpResponse.unauthorized(error)
            default: return httpResponse.serverError(error)
        }
    }
}