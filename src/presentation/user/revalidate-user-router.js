const revalidateUserUseCase = require('../../domain/useCases/user/revalidate-user-useCase')
const { unauthorized } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = revalidateUserRouter = async (httpRequest) => {
    try {
        const user = await revalidateUserUseCase(httpRequest.body.token)
        return httpResponse.ok(user)
    } catch (error) {
        switch (error.name) {
            case unauthorized: return httpResponse.unauthorized(error)
            default: return httpResponse.serverError(error)
        }
    }
}