// dependencies
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

// server configuration 
const PORT = process.env.PORT || 3000

const options = {
  port : PORT
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

/* SERVER STARTING */
server.listen(options).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

