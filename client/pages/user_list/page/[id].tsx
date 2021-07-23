import { useState, useEffect } from 'react'
import Link from 'next/link'
import { btnContainer } from '../../../styles/common'
import Loading from '../../../components/Loading'
import Select from '../../../components/form/Select'
import InputField from '../../../components/form/atoms/InputField'
import SelectField from '../../../components/form/atoms/SelectField'
import PageNation from '../../../components/PageNation'
import Button from '../../../components/button'
import { useRouter } from 'next/router'
import { Color } from '../../../styles/Variables'
import { Title } from '../../../styles/common'
import Breadcrumb from '../../../components/Breadcrumb'
import { filter } from '../../../styles/components/block/Filter'
import { table } from '../../../styles/components/block/Table'
import { pageNation } from '../../../styles/components/atoms/PageNation'
interface Props {
}
export const UserList: React.FC<Props> = ({
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  // ページャーState
  const [userLists, setUserList]: any = useState([])
  const [postTotalList, setPostTotalList] = useState(10)
  const [postsPerList, setpostsPerList] = useState(3)
  const [currentPage, setCurrentPage]: any = useState(null)
  const [upperPageBound, setUpperPageBound] = useState(1)
  const [path, setPath] = useState(``)

  // 検索パラーメーター
  const [keyword, setKeyword] = useState()
  const [prefecture, setPrefecture] = useState()
  const [target, setTarget] = useState()
  // const [prefecture, setPrefecture] = useState()
  // const [prefecture, setPrefecture] = useState()
  // const [prefecture, setPrefecture] = useState()
  // const [prefecture, setPrefecture] = useState()
  

  useEffect(() => {
    const getUserList = async () => {
      setLoading(true)
      const endPoint = `https://stoplight.io/mocks/woo/m-a-admin:main/1755950/api/user_list/${router.query.id}`
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      try {
        const res = await fetch(endPoint, options)
        const data = await res.json()
        setUserList(data)
        setPostTotalList(data.meta.total)
        setpostsPerList(data.data.length)
        setUpperPageBound(data.meta.upper_page_bound)
        setPath(data.meta.path)
      } catch (error) {
        alert(`データ通信が快適ではありません。しばらく立ってからページを開いてください。`)
      }
      setLoading(false)
    }
    if (router.query.id) {
      getUserList()
      setCurrentPage(Number(router.query.id))
    }
  }, [router])
  const clear = (e: any) => {
    let clearTargets: NodeList = e.ownerDocument.querySelectorAll('[data-attribute="search-attribute"]')
    clearTargets.forEach((elm: any) => {
      elm.value = ''
    });
  }
  if (loading) {
    return <Loading />
  }
  let totalPage = Math.ceil(postTotalList / postsPerList)
  let startPage = currentPage - Math.round((upperPageBound - 1) / 2)
  let endPage = currentPage + Math.floor((upperPageBound - 1) / 2)

  if (startPage < 1) { endPage += 1 - startPage }
  startPage = Math.max(startPage, 1)
  if (endPage > totalPage) { startPage -= endPage - totalPage }
  endPage = Math.min(totalPage, endPage)
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  console.log(userLists.meta)
  const userList = userLists.data && userLists.data.map((userList: any) => {
    return (
      <tr css={table.tr} key={userList.id}>
        <td css={table.td}>{userList.id}</td>
        <td css={table.td}>{userList.personally_info.name.first}{userList.personally_info.name.last}</td>
        <td css={table.td}>{userList.personally_info.company_name}</td>
        <td css={table.td}>{userList.personally_info.street_address.prefecture}</td>
        <td css={table.td}>{userList.registration_date}</td>
        <td css={table.td}>{userList.target}</td>
        <td css={table.td}>{userList.last_login_date}</td>
        <td css={table.td}>
          <div css={table.sellect}>
            <Select
              options={[
                { id: 1, value: `有効` },
                { id: 2, value: `無効` }
              ]}
              name={`display`}
              defaultValue={userList.display}
              fildName={`有効|無効`}
            />
          </div>
        </td>
        <td css={table.td}>
          <button>削除</button>
          <Link href={`/user_list/user/${userList.id}`}>
            <a> 編集</a>
          </Link>
        </td>
      </tr>
    )
  })
  const year = new Date().getFullYear
  for (let i = 2005; year < year; i++) {
    let element = year
    console.log(element)
  }
  const prefectures = [
    { id: 1, value: `北海道` },
    { id: 2, value: `岩手県` },
    { id: 3, value: `宮城県` },
    { id: 4, value: `秋田県` },
    { id: 5, value: `山形県` },
    { id: 6, value: `福島県` },
    { id: 7, value: `茨城県` },
    { id: 8, value: `栃木県` },
    { id: 9, value: `群馬県` },
    { id: 10, value: `埼玉県` },
    { id: 11, value: `千葉県` },
    { id: 12, value: `東京都` },
    { id: 13, value: `神奈川県` },
    { id: 14, value: `新潟県` },
    { id: 15, value: `富山県` },
    { id: 16, value: `石川県` },
    { id: 17, value: `福井県` },
    { id: 18, value: `山梨県` },
    { id: 19, value: `長野県` },
    { id: 20, value: `岐阜県` },
    { id: 21, value: `静岡県` },
    { id: 22, value: `愛知県` },
    { id: 23, value: `三重県` },
    { id: 24, value: `滋賀県` },
    { id: 25, value: `京都府` },
    { id: 26, value: `兵庫県` },
    { id: 27, value: `奈良県` },
    { id: 28, value: `和歌山県` },
    { id: 29, value: `鳥取県` },
    { id: 30, value: `島根県` },
    { id: 31, value: `岡山県` },
    { id: 32, value: `広島県` },
    { id: 33, value: `山口県` },
    { id: 34, value: `徳島県` },
    { id: 35, value: `香川県` },
    { id: 36, value: `愛媛県` },
    { id: 37, value: `高知県` },
    { id: 38, value: `福岡県` },
    { id: 39, value: `佐賀県` },
    { id: 40, value: `長崎県` },
    { id: 41, value: `熊本県` },
    { id: 42, value: `大分県` },
    { id: 43, value: `宮崎県` },
    { id: 44, value: `鹿児島県` },
    { id: 45, value: `沖縄県` },
  ]
  return (
    <>
      <form method={`GET`} css={filter.container}>
        <div css={filter.filds}>
          <InputField
            name={`key_word`}
            fildName={`キーワード`}
            placeholder={`キーワード`}
            type={'text'}
            attribute={`search-attribute`}
          />
          <SelectField
            name={`prefecture`}
            options={prefectures}
            fildName={`都道府県`}
            attribute={`search-attribute`}
          />
          <SelectField
            name={`target`}
            options={[{ id: 1, value: `購入` }, { id: 2, value: `売却` }]}
            fildName={`状態`}
            attribute={`search-attribute`}
          />
        </div>
        <div css={filter.filds}>
          <div css={filter.group}>
            <SelectField
              name={`startdate`}
              options={[{ id: 1, value: `有効` }, { id: 2, value: `無効` }]}
              fildName={`登録 開始日`}
              attribute={`search-attribute`}
            />
            <span css={filter.waveDash}>~</span>
            <SelectField
              name={`enddate`}
              options={[{ id: 1, value: `有効` }, { id: 2, value: `無効` }]}
              fildName={`終了日`}
              attribute={`search-attribute`}
            />
          </div>
          <div css={filter.group}>
            <SelectField
              name={`sales__`}
              options={[{ id: 1, value: `有効` }, { id: 2, value: `無効` }]}
              fildName={`売上 高下限`}
              attribute={`search-attribute`}
            />
            <span css={filter.waveDash}>~</span>
            <SelectField
              name={`sales_`}
              options={[{ id: 1, value: `有効` }, { id: 2, value: `無効` }]}
              fildName={`上限`}
              attribute={`search-attribute`}
            />
          </div>
        </div>
        <div css={filter.filds}>
          <div css={filter.group}>
            <SelectField
              name={`profit_`}
              options={[{ id: 1, value: `有効` }, { id: 2, value: `無効` }]}
              fildName={`営業利益下限`}
              attribute={`search-attribute`}
            />
            <span css={filter.waveDash}>~</span>
            <SelectField
              name={`profit_`}
              options={[{ id: 1, value: `有効` }, { id: 2, value: `無効` }]}
              fildName={`上限`}
              attribute={`search-attribute`}
            />
          </div>

          <div css={filter.group}>
            <SelectField
              name={`prefecture`}
              options={[{ id: 1, value: `有効` }, { id: 2, value: `無効` }]}
              fildName={`予算下限`}
              attribute={`search-attribute`}
            />
            <span css={filter.waveDash}>~</span>
            <SelectField
              name={`prefecture`}
              options={[{ id: 1, value: `有効` }, { id: 2, value: `無効` }]}
              fildName={`上限`}
              attribute={`search-attribute`}
            />
          </div>
        </div>
        <div css={filter.btns}>
          <div css={btnContainer}>
            <Button
              txt={`クリア`}
              color={Color.black}
              border
              borderRadius
              onClick={(e: any) => { clear(e.target) }}
            />
          </div>
          <div css={btnContainer}>
            <Button txt={`検索`} color={Color.white} border borderRadius backgroundColor={Color.purple} />
          </div>
        </div>
      </form>
      <div css={pageNation.right}>
        <PageNation
          currentPage={currentPage}
          upperPageBound={upperPageBound}
          paginate={paginate}
          totalPage={totalPage}
          startPage={startPage}
          endPage={endPage}
          href={path}
          setCurrentPage={setCurrentPage}
          backgroundColor={Color.black}
          firstAndLast={true}
          borderRound={20}
        />
      </div>
      <table css={table.continer} >
        <thead>
          <tr>
            <th css={table.td}>ID</th>
            <th css={table.td}>氏名</th>
            <th css={table.td}>会社名</th>
            <th css={table.td}>都道府県</th>
            <th css={table.td}>登録日</th>
            <th css={table.td}>対象</th>
            <th css={table.td}>最終ログイン日</th>
            <th css={table.td}>有効/無効</th>
            <th css={table.td}>操作</th>
          </tr>
        </thead>
        <tbody css={table.tbody}>
          {userList}
        </tbody>
      </table>
      <div css={pageNation.center}>
        <PageNation
          currentPage={currentPage}
          upperPageBound={upperPageBound}
          paginate={paginate}
          totalPage={totalPage}
          startPage={startPage}
          endPage={endPage}
          setCurrentPage={setCurrentPage}
          href={path}
          backgroundColor={Color.black}
          firstAndLast={true}
          borderRound={20}
        />
      </div>
    </>
  )
}

export default UserList