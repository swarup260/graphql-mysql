// dependencies
const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

// config
const PORT = process.env.PORT || 3000
const options = { port: PORT }

/* middleware */
const checkAuth = require('./middlewares/checkauth.middleware')

const permissions = {
  Query: {
    secured: checkAuth,
  },
  getUser: checkAuth,
}



const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({ ...req }),
  middleware: [permissions],
})

/* SERVER STARTING */
server
  .start(options, () => console.log(`Server is running on localhost:${PORT}`))
  .catch((error) => console.error('connection Error', error)) 
