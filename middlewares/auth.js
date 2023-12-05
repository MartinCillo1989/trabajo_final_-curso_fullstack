const authMiddleware = (req,res,next)=>{
    const token = req.cook
    console.log('Cookies: ', req.cookies)
    req.user = 'pepe'
    next()
    
}


module.exports= authMiddleware