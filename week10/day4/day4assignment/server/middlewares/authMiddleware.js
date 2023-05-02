const jwt = require('jsonwebtoken');
const User = require('../schemas/User')

async function authenticate (req, res, next) {
    const header = req.headers['authorization']
    if(header) {
        const token = header.split(' ')[1]
        const decoded = jwt.verify(token, 'SECRETKEY')
        const username = decoded.username
        const authUser = await User.findOne({username: username})
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