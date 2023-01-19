const { Negociacoes } = require('../../models/')
const { NotFoundError } = require('../../utils/helpers/errors')
const QuerySequelize = require('../helpers/query-builder')
const queryBuilder = new QuerySequelize()
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
    if (user.role != 'admin') {
        queryBuilder.setWhere({ vendedor_id: user.id })
    }

    const Negociacoess = await Negociacoes.findAll(queryBuilder.getQuery())
    return Negociacoess
}
const findById = async (id) => {
    const _Negociacoes = await Negociacoes.findOne({
        where: {
            id
        }
    })
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