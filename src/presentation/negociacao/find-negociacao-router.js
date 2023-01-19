const findNegociacaoUseCase = require('../../domain/useCases/negociacoes/find-negociacao-useCase')
const { missingParamError, notFound } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')

module.exports = findNegociacaoRouter = async (httpRequest) => {
    try {
        const negociacao = await findNegociacaoUseCase(httpRequest.user, httpRequest.params.id)
        return httpResponse.ok(negociacao)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError(error)
        }
    }
}