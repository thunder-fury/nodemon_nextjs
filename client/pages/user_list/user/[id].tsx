import { useState, useEffect } from 'react'
import InputField from '../../../components/form/atoms/InputField'
import SelectField from '../../../components/form/atoms/SelectField'
import { Color } from '../../../styles/Variables'
import { container } from '../../../styles/components/block/Container'
import { allCheck, userDetails, setVal, changedInput } from '../../../store/slices/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Button from '../../../components/button'
import CheckField from '../../../components/form/atoms/CheckField'
import Loading from '../../../components/Loading'
import axios from 'axios'
export const User: React.FC = ({
}) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const [userInfo, setUserInof] = useState('')
  const [loading, setLoading] = useState(false)
  // const [id, setId] = useState<number>()
  let peopleList = useSelector(userDetails)
  const setDefaultData = (key: string, value: string) => {
    dispatch(setVal({ key: key, value: value }))
  }
  useEffect(() => {
    const getUserInfo = async () => {
      // const endPoint = `/api/users/user/${router.query.id}`
      setLoading(true)
      const endPoint = `https://stoplight.io/mocks/woo/m-a-admin:main/1755950/api/user/${router.query.id}`
      try {
        const res = await fetch(endPoint)
        const datas = await res.json()
        setUserInof(datas)
        Object.entries(datas).map(([key, fild]: any) => {
          //個人情報 (ReduxKey, api習得key)
          setDefaultData(`status`, fild.status)
          setDefaultData(`firstName`, fild.personally_info.name.first)
          setDefaultData(`lastName`, fild.personally_info.name.last)
          setDefaultData(`mailaddress`, fild.personally_info.mailaddress)
          setDefaultData(`companyName`, fild.personally_info.company_name)
          setDefaultData(`password`, fild.personally_info.password)
          setDefaultData(`tel`, fild.personally_info.tel)
          //住所
          setDefaultData(`address`, fild.personally_info.street_address.address)
          setDefaultData(`prefecture`, fild.personally_info.street_address.prefecture)
          setDefaultData(`postcode`, fild.personally_info.street_address.postcode)

          setDefaultData(`sales`, fild.sales)
          setDefaultData(`profit`, fild.profit)
          setDefaultData(`considerationIndustries`, fild.consideration_industries)
          setDefaultData(`negotiationTarget`, fild.negotiation_target)

        })
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    router.query.id && getUserInfo()
  }, [router])
  const setCheckd = (): string[] => {
    let checkdVal: string[] = []
    peopleList.info.negotiationTarget.forEach((v: string) => {
      checkdVal.push(v)
    });
    return checkdVal
  }
  // console.log(setCheckd())
  const userFilds = {
    1: {
      firstName: {
        id: 1,
        fild: `性`,
        validateType: `required`,
        type: `text`

      },
      lastName: {
        id: 2,
        fild: `性`,
        validateType: `required`,
        type: `text`
      }
    },
    2: {
      mailaddress: {
        id: 1,
        fild: `メールアドレス`,
        validateType: `required email`,
        type: `email`
      }
    },
    3: {
      password: {
        fild: `パスワード`,
        validateType: `required`,
        type: `password`
      }
    },
    4: {
      companyName: {
        fild: `会社名`,
        validateType: `required`,
        type: `text`
      }
    },
    5: {
      tel: {
        fild: `電話番号`,
        validateType: `required min:10 number min:11`,
        type: `text`
      }
    },
    6: {
      postcode: {
        fild: `郵便番号`,
        validateType: `required`,
        type: `text`
      }
    },
    7: {
      prefecture: {
        fild: `都道府県`,
        validateType: `required`,
        type: `text`
      }
    },
    8: {
      address: {
        fild: `住所`,
        validateType: `required`,
        type: `text`
      }
    },
    9: {
      sales: {
        fild: ` 売上高`,
        type: `text`
      }
    },
    10: {
      profit: {
        fild: ` 営業利益`,
        type: `text`
      }
    },
    11: {
      considerationIndustries: {
        fild: `ご検討中の業種`,
        validateType: `required`,
        options: [
          { id: 1, value: `検討中業種1` },
          { id: 2, value: `検討中業種2` }
        ],
        type: `select`
      }
    },
    12: {
      negotiationTarget: {
        fild: `交渉対象`,
        type: `checkBox`,
        validateType: `required`,
        options: [
          { id: 1, value: `事業の購入`},
          { id: 2, value: `事業の売却`}
        ]
      }
    }
  }
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <>
      {Object.entries(userInfo).map(([key, fild]: any, index) => {
        return (
          <div key={fild.id}>
            <div css={container.user}>
              <p>ユーザーID: {fild.id}</p>
              <p>登録日: {fild.registration_date}</p>
              <p>最終ログイン日: {fild.last_login_date}</p>
            </div>
            <div css={container.from}>
              <h1>{fild.personally_info.name.first} {fild.personally_info.name.last}様</h1>
              <>
                {Object.entries(userFilds).map(([key, value]: any, index) => {
                  return (
                    <div key={key} css={container.fromItem}>
                      {Object.entries(value).map(([key, value]: any, index) => {
                        if (value.type === `select`) {
                          return (
                            <SelectField
                              key={key}
                              name={key}
                              fildName={value.fild && value.fild}
                              value={peopleList.info[key]}
                              validateType={value.validateType && value.validateType}
                              onChange={(e: any) => {
                                setDefaultData(key, e.target.value)
                                dispatch(changedInput({
                                  value: e.target.value,
                                  type: e.target.getAttribute('data-validate-type'),
                                  key: e.target.getAttribute('data-fild-name'),
                                  target: e.target
                                }));
                              }}
                              options={value.options}
                            />
                          )
                        } else if (value.type === `checkBox`) {
                          return (
                            <CheckField
                              id={key}
                              key={key}
                              name={key}
                              validateType={value.validateType && value.validateType}
                              fildName={value.fild}
                              label={value.fild}
                              options={value.options}
                            />
                          )
                        } else {
                          return (
                            <InputField
                              key={key}
                              name={key}
                              fildName={value.fild && value.fild}
                              validateType={value.validateType && value.validateType}
                              placeholder={value.fild}
                              value={peopleList.info[key]}
                              type={value.type}
                              onChange={(e: any) => {
                                setDefaultData(key, e.target.value)
                                dispatch(changedInput({
                                  value: e.target.value,
                                  type: e.target.getAttribute('data-validate-type'),
                                  key: e.target.getAttribute('data-fild-name'),
                                  target: e.target
                                }));
                              }}
                            />
                          )
                        }
                      })}
                    </div>
                  )
                })}
              </>
              <div css={container.btn}>
                <Button
                  dataTarget={`btn`}
                  txt={`送信`}
                  color={Color.white}
                  backgroundColor={Color.gray}
                  fontSize={2}
                  onClick={(e) => {
                    dispatch(allCheck({ target: e }));
                  }}
                />
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default User