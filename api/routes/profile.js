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
  app.post(
    `/api/profile_update`,
    uploadWithOriginalFilename.single('image'),
    (req, res) => {
      console.log(req.file)
      const sql = `UPDATE member SET image = ? where id = '45'`
      const image = `image/${req.file.filename}`;
      database().connect();
      database().query(sql, image, (err, rows, fields) => {
        res.header(`Content-Type`, `application/json; charset=utf-8`);
        res.status(200).send({ reow: rows });
        console.log(rows);
      });
      database().end();
    },
  );
};

exports.profile = profile
