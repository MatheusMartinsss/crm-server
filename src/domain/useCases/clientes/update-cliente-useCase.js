const { updateCliente, findById, findByEmail, findByCpf } = require('../../../infra/repositorys/clientes-repository')
const { MissingParamError, NotFoundError, Unauthorized, EmailAlreadyInUse, FieldAlreadyInUse } = require('../../../utils/helpers/errors')
module.exports = updateClienteUseCase = async (user, id, body) => {
    if (!id)
        throw new MissingParamError('id')

    const cliente = await findById(id)

    if (!cliente)
        throw new NotFoundError('cliente não encontrado!')

    if (user.role !== 'admin' && cliente.vendedor_id !== user.id)
        throw new Unauthorized()

    if (body.email) {
        const verifyEmailAlreadyExists = await findByEmail(body.email)
        if (verifyEmailAlreadyExists) throw new EmailAlreadyInUse(body.email)
    }
    if (body.cpf) {
        const verifyCpfAlreadyInUse = await findByCpf(body.cpf)
        if (verifyCpfAlreadyInUse) throw new FieldAlreadyInUse('cpf', body.cpf)
    }
    const updated = await updateCliente(id, body)
    return updated
}