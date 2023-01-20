const { create, findByName } = require('../../../infra/repositorys/groups-repository')
const { MissingParamError, FieldAlreadyInUse } = require('../../../utils/helpers/errors')
module.exports = createGroupUseCase = async (body) => {

    const requiredFields = ['name', 'description']

    for (const field in requiredFields) {
        if (!body[requiredFields[field]]) {
            throw new MissingParamError(requiredFields[field])
        }
    }
 
    const verifyNameAlreadyExists = await findByName(body.name)
 
    if (verifyNameAlreadyExists)
        throw new FieldAlreadyInUse('name', body.name)

    const group = await create(body)
 
    return group
}