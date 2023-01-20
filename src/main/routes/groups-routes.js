const { createGroupRouter, updateGroupRouter, findGroupByIdRouter } = require('../../presentation/groups')
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
const authMiddleware = require('../middlewares/auth-middleware')
module.exports = router => {
    router.post('/group', validate(authMiddleware), adapt(createGroupRouter))
    router.put('/group/:id', validate(authMiddleware), adapt(updateGroupRouter))
    router.get('/group/:id', validate(authMiddleware), adapt(findGroupByIdRouter))
}