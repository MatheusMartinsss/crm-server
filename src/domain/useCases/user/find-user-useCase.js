const { findById } = require('../../../infra/repositorys/users-repository')
const { MissingParamError, NotFoundError } = require('../../../utils/helpers/errors')
module.exports = findUserUseCase = async (id) => {

    if (!id) throw new MissingParamError('id')
    const user = await findById(id)
    console.log(user)
    if (!user) throw new NotFoundError('usuario')
    return user
}