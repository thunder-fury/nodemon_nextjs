const { database } = require('./../confg/database');
const jwt = require('jsonwebtoken');
const { verifyJWT } = require('../utils/jwt');
require('dotenv').config();

const login = (app) => {
  app.post(`/api/login`, (req, res) => {
    const { email, password } = req.body;
    const sql = `SELECT * FROM member`;
    if(email && password) {
      database().connect()
      database().query(sql, (error, results, fields) => {
        const check = results.some(
          (e) => e.email === email && e.password === password
        )
        const user = results.find(
          (e) => e.email === email && e.password === password
        )
        if(check) {
          const id = results[0].id
          console.log(results)
          const token = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: `15m`
          })
          res.status(200).send({
            status: 200,
            role: true,
            member_id: user.id,
            success_messge: `Helloð`,
            token
          });
        } else {
          res.status(500).send({
            status: 500,
            error_messge: `ð«ð¨å­å¨ãã¦ããªãã¦ã¼ã¶ã¼ã§ããð¢`
          });
        }

      })
      database().end()
    } else {
      res.status(500).send({
        status: 500,
        error_messge: `ãµã¼ãã¼ã¨ã©ã¼ã§ããå¥åã®ãã¹ããªãããç¢ºèªã®ä¸ã­ã°ã¤ã³ãã¦ãã ããð¢ðð»`
      });
    }
    // const sql = `SELECT * FROM member WHERE email = ? AND password = ?`;
  });
};

const logout = (app) => {
  app.post(`/api/logout`, (req, res) => {
    res.status(200).json({ status: 200, message: `success` });
    // const sql = `SELECT * FROM member WHERE email = ? AND password = ?`;
  });
};

exports.login = login;
exports.logout = logout;
