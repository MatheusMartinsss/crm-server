const { findAll } = require('../../../infra/repositorys/groups-repository')
const { NotFoundError } = require('../../../utils/helpers/errors')
module.exports = listGroupsUseCase = async (query) => {
    const groups = await findAll(query)
    if (!groups.length)
        throw new NotFoundError('grupos')
    return groups
}