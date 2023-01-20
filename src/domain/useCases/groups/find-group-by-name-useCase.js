const { findByName } = require('../../../infra/repositorys/groups-repository')
const { MissingParamError, NotFoundError } = require('../../../utils/helpers/errors')
module.exports = findGroupByName = async (name) => {

    if (!name)
        throw new MissingParamError('name')

    const group = await findByName(name)

    if (!group)
        throw new NotFoundError('group')

    return group
}