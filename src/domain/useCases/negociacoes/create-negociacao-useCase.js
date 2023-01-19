const { create } = require('../../../infra/repositorys/negociacao-repository')
const {  MissingParamError } = require('../../../utils/helpers/errors')
module.exports = createNegociacaoUseCase = async (user, body) => {
    const requiredFields = ['name', 'description']
    body.vendedor_id = user.id
    for (const field in requiredFields) {
        if (!body[requiredFields[field]]) {
            throw new MissingParamError(requiredFields[field])
        }
    }
    const negociacao = await create(body)
    return negociacao
}