const listGroupsUseCase = require('../../domain/useCases/groups/list-groups-useCase')
const httpResponse = require('../../utils/helpers/http-helper')
const { notFound } = require('../../utils/helpers/errors-helper')
module.exports = listGroupsRouter = async (httpRequest) => {
    try {
        const groups = await listGroupsUseCase(httpRequest.query)
        return httpResponse.ok(groups)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}