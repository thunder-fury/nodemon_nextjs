const jwt = require('jsonwebtoken');
require('dotenv').config();

// authorizationトークン確認処理
const verifyJWT = (req, res, next) => {
  const authorization = req.headers.authorization
  if(authorization.split(" ")[0] === `Bearer`) {
    const token = authorization.split(" ")[1]
    if(!token) {
      res.status(500).json({ status: 500, message: `会員登録が必要です。` })
    } else {
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if( err ) {
          res.status(500).json({ status: 500, message: `認証が必要です。` })
        } else {
          console.log(decoded)
          res.status(200).json({ status: 200, message: `success` })
        }
      })
    }
  }
}
// 認証トークン発行
const token = (id) => {
  const token = wt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: `15m`
  })
  return token
}

exports.token = token;
exports.verifyJWT = verifyJWT;
