const { findAll } = require('../../infra/repositorys/users-repository')
module.exports = createUserRouter = async (req, res) => {
    const users = await findAll()
    return res.status(201).send(users)
}