const { findGroupById } = require('../../../infra/repositorys/groups-repository')
const { NotFoundError, MissingParamError } = require('../../../utils/helpers/errors')
module.exports = findGroupByIdUseCase = async (id) => {

    if (!id)
        throw new MissingParamError('id')

    const group = await findGroupById(id)

    if (!group)
        throw new NotFoundError('grupo')

    return group
}