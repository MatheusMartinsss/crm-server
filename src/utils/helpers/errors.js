const { emailAlreadyInUse, serverError, missingParamError, notFound } = require('./errors-helper')
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
class MissingParamError extends Error{
    constructor(arg){
        super(`O parametro ${arg} não pode está vazio! `)
        this.name = missingParamError
    }
}
class NotFoundError extends Error{
    constructor(arg){
        super(`${arg} não encontrado!`)
        this.name = notFound
    }
}
module.exports = {
    EmailAlreadyInUse,
    ServerError,
    MissingParamError,
    NotFoundError
}