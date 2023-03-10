const { Sequelize } = require('sequelize');
const { Groups, Negociacoes, Clientes, User, Tags, sequelize } = require('../../models')
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
        .addAttributes(['name', 'id', 'description', 'createdAt', 'updatedAt',
            [Sequelize.fn('SUM', Sequelize.literal('(SELECT SUM(value) FROM "negociacoes" WHERE "negociacoes"."group_id" = "Groups"."id")')), 'valueTotal']])
        .addGroup(['Groups.id', 'Negociacoes.id', 'Negociacoes->Cliente.id', 'Negociacoes->Vendedor.id', 'Negociacoes->Tags.id'])
        .setIncludes([{ model: Negociacoes, as: 'Negociacoes' }])
        //   .setIncludesAttributesInclude(Negociacoes, [])
        .setIncludesAssociations(Negociacoes, { model: Clientes, as: 'Cliente' })
        .setIncludesAssociationsAttributes(Negociacoes, Clientes, ['name', 'cpf'])
        .setIncludesAssociations(Negociacoes, { model: User, as: 'Vendedor' })
        .setIncludesAssociationsAttributes(Negociacoes, User, ['name'])
        .setIncludesAssociations(Negociacoes, {
            model: Tags, as: 'Tags', through: {
                attributes: []
            }
        })
        .setIncludesAssociationsAttributes(Negociacoes, Tags, ['id', 'name', 'color'])
    if (id) {
        queryBuilder.setWhere({
            id: id
        })
    }
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