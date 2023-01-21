const createGroupRouter = require('./create-group-router')
const updateGroupRouter = require('./update-group-router')
const findGroupByIdRouter = require('./find-group-by-id-router')
const listGroupsRouter = require('./list-groups-router')
const listNegociacoesByGroupRouter = require('./list-negociacoes-by-group-router')
const listGroupNegociacoesRouter = require('./list-group-negociacoes-router')

module.exports = {
    createGroupRouter,
    updateGroupRouter,
    findGroupByIdRouter,
    listGroupsRouter,
    listNegociacoesByGroupRouter,
    listGroupNegociacoesRouter
}