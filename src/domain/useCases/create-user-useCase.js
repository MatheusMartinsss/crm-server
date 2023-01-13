const { create, findByEmail } = require('../../infra/repositorys/users-repository')
module.exports = createUserUseCase = async (body) => {
    const verifyEmailAlreadyInUse = await findByEmail(body.email)
    if (verifyEmailAlreadyInUse) {
        throw new Error('email já está em uso')
    }
    const user = await create(body)
    return user;
}