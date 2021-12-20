const ValidationError = require('../errors/validation.error');
const { verifyToken,userExists } = require('../utils/helpers')

// eslint-disable-next-line no-unused-vars
module.exports = async (resolve, parent, args, ctx, info) => {
    try {
        console.log(ctx);
        const token =  ctx.request.get('Authorization').split(" ")[1]
        const decoded = verifyToken(token);
        const user = await userExists(decoded);
        ctx.request.set('userData',user)
        resolve();
    } catch (error) {
        throw new ValidationError(1235,'Fail Unauthorised Access')
    }

}