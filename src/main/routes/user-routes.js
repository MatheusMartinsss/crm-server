const CreateUserRouter = require('../../presentation/user/create-user-router')
const { adapt } = require('../middlewares/express-router-adapter')
module.exports = router => {
    router.post('/user', adapt(CreateUserRouter))
}