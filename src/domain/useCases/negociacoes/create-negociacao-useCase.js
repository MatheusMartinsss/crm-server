const { create, findById } = require('../../../infra/repositorys/negociacao-repository')
const findClienteUseCase = require('../clientes/find-cliente-useCase')
const findGroupByIdUseCase = require('../groups/find-group-by-id-useCase')
const { MissingParamError } = require('../../../utils/helpers/errors')
module.exports = createNegociacaoUseCase = async (user, body) => {
    
    const requiredFields = ['name', 'description']

    body.vendedor_id = user.id

    if (body.Cliente) {
        await findClienteUseCase(user, body.Cliente.id)
    }
    if (body.Group) {
        await findGroupByIdUseCase(body.Group.id)
    }
    for (const field in requiredFields) {
        if (!body[requiredFields[field]]) {
            throw new MissingParamError(requiredFields[field])
        }
    }

    const response = await create(body)

    const negociacao = await findById(response.id)
    return negociacao
}