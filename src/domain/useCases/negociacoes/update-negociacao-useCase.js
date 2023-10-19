const findNegociacaoUseCase = require('./find-negociacao-useCase')
const findClienteUseCase = require('../clientes/find-cliente-useCase')
const findUserUseCase = require('../user/find-user-useCase')
const findGroupByIdUseCase = require('../groups/find-group-by-id-useCase')
const { updateNegociacao, updateTags, findById } = require('../../../infra/repositorys/negociacao-repository')
const { MissingParamError, Unauthorized } = require('../../../utils/helpers/errors')
module.exports = updateNegociacaoUseCase = async (user, id, body) => {

    if (!id)
        throw new MissingParamError('id')

    const _negociacao = await findNegociacaoUseCase(user, id)

    if (body?.Cliente) {
        await findClienteUseCase(user, body.Cliente.id)
    }
    if (body?.Vendedor?.id && user.role != 'admin')
        throw new Unauthorized()

    if (body?.Vendedor) {
        await findUserUseCase(body.Vendedor.id)
    }
    if (body?.Group) {
        await findGroupByIdUseCase(body.Group.id)
    }
    if (body?.Tag) {
        await updateTags(_negociacao, body?.Tag?.id)
    }
    console.log(body)
    await updateNegociacao(_negociacao, body)

    const negociacao = await findById(id)

    return negociacao
}