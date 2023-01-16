const listUsersUseCase = require('../../domain/useCases/list-users-useCase')
const { notFound } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = listUsersRouter = async (request) => {
    try {
        const users = await listUsersUseCase()
        return httpResponse.ok(users)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}