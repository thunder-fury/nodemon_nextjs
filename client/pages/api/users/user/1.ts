import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(
    [ 
      {
        id: 1,
        status: '仮登録',
        registration_date:'2021/7/11',
        last_login_date: '2021/6/11 17:09',
        target: '売却',
        sales: '1億',
        profit:'5,000万円',
        display: '有効',
        consideration_industries:'検討中業種2',
        negotiation_target: ['事業の購入', ''],
        personally_info: {
          name: {
            first: 'えらべる',
            last: '二郎'
          },
          street_address: {
            prefecture: '東京都',
            postcode: '1001000',
            address: '豊島区南大塚2-25-15 12F',
          },
          tel: '0900000000',
          mailaddress: 'ma@ma.com',
          password: '09090909',
          company_name: '株式会社Wiz',
        },
      },
    ],
  )
  // res.json({
  //   body: req.body,
  //   query: req.query,
  //   cookies: req.cookies,
  // });
};