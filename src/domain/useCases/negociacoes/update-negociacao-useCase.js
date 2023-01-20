const findNegociacaoUseCase = require('./find-negociacao-useCase')
const findClienteUseCase = require('../clientes/find-cliente-useCase')
const findUserUseCase = require('../user/find-user-useCase')
const { updateNegociacao } = require('../../../infra/repositorys/negociacao-repository')
const { MissingParamError, Unauthorized } = require('../../../utils/helpers/errors')
module.exports = updateNegociacaoUseCase = async (user, id, body) => {

    if (!id)
        throw new MissingParamError('id')

    await findNegociacaoUseCase(user, id)

    if (body.cliente_id) {
        await findClienteUseCase(body.cliente_id)
    }

    if (body.vendedor_id && user.role != 'admin')
        throw new Unauthorized()

    if (body.vendedor_id) {
        await findUserUseCase(body.vendedor_id)
    }
    const negociacao = await updateNegociacao(id, body)
    return negociacao
}