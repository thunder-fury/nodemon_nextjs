const moment = require('moment');
const { database } = require('../confg/database');
const { dateFormat } = require('../utils/format');
const { verifyJWT } = require('../utils/jwt');

const punch = (app) => {
  app.post(`/api/punch`, (req, res) => {
    const { active, attendance, leaving, date, member_id, note } = req.body;
    const allPunchSql = `SELECT *, DATE_FORMAT(date, '%Y-%m-%d') as f_date FROM punch where date like '2022-01%' `
    // as f_date コピー名前をつけられる。
    // whereで絞る
    database().query(allPunchSql, (error, results, fields) => {
      const user = results.find((e) => Number(e.member_id) === member_id && dateFormat(e.date) === dateFormat(new Date()))
      if(user === undefined) {
        const sql = `INSERT INTO punch VALUES (null, ?, ?, ?, ?, ?, ?)`;
        const params = [active, attendance, leaving, date, member_id, note];
        database().query(sql, params,(err, rows, fields) => {
          res.header(`Content-Type`, `application/json; charset=utf-8`);
            res.status(200).send({
              status: 200,
              success_messge : `出勤されました。本日も頑張りましょう！`,
              respons: results
            });
        });
      } else {
        if(user.leaving === null) {
          const update = `UPDATE punch SET leaving = ? where id = ${user.id}`
          database().query(update, leaving,(err, rows, fields) => {
            res.header(`Content-Type`, `application/json; charset=utf-8`);
            res.status(200).send({
              status: 200,
              success_messge : `退勤されました。本日もお疲れ様でした！`,
              respons: results
            });
          });
        } else {
          res.status(500).send({
            status: 500,
            error_messge : `本日の打刻はできません。明日頑張りましょう`,
            respons: results
          });
        }
      }
    })
    database().end();
  });
};

const punchGet = (app) => {
  const allPunchSql = `SELECT * FROM punch`
  app.get(`/api/punch_get`, (req, res) => {
    database().query(allPunchSql,(error, results, fields) => {
      if(results.length >= 0) {
        res.status(200).send({
          status: 200,
          success_messge : `success`,
          respons: results
        });
      } else {
        res.status(500).send({
          status: 500,
          error_messge : `打刻情報はありません`,
        });
      }
    })
  })
}

exports.punchGet = punchGet
exports.punch = punch;
