const createUserUseCase = require('../../domain/useCases/create-user-useCase')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = createUserRouter = async (request) => {
    try {
        console.log(request)
        const user = await createUserUseCase(request.body)
        return httpResponse.ok(user)
    } catch (error) {
        console.log(error)
        return httpResponse.serverError(error)
    }
}