import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log(req.body)
    if (req.body.token === `LoginAPiKey**********************`) {
      res.status(200).json({
        messge: `ログアウトされました`,
      })
    }
  } else {
    res.status(500).json({ error: 'POSTしてください' })
  }
}
