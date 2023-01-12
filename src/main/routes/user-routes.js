const CreateUserRouter = require('../../presentation/user/create-user-router')
module.exports = router => {
    router.get('/users', CreateUserRouter)
}