const db = require('../lib/db')
const DatabaseError = require('../errors/database.error')

class PostModel {

    constructor() {
        this.TABLE_NAME = 'posts'
        this.LIMIT = 10
        this.OFFSET = 0
    }

    async createPost(newObject) {
        const result = await db(this.TABLE_NAME).returning('id').insert(newObject)
        if (result) {
            return result[0]
        }

        throw new DatabaseError(1001, 'Fail to Insert new user')

    }

    async updatePost({
        condition,
        update
    }) {
        const result = await db(this.TABLE_NAME).where(condition).update(update).returning('id')
        if (result) {
            return result[0]
        }
        throw new DatabaseError(1001, 'Fail Update')

    }

    async deletePost({
        condition
    }) {
        const result = await db(this.TABLE_NAME).where(condition).del()
        if (result) {
            return result[0]
        }
        throw new DatabaseError(1001, 'Fail delete')
    }

    async getPost(condition) {
        const result = await db(this.TABLE_NAME).where(condition)
        if (result.length == 0) {
            return []
        }
        return result[0]
    }

    async getPosts({ condition, likeCondition, limit, offset }) {
        const builderQuery = db(this.TABLE_NAME)
            .where(condition)
            .limit(limit || this.LIMIT)
            .offset(offset || this.OFFSET)

        if (likeCondition && likeCondition.nameStartWith) {
            builderQuery.where('name', 'like', `%${likeCondition.nameStartWith}`)
        }

        if (likeCondition && likeCondition.nameEndWith) {
            builderQuery.where('name', 'like', `${likeCondition.nameEndWith}%`)
        }

        const result = await builderQuery
        if (result.length == 0) {
            return []
        }

        if (result.length == 0) {
            return []
        }
        return result
    }

    async getPostsCount({ condition, likeCondition }) {

        const builderQuery = db(this.TABLE_NAME)
            .where(condition)

        if (likeCondition && likeCondition.nameStartWith) {
            builderQuery.where('name', 'like', `%${likeCondition.nameStartWith}`)
        }

        if (likeCondition && likeCondition.nameEndWith) {
            builderQuery.where('name', 'like', `${likeCondition.nameEndWith}%`)
        }


        const result = await builderQuery.count('id', { as: 'counts' })
        if (result.length == 0) {
            return 0
        }
        return result[0].counts
    }



}

module.exports = new PostModel()