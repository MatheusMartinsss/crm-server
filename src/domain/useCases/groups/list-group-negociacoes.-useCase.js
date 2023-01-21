const { MissingParamError, NotFoundError } = require("../../../utils/helpers/errors")
const { listNegociacoesByGroups } = require('../../../infra/repositorys/groups-repository')
module.exports = listGroupNegociacoesUseCase = async (id) => {
    if (!id)
        throw new MissingParamError('id')

    const group = await listNegociacoesByGroups(id)

    if (!group)
        throw new NotFoundError('grupo')

    return group

}