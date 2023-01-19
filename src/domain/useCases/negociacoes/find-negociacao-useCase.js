const { findById } = require("../../../infra/repositorys/negociacao-repository")
const { NotFoundError, Unauthorized } = require("../../../utils/helpers/errors")

module.exports = findNegociacaoUseCase = async (user, id) => {

    const negociacao = await findById(id)

    if (!negociacao)
        throw new NotFoundError('negociacao')

    if (user.id != negociacao.vendedor_id)
        throw new Unauthorized()

    return negociacao
}