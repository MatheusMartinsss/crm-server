const { user } = require('../../models/')

const findAll = async () => {
    const users = await user.findAll()
    return users
}


module.exports = {
    findAll
}