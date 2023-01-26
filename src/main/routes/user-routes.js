const { createUserRouter, listUsersRouter, findUserRouter, updateUserRouter, authUserRouter, revalidateUserRouter } = require('../../presentation/user/index')
const authMiddleware = require("../middlewares/auth-middleware")
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
module.exports = router => {
    router.post('/user', validate(authMiddleware), adapt(createUserRouter))
    router.get('/users', validate(authMiddleware), adapt(listUsersRouter))
    router.get('/user/:id', validate(authMiddleware), adapt(findUserRouter))
    router.put('/user/:id', validate(authMiddleware), adapt(updateUserRouter))
    router.post('/auth', adapt(authUserRouter))
    router.post('/refreshtoken', adapt(revalidateUserRouter))
}