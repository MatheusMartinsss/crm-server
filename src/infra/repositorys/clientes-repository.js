const { Clientes} = require('../../models/')
const { NotFoundError } = require('../../utils/helpers/errors')

const create = async (data) => {
    const _Clientes = await Clientes.create(data)
    return _Clientes
}
const findByEmail = async (email) => {
    const _Clientes = await Clientes.findOne({
        where: {
            email: email
        }
    })
    return _Clientes
}
const findAll = async () => {
    const Clientess = await Clientes.findAll({
        attributes: { exclude: ['password'] },
        order: [['createdAt', 'DESC']]
    })
    return Clientess
}
const findById = async (id) => {
    const _Clientes = await Clientes.findOne({
        where: {
            id
        }
    })
    return _Clientes
}
const updateClientes = async (id, body) => {
    const _Clientes = await Clientes.findOne({
        where: {
            id
        }
    })
    if (!_Clientes) throw new NotFoundError('usuario não encontrado!')
    await _Clientes.update({ ...body }).then((response) => {
        return true
    }).catch((error) => {
        return false
    })
}

module.exports = {
    create,
    findAll,
    findByEmail,
    findById,
    updateClientes
}