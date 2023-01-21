const { create, findByName } = require('../../../infra/repositorys/tags-repository')
const { MissingParamError, FieldAlreadyInUse } = require('../../../utils/helpers/errors')
module.exports = createTagUseCase = async (body) => {

    const requiredFields = ['name', 'color']


    for (const field in requiredFields) {
        if (!body[requiredFields[field]]) {
            throw new MissingParamError(requiredFields[field])
        }
    }
 
    const verifyNameAlreadyExists = await findByName(body.name)
 
    if (verifyNameAlreadyExists)
        throw new FieldAlreadyInUse('name', body.name)

    const tag = await create(body)
 
    return tag
}