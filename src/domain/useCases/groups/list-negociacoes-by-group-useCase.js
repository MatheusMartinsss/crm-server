const { listNegociacoesByGroups } = require('../../../infra/repositorys/groups-repository')
const { NotFoundError } = require('../../../utils/helpers/errors')
module.exports = listNegociacoesByGroupUseCase = async () => {

    const groups = await listNegociacoesByGroups()

    if (!groups.length)
        throw new NotFoundError('grupos')

    return groups
}