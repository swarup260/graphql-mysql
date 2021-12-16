const db = require('../utils/db')

class UserModel {
    
    constructor(){
        this.TABLE_NAME = 'users'
    }

    /**
     * 
     * @param {Object} condition 
     * @param {Number} limit 
     */
    async getUser(condition , limit = null){
        const query = db(this.TABLE_NAME).where(condition)
        if (limit) {
            query.limit(limit)
        }
        return await query
    }
}

module.exports = new UserModel()