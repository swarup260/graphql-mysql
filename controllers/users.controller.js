const userModel = require('../models/users.model')
const responseModel = require('../models/response.model')
const { encryptPassword, decryptPassword,getToken } = require('../utils/helpers')
const ValidationError = require('../errors/validation.error')

class UserController {
    
    async getUser(_, { email }) {
        try {
            const result = await userModel.getUser({ email })

            return responseModel
                .initialObject()
                .setMessage('success')
                .setData(result)
                .getResponseObject()

        } catch (error) {
            return responseModel
                .initialObject()
                .setStatus(false)
                .setMessage(error.message)
                .getResponseObject()
        }
    }

    async register(_, { name, email, password }) {
        try {

            // encrypt password 
            password = await encryptPassword(password)

            const result = await userModel.createUser({
                name,
                email,
                password
            })
            if (result) {

                const token = getToken({email: result.email})

                return responseModel
                    .initialObject()
                    .setStatus(true)
                    .setMessage('success')
                    .setCustomValue('token', token)
                    .getResponseObject()
            }
        } catch (error) {
            return responseModel
                .initialObject()
                .setStatus(false)
                .setMessage(error.message)
                .getResponseObject()
        }
    }

    async login(_, { email, password }) {
        try {
            const result = await userModel.getUser({ email: email })

            if (!await decryptPassword(password, result.password)) {
                throw new ValidationError(1224, 'Fail Incorrect Password')
            }

            const token = getToken({email: result.email})

            return responseModel
                .initialObject()
                .setStatus(true)
                .setMessage('success')
                .setCustomValue('token', token)
                .getResponseObject()


        } catch (error) {
            return responseModel
                .initialObject()
                .setStatus(false)
                .setMessage(error.message)
                .getResponseObject()
        }
    }

}

module.exports = new UserController()