const { addTag } = require('../../../infra/repositorys/negociacao-repository')
const { MissingParamError } = require('../../../utils/helpers/errors')
const findNegociacaoUseCase = require('./find-negociacao-useCase')
module.exports = negociacaoAddTagUseCase = async (user, id, body) => {

    if (!id)
        throw MissingParamError('id')

    if (!body.tags.length)
        throw MissingParamError('tags')

    const negociacao = await findNegociacaoUseCase(user, id)

    const _negociacao = await addTag(negociacao, body.tags)
    
    return _negociacao
}