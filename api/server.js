const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3090;
const { adminMail } = require('./mails/admin');
const { userMail } = require('./mails/user');
const { transporter } = require('./mails/transporter');
app.use(bodyParser.urlencoded({ extended: true }));

//仮ApiData
const allData = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/any',
    name: '山田 二郎',
    birthday: '19850725',
    gender: '男性',
    jab: '会社員',
  },
];

app.use(express.json());
//メール送信API
app.post('/api/send', (req, res) => {
  console.log(req.body);

  transporter.sendMail(adminMail(req), (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent:' + info.respons);
      res.send('success');
    }
  });
  transporter.sendMail(userMail(req), (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email sent:' + info.respons);
      res.send('success');
    }
  });
});

app.use(bodyParser.json());

app.get('/api/customers', (req, res) => {
  res.send(allData);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
