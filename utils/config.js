const { resolve } = require('path')
const { config } = require('dotenv')

module.exports = config({ path: resolve(__dirname, "../.env") })