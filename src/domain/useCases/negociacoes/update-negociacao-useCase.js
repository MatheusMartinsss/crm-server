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

    if (body?.cliente_id) {
        await findClienteUseCase(user, body.cliente_id)
    }
    if (body?.vendedor_id && user.role != 'admin')
        throw new Unauthorized()

    if (body?.vendedor_id) {
        await findUserUseCase(body.vendedor_id)
    }
    if (body?.group_id) {
        await findGroupByIdUseCase(body.group_id)
    }
    if (body?.tags) {
        await updateTags(_negociacao, body.tags)
    }
    await updateNegociacao(id, body)

    const negociacao = await findById(id)

    return negociacao
}