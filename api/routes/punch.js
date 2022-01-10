const { database } = require('../confg/database');
const punch = (app) => {
  app.get(`/api/punch/:id`, (req, res) => {
    // api/articles/id로 접속할경우 아이디 의 데이터를 반환
    const id = parseInt(req.params.id, 10);
    database().connect();
    //데이터 베이스 데이블 반환
    database().query(`SELECT * FROM punch`, (error, results, fields) => {
      console.log(results)
      // res.header(`Content-Type`, `application/json; charset=utf-8`);
      // error && res.status(500).send('Something broke!');
      // if (results[id - 1]) {
      //   res.status(200).send(results[id - 1]);
      // } else {
      //   // 404 에러 설정
      //   res.status(404).send('Sorry cant find that!');
      // }
    });
    database().end();
  });
};

exports.punch = punch;
