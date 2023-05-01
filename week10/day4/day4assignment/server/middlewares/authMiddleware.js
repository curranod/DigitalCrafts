const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
    const header = req.headers['authorization']
    if(header) {
        const token = header.split(' ')[1]
        const decoded = jwt.verify(token, 'SECRETKEY')
        const username = decoded.username
        const authUser = users.find(user => user.username == username)
        if(authUser) {
            next()
        } else {
            res.json({success: false, message: "Unable to authenticate"})
        }
    } else {
        res.json({success: false, message: "Required authorization headers are missing"})
    }

}

module.exports = authenticate