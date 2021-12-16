
module.exports = class Response {
    constructor() {
        this.responseObject = {
            status: true,
            code: 100,
            message: 'Success',
            data: [],
        }
    }
    /**
     * 
     * @param {Boolean} status 
     * @returns 
     */
    setStatus(status) {
        this.responseObject.status = status
        return this
    }
    /**
     * 
     * @returns Boolean
     */
    getStatus() {
        return this.responseObject.status
    }
    /**
     * 
     * @param {String} message 
     * @returns 
     */
    setSuccessMesage(message) {
        this.responseObject.message = message
        return this
    }
    /**
     * 
     * @returns String
     */
    getSuccessMesage() {
        return this.responseObject.message
    }
    /**
     * 
     * @param {Number} code 
     * @returns 
     */
    setCode(code) {
        this.responseObject.code = code
        return this
    }
    /**
     * 
     * @returns Number
     */
    getCode() {
        return this.responseObject.code
    }
    /**
     * 
     * @param {*} data 
     * @returns 
     */
    setData(data) {
        this.responseObject.data = data
        return this
    }
    /**
     * 
     * @returns any
     */
    getData() {
        return this.responseObject.data
    }
    /**
     * 
     * @param {Object} param
     * @param {Boolean} param.status
     * @param {Number} param.code
     * @param {String} param.message
     * @param {any} param.data
     */
    setResponseObject({
        status,
        code,
        message,
        data
    }) {
        this.responseObject.status = status
        this.responseObject.code = code
        this.responseObject.message = message
        this.responseObject.data = data
    }
    /**
     * 
     * @returns Object
     */
    getResponseObject() {
        return this.responseObject
    }


}
