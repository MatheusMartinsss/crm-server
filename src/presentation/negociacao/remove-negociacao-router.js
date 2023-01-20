const removeNegociacaoUseCase = require('../../domain/useCases/negociacoes/remove-negociacao-useCase')
const { notFound, unauthorized, missingParamError } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = removeNegociacaoRouter = async (httpRequest) => {
    try {
        const negociacao = await removeNegociacaoUseCase(httpRequest.user, httpRequest.params.id)
        return httpResponse.ok(negociacao)
    } catch (error) {
        switch (error.name) {
            case missingParamError: return httpResponse.badRequest(error)
            case unauthorized: return httpResponse.unauthorized(error)
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}