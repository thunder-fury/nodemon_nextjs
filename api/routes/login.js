const { database } = require('./../confg/database');
const jwt = require('jsonwebtoken');
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
        if(check) {
          const id = results[0].id
          const token = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: `15m`
          })
          res.status(200).send({
            status: 200,
            role: true,
            success_messge: `Hello👋`,
            token
          });
        } else {
          res.status(500).send({
            status: 500,
            error_messge: `🚫🚨存在していないユーザーです。😢`
          });
        }
      })
      database().end()
    } else {
      res.status(500).send({
        status: 500,
        error_messge: `サーバーエラーです。入力のミスがないかご確認の上ログインしてください😢🙏🏻`
      });
    }
    // const sql = `SELECT * FROM member WHERE email = ? AND password = ?`;
  });
};

exports.login = login;
