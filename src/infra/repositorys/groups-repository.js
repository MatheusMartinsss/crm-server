const { Groups } = require('../../models')

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

module.exports = {
    create,
    findByName,
    findGroupById,
    updateGroup
}