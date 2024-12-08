/* eslint-disable dot-notation */

require('dotenv').config();
const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['Authorization'];
    if (!bearerHeader) {
        res.status(401).send('No token provided');
        return;
    }
    const token = bearerHeader.split(' ')[0];
    try {
        jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        next();
    } catch (err) {
        res.status(403).json('Invalid token');
    }
}

module.exports = verifyToken;
