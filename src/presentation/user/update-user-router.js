const updateUsersUseCase = require('../../domain/useCases/update-user-useCase')
const { notFound } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = updateUserRouter = async (request) => {
    try {
        const users = await updateUsersUseCase(request.params.id, request.body)
        return httpResponse.ok(users)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}