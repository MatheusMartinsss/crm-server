const findUserRouter = require('../user/find-user-router')
const authUserRouter = require('../user/auth-user-router')
const listUsersRouter = require('../user/list-users-router')
const updateUserRouter = require('../user/update-user-router')
const createUserRouter = require('../user/create-user-router')

module.exports = {
    findUserRouter,
    authUserRouter,
    listUsersRouter,
    updateUserRouter,
    createUserRouter
}