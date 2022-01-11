const moment = require('moment');
const { database } = require('../confg/database');
const { dateFormat } = require('../utils/format');
const punch = (app) => {
  app.post(`/api/punch`,　(req, res) => {
    const { active, attendance, leaving, date, member_id, note } = req.body;
    const allPunchSql = `SELECT * FROM punch`
    const sql = `INSERT INTO punch VALUES (null, ?, ?, ?, ?, ?, ?)`;
    const params = [active, attendance, leaving, date, member_id, note];
    console.log()
    database().connect()
    database().query(allPunchSql, (error, results, fields) => {
      console.log(results)
      const user = results.find(
        (e) => Number(e.member_id) === member_id && dateFormat(e.date) === dateFormat(new Date())
      )
      console.log(results.length <= 0)
      if(results.length <= 0) {
        database().query(sql, params,(err, rows, fields) => {
          res.header(`Content-Type`, `application/json; charset=utf-8`);
          res.status(200).send({
            success_messge : `出勤されました。本日も頑張りましょう！`,
            respons: results
          });
        });
      } else {
        if(user.leaving === `00:00:00`) {
          const update = `UPDATE punch SET leaving = ? where id = ${user.id}`
          database().query(update, leaving,(err, rows, fields) => {
          res.header(`Content-Type`, `application/json; charset=utf-8`);
          res.status(200).send({
            success_messge : `退勤されました。本日もお疲れ様でした！`,
            respons: results
          });
        });
        } else  {
          console.log(`本日の打刻はできません。明日頑張りましょう`)
          res.status(500).send({
            success_messge : `本日の打刻はできません。明日頑張りましょう`,
            respons: results
          });
        }
      }
      // if(user.leaving === `00:00:00`) {
      //   const update = `UPDATE punch SET leaving = ? where id = ${user.id}`
      //   database().query(update, leaving,(err, rows, fields) => {
      //   res.header(`Content-Type`, `application/json; charset=utf-8`);
      //   res.status(200).send({
      //     success_messge : `退勤されました。本日もお疲れ様でした！`,
      //     respons: results
      //   });
      // });
      // } else {
      //   database().query(sql, params,(err, rows, fields) => {
      //     res.header(`Content-Type`, `application/json; charset=utf-8`);
      //     res.status(200).send({
      //       success_messge : `出勤されました。本日も頑張りましょう！`,
      //       respons: results
      //     });
      //   });
      // }
    })
    database().end();
  });
};



exports.punch = punch;
