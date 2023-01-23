const createNegociacaoRouter = require('./create-negociacao-router')
const listNegociacoesRouter = require('./list-negociacoes-router')
const findNegociacaoRouter = require('./find-negociacao-router')
const removeNegociacaoRouter = require('./remove-negociacao-router')
const updateNegociacaoRouter = require('./update-negociacao-router')
const addTagsToNegociacaoRouter = require('./add-tags-to-negociacao-router')
module.exports = {
    createNegociacaoRouter,
    listNegociacoesRouter,
    findNegociacaoRouter,
    removeNegociacaoRouter,
    updateNegociacaoRouter,
    addTagsToNegociacaoRouter
}