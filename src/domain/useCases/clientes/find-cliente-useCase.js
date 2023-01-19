const { findById } = require('../../../infra/repositorys/clientes-repository')
const { MissingParamError, NotFoundError, Unauthorized } = require('../../../utils/helpers/errors')
module.exports = findUserUseCase = async (user, id) => {

    if (!id)
        throw new MissingParamError('id')

    const cliente = await findById(id)

    if (!cliente)
        throw new NotFoundError('Cliente')

    if (user.role != 'admin' && cliente.vendedor_id != user.id)
        throw new Unauthorized()


    return cliente
}