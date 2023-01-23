const addTagToNegociacaoUseCase = require('../../domain/useCases/negociacoes/add-tags-to-negociacao-useCase')
const { missingParamError, notFound } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')

module.exports = addTagToNegociacaoRouter = async (httpRequest) => {
    try {
        const negociacao = await addTagToNegociacaoUseCase(httpRequest.user, httpRequest.params.id, httpRequest.body)
        return httpResponse.ok(negociacao)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            case missingParamError: return httpResponse.badRequest(error)
            default: return httpResponse.serverError(error)
        }
    }
}