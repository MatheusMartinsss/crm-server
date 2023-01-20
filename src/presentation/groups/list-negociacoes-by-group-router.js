const listNegociacoesByGroupUseCase = require("../../domain/useCases/groups/list-negociacoes-by-group-useCase");
const httpResponse = require("../../utils/helpers/http-helper");
const { notFound } = require('../../utils/helpers/errors-helper')
module.exports = listNegociacoesByGroupRouter = async (httpRequest) => {
    try {
        const groups = await listNegociacoesByGroupUseCase()
        return httpResponse.ok(groups)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}