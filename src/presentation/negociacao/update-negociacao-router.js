const updateNegociacaoUseCase = require('../../domain/useCases/negociacoes/update-negociacao-useCase')
const { unauthorized, missingParamError, notFound } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = updateNegociacaoRouter = async (httpRequest) => {
    try {
        const negociacao = await updateNegociacaoUseCase(httpRequest.user, httpRequest.params.id, httpRequest.body)
        return httpResponse.ok(negociacao)
    } catch (error) {
        switch (error.name) {
            case unauthorized: return httpResponse.unauthorized(error)
            case notFound: return httpResponse.notFound(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError(error)
        }
    }
}