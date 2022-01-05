const postModel = require('../models/posts.model')
const checkAuth = require("../middlewares/checkauth.middleware")
const ValidationError = require('../errors/validation.error')
const ApplicationError = require('../errors/application.error')

class PostController {

    async addPost(_, { input }, { token }) {
        try {
            const user = await checkAuth(token)

            // eslint-disable-next-line no-prototype-builtins
            if (!input.hasOwnProperty("status")) {
                input.status = false
            }

            return await postModel.createPost({
                ...input,
                author: user.id
            })
        } catch (error) {
            throw new ApplicationError(error)
        }
    }

    async updatePost(_, { id, input }, { token }) {
        try {

            await checkAuth(token)

            return await postModel.updatePost({ conditon: { id }, update: input })

        } catch (error) {
            throw new ApplicationError(error)
        }
    }

    async deletePost(_, { id }, { token }) {
        try {

            const user = await checkAuth(token)

            const post = await postModel.getPost({ id })

            if (post.author != user.id) {
                throw new ValidationError(1235, 'Fail Unauthorised Access')
            }

            return await postModel.deletePost({ id })

        } catch (error) {
            throw new ApplicationError(error)
        }
    }

    async getPost(_, { id }, { token }) {
        try {
            const user = await checkAuth(token)

            return postModel.getPost({ id, author: user.id })

        } catch (error) {
            throw new ApplicationError(error)
        }
    }

    async getPosts(_, { limit, offset }, { token }) {
        try {

            const user = await checkAuth(token)

            const condition = {
                author: user.id
            }

            return {
                posts: await postModel.getPosts({ condition, limit, offset }),
                pageInfo: await postModel.getPostsCount({ condition })
            }


        } catch (error) {
            throw new ApplicationError(error)
        }
    }

    async searchPosts(_, fields, { token }) {
        try {
            const user = await checkAuth(token)

            const condition = {
                author: user.id
            }
            const likeCondition = {}

            if (fields.name) {
                condition.name = fields.name
            }
            // eslint-disable-next-line no-prototype-builtins
            if (fields.hasOwnProperty("status")) {
                condition.status = fields.status
            }

            if (fields.nameStartWith) {
                likeCondition.nameStartWith = fields.nameStartWith
            }
            if (fields.nameEndWith) {
                likeCondition.nameEndWith = fields.nameEndWith
            }


            return {
                posts: await postModel.searchPosts({ condition, likeCondition, limit: fields.limit, offset: fields.offset }),
                pageInfo: await postModel.searchPosts({ condition, likeCondition })
            }
        } catch (error) {
            throw new ApplicationError(error)
        }
    }


}

module.exports = new PostController()