const CreateUserRouter = require('../../presentation/user/create-user-router')
const UpdateUserRouter = require('../../presentation/user/update-user-router')
const ListUserRouter = require('../../presentation/user/list-users-router')
const FindUserRouter = require('../../presentation/user/find-user-router')
const { adapt } = require('../middlewares/express-router-adapter')
module.exports = router => {
    router.post('/user', adapt(CreateUserRouter))
    router.get('/users', adapt(ListUserRouter))
    router.get('/user/:id', adapt(FindUserRouter))
    router.put('/user/:id', adapt(UpdateUserRouter))
}