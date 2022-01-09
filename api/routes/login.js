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
          res.status(200).send({ message: `WellCome` });
        } else {
          res.status(500).send({ message: `🚫🚨없는 유저입니다 메일아드레스 혹은 패스워드들 다시확인하시고 로그인 해주세요😢` });
        }
      })
      database().end()
    } else {
      res.status(500).send({ message: `サーバーエラーです。入力のミスがないかご確認の上登録してください🙏🏻` });
    }
    // const sql = `SELECT * FROM member WHERE email = ? AND password = ?`;
  });
};

exports.login = login;
