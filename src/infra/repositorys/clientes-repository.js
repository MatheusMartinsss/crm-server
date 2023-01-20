const { Clientes } = require('../../models/')
const { NotFoundError } = require('../../utils/helpers/errors')
const QuerySequelize = require('../helpers/query-builder')
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
const findAll = async (user, query) => {
    const queryBuilder = new QuerySequelize()
    if (user.role != 'admin') {
        queryBuilder.setWhere({ vendedor_id: user.id })
    }

    const Clientess = await Clientes.findAll(queryBuilder.getQuery())
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
const findByCpf = async (cpf) => {
    const _cliente = await Clientes.findOne({
        where: {
            cpf
        }
    })
    return _cliente
}
const updateCliente = async (id, body) => {
    const _cliente = await Clientes.update({ ...body }, {
        where: {
            id
        }
    })
    return _cliente
}

module.exports = {
    create,
    findAll,
    findByEmail,
    findById,
    findByCpf,
    updateCliente,
}