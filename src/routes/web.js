const { database } = require('./../confg/database');

const renders = (app) => {
  // Load View Engine
  app.get('/', (req, res) => {
    // 루트로 접속할경우 인덱스로 리다이렉트
    res.render(`index`, {
      title: 'Hello',
    });
  });
  //Add Route
  app.get(`/articles/add`, (req, res) => {
    // /articles/add 로 접속할경우 글추가 페이지로 리다이렉트
    res.render(`add_article`, {
      title: 'Articles',
    });
  });
  // ID Data
  app.get(`/api/articles/:id`, (req, res) => {
    // api/articles/id로 접속할경우 아이디 의 데이터를 반환
    const id = parseInt(req.params.id, 10);
    database().connect();
    database().query(`SELECT * FROM topic`, (error, results, fields) => {
      res.header(`Content-Type`, `application/json; charset=utf-8`);
      error && res.status(500).send('Something broke!');
      if (results[id - 1]) {
        res.send(results[id - 1]);
      } else {
        // 404 에러 설정
        res.status(404).send('Sorry cant find that!');
      }
    });
    database().end();
  });
  // all Data
  app.get(`/api/articles`, (req, res) => {
    // api/articles로 접속할경우 총 데이터를 반환
    database().connect();
    database().query(`SELECT * FROM topic`, (error, results, fields) => {
      res.header(`Content-Type`, `application/json; charset=utf-8`);
      error && res.status(500).send('Something broke!');
      res.send(results);
    });
    database().end();
  });

};

exports.renders = renders;
