import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(
    [ 
      {
        id: 6,
        status: '仮登録',
        registration_date:'2021/7/11',
        last_login_date: '2021/6/11 17:09',
        display: '有効',
        personally_info: {
          name: {
            first: 'えらべる11111',
            last: '二郎'
          },
          street_address: {
            prefecture: '東京都',
            postcode: '1001000',
            address: '豊島区南大塚2-25-15 12F',
          },
          company_name: '株式会社Wiz',
        },
      },
      {
        id: 7,
        status: '仮登録',
        registration_date:'2021/7/11',
        last_login_date: '2021/6/11 17:09',
        display: '有効',
        personally_info: {
          name: {
            first: 'えらべる11111',
            last: '二郎'
          },
          street_address: {
            prefecture: '東京都',
            postcode: '1001000',
            address: '豊島区南大塚2-25-15 12F',
          },
          company_name: '株式会社Wiz',
        },
      },
      {
        id: 8,
        status: '仮登録',
        registration_date:'2021/7/11',
        last_login_date: '2021/6/11 17:09',
        display: '有効',
        personally_info: {
          name: {
            first: 'えらべる11111',
            last: '二郎'
          },
          street_address: {
            prefecture: '東京都',
            postcode: '1001000',
            address: '豊島区南大塚2-25-15 12F',
          },
          company_name: '株式会社Wiz',
        },
      },
      {
        id: 9,
        status: '仮登録',
        registration_date:'2021/7/11',
        last_login_date: '2021/6/11 17:09',
        display: '有効',
        personally_info: {
          name: {
            first: 'えらべる11111',
            last: '二郎'
          },
          street_address: {
            prefecture: '東京都',
            postcode: '1001000',
            address: '豊島区南大塚2-25-15 12F',
          },
          company_name: '株式会社Wiz',
        },
      },
      {
        id: 10,
        status: '仮登録',
        registration_date:'2021/7/11',
        last_login_date: '2021/6/11 17:09',
        display: '有効',
        personally_info: {
          name: {
            first: 'えらべる11111',
            last: '二郎'
          },
          street_address: {
            prefecture: '東京都',
            postcode: '1001000',
            address: '豊島区南大塚2-25-15 12F',
          },
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