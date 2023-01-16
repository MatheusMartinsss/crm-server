const { create, findByEmail } = require('../../infra/repositorys/users-repository')
const { EmailAlreadyInUse, MissingParamError } = require('../../utils/helpers/errors')
const { encrypt } = require('../../utils/helpers/encrypter')
module.exports = createUserUseCase = async (body) => {
    const verifyEmailAlreadyInUse = await findByEmail(body.email)
    const requiredFields = ['email', 'password', 'name']
    if (verifyEmailAlreadyInUse) {
        throw new EmailAlreadyInUse(body.email)
    }
    for (const field in requiredFields) {
        if (!body[requiredFields[field]]) {
            throw new MissingParamError(requiredFields[field])
        }
    }
    body.password = await encrypt(body.password)
    const user = await create(body)
    return user;
}