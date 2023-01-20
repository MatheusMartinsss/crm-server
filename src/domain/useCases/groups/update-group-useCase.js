const { MissingParamError, FieldAlreadyInUse } = require('../../../utils/helpers/errors')
const { updateGroup, findByName } = require('../../../infra/repositorys/groups-repository')
const findGroupByIdUseCase = require('./find-group-by-id-useCase')
module.exports = updateGroupUseCase = async (id, body) => {

    if (!id)
        throw new MissingParamError('id')

    if (!body)
        throw new MissingParamError('body empty')

    await findGroupByIdUseCase(id)

    if (body.name) {
        const verifyNameAlreadyInUse = await findByName(body.name)
        if (verifyNameAlreadyInUse)
            throw new FieldAlreadyInUse('name', body.name)
    }

    const group = await updateGroup(id, body)

    return group

}