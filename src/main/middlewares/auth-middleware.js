const httpResponse = require("../../utils/helpers/http-helper")
const { validate } = require("../../utils/helpers/token-generator")


module.exports = authMiddleware = (body) => {
    if (!body.acessToken) return httpResponse.badRequest()
    const isValid = validate(body.acessToken)
    if (!isValid) return httpResponse.badRequest()
    return httpResponse.ok()
}