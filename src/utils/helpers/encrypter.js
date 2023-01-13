const bcrypt = require('bcrypt')
const { MissingParamError } = require('./errors')

const salts = 12
const encrypt = async (password) => {
    if (!password) {
        throw new MissingParamError('password')
    }
    const encrypted = await bcrypt.hash(password.toString(), salts)
    return encrypted
}
const compare = async (password, hash) => {
    if (password) {
        throw new MissingParamError('password')
    }
    if (hash) {
        throw new MissingParamError('hash')
    }
    const isValid = await bcrypt.compare(password.toString(), hash)
    return isValid
}

module.exports = {
    encrypt,
    compare
}