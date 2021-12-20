class Response {
    
    initialObject(){
        this.responseObject = {
            status: true,
            code: 100,
            message: 'Success',
            data: [],
        }
        return this
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
    setMessage(message) {
        this.responseObject.message = message
        return this
    }
    /**
     * 
     * @returns String
     */
    getMessage() {
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

    setCustomValue(key,val){
        this.responseObject[key] = val
        return this
    }


}


module.exports = new Response()