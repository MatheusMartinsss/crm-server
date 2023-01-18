const { Clientes } = require('../../models/')
const { NotFoundError } = require('../../utils/helpers/errors')
const QuerySequelize = require('../helpers/query-builder')
const queryBuilder = new QuerySequelize()
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
    updateClientes,
}