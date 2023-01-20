const { Negociacoes, Clientes, User } = require('../../models/')
const { NotFoundError } = require('../../utils/helpers/errors')
const QuerySequelize = require('../helpers/query-builder')

const create = async (data) => {
    const _Negociacoes = await Negociacoes.create(data)
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
    const Negociacoess = await Negociacoes.findAll(queryBuilder.getQuery())
    return Negociacoess
}
const findById = async (id) => {
    const queryBuilder = new QuerySequelize()
    queryBuilder
        .setWhere({ id: id })
        .setIncludes([{ model: Clientes, as: 'Cliente' }, { model: User, as: 'Vendedor' }])
        .setIncludesAttributesExclude(Clientes, ['vendedor_id'])
        .setIncludesAttributesExclude(User, ['password', 'token', 'role'])

    const _Negociacoes = await Negociacoes.findOne(queryBuilder.getQuery())
    return _Negociacoes
}

const updateNegociacao = async (id, body) => {
    const _Negociacoes = await Negociacoes.update({ ...body }, {
        where: {
            id
        }
    })
    return _Negociacoes
}

module.exports = {
    create,
    findAll,
    findByEmail,
    findById,
    updateNegociacao,
}