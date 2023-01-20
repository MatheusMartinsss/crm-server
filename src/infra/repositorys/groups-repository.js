const { Groups, Negociacoes } = require('../../models')
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
const listNegociacoesByGroups = async () => {
    const queryBuilder = new QuerySequelize()
    queryBuilder
        .setIncludes([{ model: Negociacoes, as: 'Negociacoes' }])

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