const { MissingParamError } = require('../../../utils/helpers/errors')
const findNegociacaoUseCase = require('./find-negociacao-useCase')
const { removeNegociacao } = require('../../../infra/repositorys/negociacao-repository')
module.exports = removeNegociacaoUseCase = async (user, id) => {
    if (!id) {
        throw new MissingParamError('id')
    }
    await findNegociacaoUseCase(user, id)

    const negociacao = await removeNegociacao(id)

    return negociacao
}