import jwt from 'jsonwebtoken'

function authenticated(req, res, next) { 
    try {
        const token = req.headers.authorization.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET)
        next()
    }
    catch(err) {
        res.status(401).json({logout: true})
    }
}

export { authenticated }