const { user } = require('../../models/')

const create = async (data) => {
    const _user = await user.create(data)
    return _user
}
const findByEmail = async (email) => {
    const _user = await user.findOne({
        where: {
            email: email
        }
    })
    return _user
}
const findAll = async () => {
    const users = await user.findAll()
    return users
}


module.exports = {
    create,
    findAll,
    findByEmail
}