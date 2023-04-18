const { Clientes, Location } = require('../../models/')
const QuerySequelize = require('../helpers/query-builder')
const create = async (data) => {
    const _cliente = await Clientes.create({
        ...data,
    })
    if (data.location) {
        console.log(data.location)
        await _cliente.createLocation(data.location)
    }
    return _cliente
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
    queryBuilder
        .setIncludes([{ model: Location, as: 'location' }])

    const Clientess = await Clientes.findAll(queryBuilder.getQuery())

    return Clientess
}
const findById = async (id) => {

    const queryBuilder = new QuerySequelize()

    queryBuilder
        .setIncludes([{ model: Location, as: 'location' }])
        .setWhere({ id: id })

    const _Clientes = await Clientes.findOne(queryBuilder.getQuery())

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
    const cliente = await Clientes.findOne({
        where: { id }
    })

    await cliente.update(body)

    if (body.location) {
        const location = await cliente.getLocation()
        if (!location) {
            await cliente.createLocation(body.location)
        } else {
            await location.update(body.location)
        }
    }

    return cliente
}

module.exports = {
    create,
    findAll,
    findByEmail,
    findById,
    findByCpf,
    updateCliente,
}