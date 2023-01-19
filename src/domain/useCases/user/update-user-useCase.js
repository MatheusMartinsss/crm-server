const { updateUser } = require('../../../infra/repositorys/users-repository')
const { MissingParamError, NotFoundError } = require('../../../utils/helpers/errors')
module.exports = updateUserUseCase = async (id, body) => {
    if (!id) throw new MissingParamError('id')
    const user = await updateUser(id, body)
    return user
}