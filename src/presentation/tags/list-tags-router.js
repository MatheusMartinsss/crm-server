const listTagsUseCase = require('../../domain/useCases/tags/list-tags-useCase')
const httpResponse = require('../../utils/helpers/http-helper')
const { notFound } = require('../../utils/helpers/errors-helper')
module.exports = listTagsRouter = async (httpRequest) => {
    try {
        const tags = await listTagsUseCase(httpRequest.query)
        return httpResponse.ok(tags)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}