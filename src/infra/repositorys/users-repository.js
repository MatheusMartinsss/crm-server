const { User } = require('../../models/')
const { NotFoundError } = require('../../utils/helpers/errors')

const create = async (data) => {
    const _user = await User.create(data)
    return _user
}
const findByEmail = async (email) => {
    const _user = await User.findOne({
        where: {
            email: email
        }
    })
    return _user
}
const findAll = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['createdAt', 'DESC']]
    })
    return users
}
const findById = async (id) => {
    const _user = await User.findOne({
        where: {
            id
        }
    })
    return _user
}
const updateUser = async (id, body) => {
    const _user = await User.findOne({
        where: {
            id
        }
    })
    if (!_user) throw new NotFoundError('usuario não encontrado!')
    await _user.update({ ...body }).then((response) => {
        return true
    }).catch((error) => {
        return false
    })
}

module.exports = {
    create,
    findAll,
    findByEmail,
    findById,
    updateUser
}