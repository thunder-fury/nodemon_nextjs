const { database } = require('./../confg/database');
const signUp = (app) => {
  app.post(`/api/sign_up`, (req, res) => {
    const { email, password, user_name } = req.body;
    // SELECT * FROM 데이터베이스명
    if(email && password && user_name) {
      database().connect()
      database().query(`SELECT * FROM member`, (error, results, fields) => {
        const id = results.some((e) => e.email === email)
        if(id) {
          res.status(500).send({ status: 500, error_messge: `存在しているIDです。再度ご確認の上サインアップしてください。😢` });
        } else {
          const params = [email, password, user_name];
          const sql = `INSERT INTO member VALUES (null, ?, ?, ?)`;
          database().connect();
          database().query(sql, params, (err, rows, fields) => {
            res.header(`Content-Type`, `application/json; charset=utf-8`);
            res.status(200).send({ status: 200, success_messge: `ユーザー登録が完了されましました。🎉` });
          });
          database().end();
        }
      });
    } else {
      res.status(500).send({ status: 500, error_messge: `サーバーエラーです。入力のミスがないかご確認の上登録してください🙏🏻` });
    }
  });
};

exports.signUp = signUp;
