const httpResponse = require("../../utils/helpers/http-helper")
const { validate, decode } = require("../../utils/helpers/token-generator")


module.exports = authMiddleware = (body) => {
    if (!body.accesToken) return httpResponse.badRequest()
    const isValid = validate(body.accesToken)
    if (!isValid) return httpResponse.badRequest()
    const decoded = decode(body.accesToken)
    return httpResponse.ok({ user:decoded })
}