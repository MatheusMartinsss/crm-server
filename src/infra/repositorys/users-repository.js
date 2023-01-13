const { user } = require('../../models/')

const create = async (data) => {
    const _user = await user.create(data)
    return _user
}
const findAll = async () => {
    const users = await user.findAll()
    return users
}


module.exports = {
    create,
    findAll
}