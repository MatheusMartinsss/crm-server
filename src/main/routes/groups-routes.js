const { createGroupRouter, updateGroupRouter } = require('../../presentation/groups')
const { adapt } = require('../middlewares/express-router-adapter')
const { validate } = require('../middlewares/express-middleware-adapter')
module.exports = router => {
    router.post('/group', validate(authMiddleware), adapt(createGroupRouter))
    router.put('/group/:id', validate(authMiddleware), adapt(updateGroupRouter))

}