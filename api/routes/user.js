const moment = require('moment');
const { database } = require('../confg/database');
const { dateFormat } = require('../utils/format');
const { jsonCsv } = require('../utils/jsonCsv');
const { verifyJWT } = require('../utils/jwt');


const getCurrentUserInfo = (app) => {
  app.get(`/api/user_get/:id`, (req, res) => {
    const id = parseInt(req.params.id, 10);
    const allPunchSql = `SELECT * FROM member WHERE id = ${id}`
    database().query(allPunchSql,(error, results, fields) => {
      res.status(200).send({
        status: 200,
        success_messge : `success`,
        respons: results
      });
    })
  })
}


exports.getCurrentUserInfo = getCurrentUserInfo
