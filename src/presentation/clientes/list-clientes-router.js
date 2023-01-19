const listClientesUseCase = require('../../domain/useCases/clientes/list-clientes-useCase')
const { notFound } = require('../../utils/helpers/errors-helper')
const httpResponse = require('../../utils/helpers/http-helper')
module.exports = listClientesRouter = async (request) => {
    try {
        const clientes = await listClientesUseCase(request)
        return httpResponse.ok(clientes)
    } catch (error) {
        switch (error.name) {
            case notFound: return httpResponse.notFound(error)
            default: return httpResponse.serverError(error)
        }
    }
}