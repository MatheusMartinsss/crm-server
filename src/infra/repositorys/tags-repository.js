const { Tags } = require('../../models')
const QuerySequelize = require('../helpers/query-builder')

const create = async (body) => {
    const tag = await Tags.create({ ...body })
    return tag;
}

const findByName = async (name) => {
    const tag = await Tags.findOne({
        where: {
            name
        }
    })
    return tag
}

const findTagById = async (id) => {
    const tag = await Tags.findOne({
        where: {
            id
        }
    })
    return tag
}

const findAll = async () => {
    const tags = await Tags.findAll({})
    return tags
}

const updateTag = async (id, body) => {
    const tag = await Tags.update({ ...body }, {
        where: {
            id
        }
    })
    return tag
}

module.exports = {
    create,
    findByName,
    findTagById,
    findAll,
    updateTag
}