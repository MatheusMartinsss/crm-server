const { updateUser, findByEmail } = require('../../../infra/repositorys/users-repository')
const { MissingParamError, EmailAlreadyInUse } = require('../../../utils/helpers/errors')
const findUserUseCase = require('./find-user-useCase')
const { encrypt } = require('../../../utils/helpers/encrypter')
module.exports = updateUserUseCase = async (id, body) => {
    if (!id) throw new MissingParamError('id')

    if (!body) throw new MissingParamError()

    await findUserUseCase(id)

    if (body.email) {
        await findByEmail(body.email).then(() => {
            throw new EmailAlreadyInUse()
        })
    }

    if (body.password) {
        body.password = await encrypt(body.password)
    }

    await updateUser(id, body)

    const user = await findUserUseCase(id)

    return user
}