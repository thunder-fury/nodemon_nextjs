const setDate = require('../functions/date');

const userMail = (req) => {
  const options = {
    from: `${process.env.NODEMAILER_USER}`,
    subject: `${req.body.name}様お問い合わせいただきありがとうございます`,
    to: req.body.mail,
    name: req.body.name,
    text: `
      ${req.body.name}様お問い合わせいただきありがとうございます。
      お名前: ${req.body.name}
      メールアドレス: ${req.body.mail}

      送信日時: ${setDate}
    `,
  };
  return options;
};
exports.userMail = userMail;
