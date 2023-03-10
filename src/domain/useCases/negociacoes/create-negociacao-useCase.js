const { create, findById, addTag } = require('../../../infra/repositorys/negociacao-repository')
const findClienteUseCase = require('../clientes/find-cliente-useCase')
const { MissingParamError } = require('../../../utils/helpers/errors')
module.exports = createNegociacaoUseCase = async (user, body) => {
    const requiredFields = ['name', 'description']
    body.vendedor_id = user.id
    if (body.cliente_id) {
        await findClienteUseCase(user, body.cliente_id)
    }
    for (const field in requiredFields) {
        if (!body[requiredFields[field]]) {
            throw new MissingParamError(requiredFields[field])
        }
    }
    const response = await create(body)
    if (body?.tags) {
        await addTag(response, body.tags)
    }
    const negociacao = await findById(response.id)
    return negociacao
}