const { MissingParamError } = require("./errors")
const jwt = require('jsonwebtoken')

const generate = (id, name, role) => {
    if (!id) throw new MissingParamError('id')
    const token = jwt.sign({ id, name, role }, process.env.TOKEN_SECRET_KEY)
    return token
}

const validate = (token) => {
    if (!token) throw new MissingParamError('token')
    const isValid = jwt.verify(token, process.env.TOKEN_SECRET_KEY)
    return isValid
}

const decode = (token) =>{
    if(!token) throw new MissingParamError('token')
    const decoded = jwt.decode(token)
    return decoded
}

module.exports = {
    generate,
    validate,
    decode
}