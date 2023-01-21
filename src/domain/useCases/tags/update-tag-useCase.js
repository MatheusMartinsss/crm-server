const { MissingParamError, FieldAlreadyInUse } = require('../../../utils/helpers/errors')
const { updateTag, findByName } = require('../../../infra/repositorys/tags-repository')
const findTagByIdUseCase = require('./find-tag-by-id-useCase')
module.exports = updateTagUseCase = async (id, body) => {

    if (!id)
        throw new MissingParamError('id')

    if (!body)
        throw new MissingParamError('body empty')

    await findTagByIdUseCase(id)

    if (body.name) {
        const verifyNameAlreadyInUse = await findByName(body.name)
        if (verifyNameAlreadyInUse)
            throw new FieldAlreadyInUse('name', body.name)
    }

    const tag = await updateTag(id, body)

    return tag

}