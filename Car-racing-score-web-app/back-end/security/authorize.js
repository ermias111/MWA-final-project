const jwt = require('jsonwebtoken');


function verifyUserToken(req, res, next){
    let token = req.headers.authorization;
    if (!token) return res.status(401).send("Access Denied / Unauthorized request");

    try {
        token = token.split(' ')[2] // Remove Bearer from string
        if (token === 'null' || !token) return res.status(401).send('Unauthorized request');

        let verifiedUser = jwt.verify(token, process.env['TOKEN_SECRET']);  
        if (!verifiedUser) return res.status(401).send('Unauthorized request')
        console.log(verifiedUser)
        req.user = verifiedUser; // user_id & role
        return next();

    } catch (error) {
        res.status(400).send("Invalid Token");
    }

}


async function isUser(req, res, next) {
    if (req.user.role === 'user') {
        return next();
    }
    return res.status(401).send("Unauthorized!");   
}


async function isAdmin(req, res, next) {
    console.log(req.user.role);
    if (req.user.role == "admin") {
        return next();
    }
    return res.status(401).send("Unauthorized!");

}

module.exports = { verifyUserToken, isUser, isAdmin }