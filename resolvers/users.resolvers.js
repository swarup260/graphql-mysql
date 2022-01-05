const { getUser,register,login } = require('../controllers/users.controller')
module.exports = {
  Query: {
    getUser
  },
  Mutation:{
    register,
    login
  }
}