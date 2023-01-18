const { findAll} = require('../../infra/repositorys/clientes-repository');
const { NotFoundError } = require('../../utils/helpers/errors');
module.exports = listClientesUseCase = async (request) => {
    const { user, query } = request
    const clientes = await findAll(user, query)
    if (!clientes.length) {
        throw new NotFoundError('clientes')
    }
    return clientes;
}