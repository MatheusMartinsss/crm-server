const { Negociacoes, Clientes, User, Tags, Groups } = require('../../models/')
const QuerySequelize = require('../helpers/query-builder')

const create = async (data) => {
    const _Negociacoes = await Negociacoes.create(data)
    if (data.Cliente) {
        await _Negociacoes.setCliente(data.Cliente.id)
    }
    return _Negociacoes
}
const findByEmail = async (email) => {
    const _Negociacoes = await Negociacoes.findOne({
        where: {
            email: email
        }
    })
    return _Negociacoes
}
const findAll = async (user, query) => {
    const queryBuilder = new QuerySequelize()
    if (user.role != 'admin') {
        queryBuilder.setWhere({ vendedor_id: user.id })
    }
    if (query.cliente_id) {
        queryBuilder.setWhere({ cliente_id: query.cliente_id })
    }
    if (query.vendedor_id) {
        queryBuilder.setWhere({ vendedor_id: user.id })
    }
    queryBuilder
        .setIncludes([{ model: Clientes, as: 'Cliente' }, { model: User, as: 'Vendedor' }, {
            model: Tags, as: 'Tag',
        }, { model: Groups, as: 'Group' }])
        .setIncludesAttributesInclude(Clientes, ['id', 'name', 'lastname', 'cpf'])
        .setIncludesAttributesInclude(User, ['id', 'name'])
        .setIncludesAttributesInclude(Tags, ['name', 'color'])
        .setIncludesAttributesInclude(Groups, ['name'])
    const Negociacoess = await Negociacoes.findAll(queryBuilder.getQuery())
    return Negociacoess
}
const findById = async (id) => {
    const queryBuilder = new QuerySequelize()
    queryBuilder
        .setWhere({ id: id })
        .setIncludes([
            {
                model: Clientes,
                as: 'Cliente'
            },
            {
                model: User,
                as: 'Vendedor'
            },
            {
                model: Tags,
                as: 'Tag',

            },
            {
                model: Groups,
                as: 'Group',

            }
        ])
        .setIncludesAttributesExclude(Clientes, ['vendedor_id'])
        .setIncludesAttributesExclude(User, ['password', 'token', 'role'])
        .setIncludesAttributesInclude(Groups, ['name', 'id'])

    const _Negociacoes = await Negociacoes.findOne(queryBuilder.getQuery())
    return _Negociacoes
}

const updateNegociacao = async (negociacao, body) => {
    await negociacao.update(body)
    if (body.Cliente) {
        await negociacao.setCliente(body.Cliente.id)
    }
    return
}
const removeNegociacao = async (id) => {
    const negociacao = await Negociacoes.destroy({
        where: {
            id
        }
    })
    return negociacao
}

const addTag = async (negociacao, tag) => {
    const _negociacao = await negociacao.setTag(tag)
    return _negociacao

}
const removeTag = async (negociacao, tags) => {
    const _negociacao = await negociacao.removeTag(tags)
    return _negociacao
}
const updateTags = async (negociacao, tag) => {
    const _negociacao = await negociacao.setTag(tag)
    return _negociacao
}
module.exports = {
    create,
    findAll,
    findByEmail,
    findById,
    updateNegociacao,
    removeNegociacao,
    addTag,
    removeTag,
    updateTags
}