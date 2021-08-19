const { database } = require('./../confg/database');

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

  app.post( `/api/add_update`, uploadWithOriginalFilename.single('file'),
    (req, res) => {
      const sql = `INSERT INTO updateimage VALUES (null, ?, ?)`
      const title = req.body.title;
      const thumbnail = `image/${req.file.filename}`;
      const params = [title,thumbnail];
      database().connect();
      database().query(sql, params, (err, rows, fields) => {
        res.header(`Content-Type`, `application/json; charset=utf-8`);
        res.status(200).send({reow:rows});
        console.log(rows)
      });
      database().end();
    },
  );

  app.post(`/api/news`, (req, res) => {
    console.log(req.body);
    // const sql = `INSERT INTO news VALUES (null, ?, ?, ?, ?)`;
    // const title = req.body.title;
    // const description = req.body.description;
    // const date = req.body.date;
    // const thumbnail = `image/${req.body.filename}`
    // const params = [title, description, date, thumbnail];
    // database().connect();
    // database().query(sql, params,
    //   (err, rows, fields) => {
    //     res.header(`Content-Type`, `application/json; charset=utf-8`);
    //     res.send(rows);
    //   });
    // database().end();
  });

  // all Data
  app.get(`/api/articles`, (req, res) => {
    // api/articles로 접속할경우 총 데이터를 반환
    database().connect();
    database().query(`SELECT * FROM topic`, (error, results, fields) => {
      res.header(`Content-Type`, `application/json; charset=utf-8`);
      error && res.status(500).send('Something broke!');
      res.status(200).send(results);
    });
    database().end();
  });

  app.get(`/api/users`, (req, res) => {
    // api/users 접속할경우 총 데이터를 반환
    database().connect();
    database().query(`SELECT * FROM users`, (error, results, fields) => {
      res.header(`Content-Type`, `application/json; charset=utf-8`);
      error && res.status(500).send('Something broke!');
      res.status(200).send(results);
    });
    database().end();
  });

  app.post(
    `/api/users_add`,
    uploadWithOriginalFilename.single('file_img'),
    (req, res) => {
      console.log(res.body);
      let sql = `INSERT INTO user VALUES (null, ?, ?, ?, ?, ?, ?, ?)`;
      let image = `image/`;
      let user_name = req.body.user_name;
      let date_created = req.body.date_created;
      let user_id = req.body.user_id;
      let mail_address = req.body.mail_address;
      let gender = req.body.gender;
      let user_profile = req.body.user_profile;
      let params = [
        image,
        user_name,
        date_created,
        user_id,
        mail_address,
        gender,
        user_profile,
      ];
      database().connect();
      database().query(sql, params, (err, rows, fields) => {
        res.send(rows);
      });
      res.status(200).send({ messege: `success` });
      console.log(`送信`);
      database().end();
    },
  );
};

exports.renders = renders;
