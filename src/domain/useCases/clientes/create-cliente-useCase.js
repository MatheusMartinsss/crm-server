const { create, findByEmail } = require('../../../infra/repositorys/clientes-repository')
const { EmailAlreadyInUse, MissingParamError } = require('../../../utils/helpers/errors')
module.exports = createUserUseCase = async (user, body) => {
    const verifyEmailAlreadyInUse = await findByEmail(body.email)
    const requiredFields = ['email', 'name', 'lastname', 'cpf', 'phonenumber']
    if (verifyEmailAlreadyInUse) {
        throw new EmailAlreadyInUse(body.email)
    }
    for (const field in requiredFields) {
        if (!body[requiredFields[field]]) {
            throw new MissingParamError(requiredFields[field])
        }
    }
    console.log(user)
    body.vendedor_id = user.id
    console.log(body)
    const cliente = await create(body)
    return cliente;
}