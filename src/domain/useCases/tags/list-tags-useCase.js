const { findAll } = require('../../../infra/repositorys/tags-repository')
const { NotFoundError } = require('../../../utils/helpers/errors')
module.exports = listTagsUseCase = async (query) => {

    const tags = await findAll()

    if (!tags.length)
        throw new NotFoundError('tags')

    return tags    
}