const createNegociacaoRouter = require('./create-negociacao-router')
const listNegociacoesRouter = require('./list-negociacoes-router')
const findNegociacaoRouter = require('./find-negociacao-router')
const removeNegociacaoRouter = require('./remove-negociacao-router')

module.exports = {
    createNegociacaoRouter,
    listNegociacoesRouter,
    findNegociacaoRouter,
    removeNegociacaoRouter
}