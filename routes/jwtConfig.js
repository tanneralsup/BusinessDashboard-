const jwt = require('jsonwebtoken');
const models = require('../models');
// const models = require('../models');

const secret = 'mysecretsshhh';
// const { JWT_SECRET } = config;

export default (req, res, next) => {
    const token = req.header('token');
  
    // Check for token
    if (!token)
      return res.status(401).json({ msg: 'No token, authorizaton denied' });
  
    try {
      // Verify token
      const decoded = jwt.verify(token, secret);
      // Add user from payload
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: 'Token is not valid' });
    }
  };