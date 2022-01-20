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
const uploadWithOriginalFilename = multer({ storage: storage });

const profile = (app) => {
  app.put(
    `/api/profile_update`,
    uploadWithOriginalFilename.single('image'),
    (req, res) => {
      const { member_id, user_name } = req.body
      const getUser = `SELECT * FROM member WHERE id = ${member_id}`
      database().connect();
      if(req.file) {
        const sql = `UPDATE member SET image = ?, user_name = ? where id = ${member_id}`
        const image = `http://${req.headers.host}/image/${req.file.filename}`;
        const params = [image, user_name]
        database().query(sql, params, (err, rows, fields) => {
          res.header(`Content-Type`, `application/json; charset=utf-8`);
          database().query(getUser, (error, results, fields) => {
            res.status(200).send({ status:200, respons: results, success_messge: `success` });
          })
        });
      } else {
        const sql = `UPDATE member SET user_name = ? where id = ${member_id}`
        database().query(sql, user_name, (err, rows, fields) => {
          res.header(`Content-Type`, `application/json; charset=utf-8`);
          database().query(getUser, (error, results, fields) => {
            res.status(200).send({ status:200, respons: results, success_messge: `success` });
          })
        });
      }
      // if(user_name) {
      // } else {
      //   res.status(500).send({
      //     status: 500,
      //     error_messge : `本日の打刻はできません。明日頑張りましょう`,
      //     respons: results
      //   });
      // }

      database().end();
    },
  );
};

exports.profile = profile
