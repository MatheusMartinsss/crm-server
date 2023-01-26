const { MissingParamError } = require("../../../utils/helpers/errors")
const { validate } = require("../../../utils/helpers/token-generator")

module.exports = revalidateUserUseCase = async (token) => {
    if (!token)
        throw new MissingParamError('token')
    return validate(token)
}