const { create } = require('../../infra/repositorys/users-repository')
module.exports = createUserUseCase = async (body) => {
    const user = await create(body)
    return user;
}