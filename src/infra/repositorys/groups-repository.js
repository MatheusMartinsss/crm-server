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

module.exports = {
    create,
    findByName
}