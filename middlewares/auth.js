const userUtils = require('../utils/userUtils')
const authMiddleware = (req,res,next)=>{
    console.log('Cookies: ', req.cookies)
    const token = req.cookies.token
    const user = userUtils.validateToken(token)
    console.log('user', user)
    req.user = user
    next()
    
}


module.exports= authMiddleware