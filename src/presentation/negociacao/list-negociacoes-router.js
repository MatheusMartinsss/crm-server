const listNegociacoesUseCase = require('../../domain/useCases/negociacoes/list-negociacoes-useCase')
const { notFound } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')

module.exports = listNegociacoesRouter = async (httpRequest) => {
    try {
        const negociacoes = await listNegociacoesUseCase(httpRequest.user, httpRequest.query)
        return httpResponse.ok(negociacoes)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}