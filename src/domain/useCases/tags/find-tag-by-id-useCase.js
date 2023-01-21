const { findTagById } = require('../../../infra/repositorys/tags-repository')
const { NotFoundError, MissingParamError } = require('../../../utils/helpers/errors')
module.exports = findTagByIdUseCase = async (id) => {

    if (!id)
        throw new MissingParamError('id')

    const tag = await findTagById(id)

    if (!tag)
        throw new NotFoundError('tag')

    return tag
}