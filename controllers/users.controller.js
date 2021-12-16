const userModel = require('../models/users.model')
const response = require('../models/response.model')
const jwt = require('jsonwebtoken')

class UserController {
    
    constructor(){
        this.model = userModel
    }

    getUser(_,{id}){
        try {
            const result = await this.model.getUser({id})
            return {
                status: true,
                code: 1001,
                message: error.message
            }
        } catch (error) {
            return {
                status: false,
                code: 1001,
                message: error.message
            }
        }
    }

    updateUser(){
        try {
            
        } catch (error) {
            return {
                status: false,
                code: 1001,
                message: error.message
            }
        }
    }

    createUser(){
        try {
            
        } catch (error) {
            return {
                status: false,
                code: 1001,
                message: error.message
            }
        }
    }

    deleteUser(){
        try {
            
        } catch (error) {
            return {
                status: false,
                code: 1001,
                message: error.message
            }
        }
    }

    getToken(){
        try {
            
        } catch (error) {
            return {
                status: false,
                code: 1001,
                message: error.message
            }
        }
    }


}

module.exports = new UserController()