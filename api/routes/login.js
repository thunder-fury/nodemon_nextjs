const { database } = require('./../confg/database');
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
        console.log(results)
        if(check) {
          res.status(200).send({
            status: 200,
            success_messge: `Hello👋`,
            token: ``
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
