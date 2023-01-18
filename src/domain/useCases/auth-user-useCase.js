const { updateUser, findByEmail } = require('../../infra/repositorys/users-repository')
const { compare } = require('../../utils/helpers/encrypter')
const { MissingParamError, NotFoundError, Unauthorized, } = require('../../utils/helpers/errors')
const { generate } = require('../../utils/helpers/token-generator')
module.exports = authUserUseCase = async (email, password) => {
    if (!email) throw new MissingParamError('email')
    if (!password) throw new MissingParamError('password')
    const user = await findByEmail(email)
    if (!user) throw new NotFoundError('usuario')
    const comparePassword = await compare(password, user.password)
    if (!comparePassword) throw new Unauthorized()
    const token = generate(user.id, user.name, user.role)
    return token
}