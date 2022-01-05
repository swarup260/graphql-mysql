const { getPost ,getPosts,searchPosts,addPost,updatePost,deletePost } = require('../controllers/posts.controller')
module.exports = {
  Query: {
    getPost,
    getPosts,
    searchPosts
  },
  Mutation:{
    addPost,
    updatePost,
    deletePost
  }
}