const { findAll } = require('../../../infra/repositorys/negociacao-repository')
const { NotFoundError } = require('../../../utils/helpers/errors')
module.exports = listNegociacoesUseCase = async (user, query) => {
    const result = await findAll(user, query)
    return result
}