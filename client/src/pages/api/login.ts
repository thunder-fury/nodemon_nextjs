import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    console.log(req.body);
    if (req.body.mail === `admin` && req.body.password === `admin`) {
      res.status(200).json({
        // 非同期通信の時ランダムで発行されるToken
        token: `LoginAPiKey**********************`,
        name: req.body.mail,
        success: `${req.body.mail}様ログインが正式にされました`,
      });
    } else {
      res.status(200).json({
        error_messege: `メールアドレスもしくはパスワードが間違っています。再度ご確認の上ログインしてください。`,
      });
    }
  } else {
    res.status(500).json({ error: "POSTしてください" });
  }
};
