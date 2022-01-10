const jwt = require('jsonwebtoken');
require('dotenv').config();

export const verifyJWT = (req, res, next) => {
  const token = req.headers['x-access-token']
  if(!token) {
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if( err ) {
        res.status(500).json({auth: false, message: ``})
      }
    })
  }
}


