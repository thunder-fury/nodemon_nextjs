const express = require('express');
const { adminMail } = require('../mails/admin');
const { userMail } = require('../mails/user');
const { transporter } = require('../mails/transporter');
// const { database } = require('./../confg/database');
// const conn = database.init();
// database.connect(conn);
const apis = (app) => {
  app.use(express.json());
  //adminMail send
  app.post('/api/send', (req, res) => {
    console.log(req.body);
    transporter.sendMail(adminMail(req), (error, info) => {
      if (error) {
        console.log(error);
        res.send('error');
      } else {
        console.log('Email sent:' + info.respons);
        res.send('success');
        req.body.name = '';
        req.body.email = '';
      }
    });
  });
};

exports.apis = apis;
