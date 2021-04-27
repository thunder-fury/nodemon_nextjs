const adminMail = (req) => {
  const options = {
    from: `${process.env.NODEMAILER_USER}`,
    subject: `${req.body.name}様からメールが届きました`,
    to: `${process.env.NODEMAILER_USER}`,
    bcc: `${process.env.NODEMAILER_BCC}`,
    text: `
      下記の内容で${req.body.name}様からメールが届きました。
      下記の内容でご対応お願いいたします。
      
      お名前: ${req.body.name}
      メールアドレス: ${req.body.mail}
    `,
  };
  return options;
};

exports.adminMail = adminMail;
