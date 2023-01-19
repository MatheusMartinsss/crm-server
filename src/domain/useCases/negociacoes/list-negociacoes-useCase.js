const { findAll } = require('../../../infra/repositorys/negociacao-repository')
const { NotFoundError } = require('../../../utils/helpers/errors')
module.exports = listNegociacoesUseCase = async (user, query) => {
    const negociacoes = await findAll(user, query)
    if (!negociacoes.length)
        throw new NotFoundError("Negociacoes")
    return negociacoes
}