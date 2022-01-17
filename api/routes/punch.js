const moment = require('moment');
const { database } = require('../confg/database');
const { dateFormat } = require('../utils/format');
const { jsonCsv } = require('../utils/jsonCsv');
const { verifyJWT } = require('../utils/jwt');

const punch = (app) => {
  app.post(`/api/punch`, (req, res) => {
    const { active, attendance, leaving, date, member_id, note } = req.body;
    // date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate
    const allPunchSql = `SELECT *, DATE_FORMAT(date, '%Y-%m-%d') date FROM punch where date like '2022-01%' `
    // as f_date コピー名前をつけられる。
    // whereで絞る
    database().query(allPunchSql, (error, results, fields) => {
      const user = results.find((e) => Number(e.member_id) === Number(member_id) && dateFormat(e.date) === dateFormat(new Date()))
      console.log(user)
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
  app.get(`/api/punch_get/:id`, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const allPunchSql = `SELECT *, DATE_FORMAT(date, '%Y-%m-%d') date FROM punch WHERE date LIKE '2022-01%' AND member_id LIKE ${id}`
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

const currentUserAllPunch = (app) => {
  app.get(`/api/allpunch/:id`, (req, res) => {
    const id = parseInt(req.params.id, 10)
    const sql = `SELECT * FROM punch WHERE member_id = ${id}`
    database().query(sql ,(error, results, fields) => {
      res.status(200).send({
        status: 200,
        success_messge : `success`,
        respons: results
      });
    })
  })
}

const exportPunchStr = (app) => {
  const allPunchSql = `SELECT *, DATE_FORMAT(date, '%Y-%m-%d') date FROM punch where date like '2022-01%' `
  app.get(`/api/punch_csv`, (req, res) => {
    database().query(allPunchSql,(error, results, fields) => {
      res.status(200).send({
        status: 200,
        success_messge : `success`,
        respons: jsonCsv(results)
      });
    })
  })
}


exports.currentUserAllPunch = currentUserAllPunch
exports.exportPunchStr = exportPunchStr
exports.punchGet = punchGet
exports.punch = punch
