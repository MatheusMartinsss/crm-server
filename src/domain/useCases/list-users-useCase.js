const { findAll } = require('../../infra/repositorys/users-repository');
const { NotFoundError } = require('../../utils/helpers/errors');
module.exports = listUsersUseCase = async (request) => {
    const users = await findAll()
    if (!users.length) {
        throw new NotFoundError('usuarios')
    }
    return users;
}