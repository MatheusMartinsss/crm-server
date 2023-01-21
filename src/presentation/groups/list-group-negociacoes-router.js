const listGroupNegociacoesUseCase = require("../../domain/useCases/groups/list-group-negociacoes.-useCase")
const httpResponse = require("../../utils/helpers/http-helper")
const { missingParamError, notFound, unauthorized } = require('../../utils/helpers/errors-helper')
module.exports = listGroupNegociacoesRouter = async (httpRequest) => {
    try {
        const group = await listGroupNegociacoesUseCase(httpRequest.params.id)
        return httpResponse.ok(group)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            case missingParamError: return httpResponse.badRequest(error)
            case unauthorized: return httpResponse.unauthorized(error)
            default: return httpResponse.serverError(error)
        }
    }
}