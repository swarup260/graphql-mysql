const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
/* MANUAL APPROACH: Update this file manually with each resolver file */
// import userResolvers from "./user.resolvers";
// import welcomeResolvers from "./welcome.resolvers";
// const resolversArray = [userResolvers, welcomeResolvers];

/*  AUTOMATED APPROACH: Put your resolvers anywhere 
    with ".resolvers.[js/ts]" naming convention */
module.exports = loadFilesSync(path.join(__dirname, './**/*.resolvers.*'))
