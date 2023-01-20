const createGroupRouter = require('./create-group-router')
const updateGroupRouter = require('./update-group-router')
const findGroupByIdRouter = require('./find-group-by-id-router')
const listGroupsRouter = require('./list-groups-router')

module.exports = {
    createGroupRouter,
    updateGroupRouter,
    findGroupByIdRouter,
    listGroupsRouter
}