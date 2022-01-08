const { database } = require('./../confg/database');
const { login } = require('./login');
const multer = require('multer');
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}__${file.originalname}`);
  },
});
const upload = multer({ dest: 'uploads/' });
const uploadWithOriginalFilename = multer({ storage: storage });
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
  app.get(`/api/articles/:id`, (req, res) => {
    // api/articles/id로 접속할경우 아이디 의 데이터를 반환
    const id = parseInt(req.params.id, 10);
    database().connect();
    //데이터 베이스 데이블 반환
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

  app.get(`/api/news`, (req, res) => {
    database().connect();
    database().query(`SELECT * FROM news`, (error, results, fields) => {
      res.header(`Content-Type`, `application/json; charset=utf-8`);
      error && res.status(500).send('Something broke!');
      res.status(200).send(results);
    });
    database().end();
  });

  app.get(`/api/get_update_data`, (req, res) => {
    database().connect();
    database().query(`SELECT * FROM updateimage`, (error, results, fields) => {
      res.header(`Cozwntent-Type`, `application/json; charset=utf-8`);
      error && res.status(500).send('Something broke!');
      res.status(200).send(results);
    });
    database().end();
  });

  // sign_up
  app.post(`/api/sign_up`, (req, res) => {
    const { email, password, user_name } = req.body;
    // SELECT * FROM 데이터베이스명
    database().query(`SELECT * FROM member`, (error, results, fields) => {
      console.log(results)
      const id = results.some((e) => e.email === email)
      if(id) {
        res.status(500).send({ messge: `存在しているIDです。` });
      } else {
        if(email && password && user_name) {
          const params = [email, password, user_name];
          const sql = `INSERT INTO member VALUES (null, ?, ?, ?)`;
          database().connect();
          database().query(sql, params, (err, rows, fields) => {
            res.header(`Content-Type`, `application/json; charset=utf-8`);
            res.status(200).send({ reow: rows });
          });
          database().end();
        } else {
          res.status(500).send({ messge: `サーバーエラー` });
        }
      }
    });
  });
  // login
  login(app)
  // Image POST
  app.post(
    `/api/add_update`,
    uploadWithOriginalFilename.single('file'),
    (req, res) => {
      const sql = `INSERT INTO updateimage VALUES (null, ?, ?)`;
      const title = req.body.title;
      const thumbnail = `image/${req.file.filename}`;
      const params = [title, thumbnail];
      database().connect();
      database().query(sql, params, (err, rows, fields) => {
        res.header(`Content-Type`, `application/json; charset=utf-8`);
        res.status(200).send({ reow: rows });
        console.log(rows);
      });
      database().end();
    },
  );
};

exports.renders = renders;
