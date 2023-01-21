const { Groups, Negociacoes, Clientes, User } = require('../../models')
const QuerySequelize = require('../helpers/query-builder')
const create = async (body) => {
    const group = await Groups.create({ ...body })
    return group;
}

const findByName = async (name) => {
    const group = await Groups.findOne({
        where: {
            name
        }
    })
    return group
}

const findGroupById = async (id) => {
    const group = await Groups.findOne({
        where: {
            id
        }
    })
    return group
}

const updateGroup = async (id, body) => {
    const group = await Groups.update({ ...body }, {
        where: {
            id
        }
    })
    return group
}
const listNegociacoesByGroups = async (id) => {
    const queryBuilder = new QuerySequelize()
    queryBuilder
        .setIncludes([{ model: Negociacoes, as: 'Negociacoes' }])
        .setIncludesAssociations(Negociacoes, { model: Clientes, as: 'Cliente' })
        .setIncludesAssociationsAttributes(Negociacoes, Clientes, ['name', 'cpf'])
        .setIncludesAssociations(Negociacoes, { model: User, as: 'Vendedor' })
        .setIncludesAssociationsAttributes(Negociacoes, User, ['name'])

    if (id) {
        queryBuilder.setWhere({
            id: id
        })
    }
    console.log(queryBuilder.getQuery())
    const groups = await Groups.findAll(queryBuilder.getQuery())
    return groups
}

const findAll = async (query) => {
    const groups = await Groups.findAll({})
    return groups
}

module.exports = {
    create,
    findByName,
    findGroupById,
    updateGroup,
    findAll,
    listNegociacoesByGroups
}