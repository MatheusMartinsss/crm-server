const { emailAlreadyInUse, serverError } = require('./errors-helper')
class EmailAlreadyInUse extends Error {
    constructor(arg) {
        super(`Email ${arg} já existe na base de dados!.`)
        this.name = emailAlreadyInUse
    }
}
class ServerError extends Error{
    constructor(){
        super('Ocorreu um erro inesperado, entre em contato com o suporte!')
        this.name = serverError
    }
}

module.exports = {
    EmailAlreadyInUse,
    ServerError
}