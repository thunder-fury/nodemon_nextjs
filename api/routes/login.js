const { database } = require('./../confg/database');
const login = (app) => {
  app.post(`/api/login`, (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const sql = `SELECT * FROM member WHERE email = ? AND password = ?`;
    console.log(sql)
    // database().connect();
    // database().query(sql, [email, password], (err, result) => {
    //   if (err) {
    //     res.send({ err: err });
    //   }
    //   if (result.length > 0) {
    //     res.send(result);
    //   } else {
    //     res.status(500).send({ message: `🚫🚨없는 유저입니다 메일아드레스 혹은 패스워드들 다시확인하시고 로그인 해주세요😢` });
    //   }
    // });
    // database().end();
  });
};

exports.login = login;
