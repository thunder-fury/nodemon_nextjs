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
export const MailMagazineList: React.FC<Props> = ({
}) => {
  const router = useRouter();
  const [userLists, setUserList]: any = useState([])
  const [loading, setLoading] = useState(false)
  const [postTotalList, setPostTotalList] = useState(10)
  const [postsPerList, setpostsPerList] = useState(3)
  const [currentPage, setCurrentPage]: any = useState(null)
  const [upperPageBound, setUpperPageBound] = useState(1)
  const [path, setPath] = useState(``)
  //search parameter
  const [mailaddress, setMailaddress] = useState(``)
  const [startdate, setStartdate] = useState(``)
  const [enddate, setEnddate] = useState(``)
  useEffect(() => {
    const getUserList = async () => {
      setLoading(true)
      let endPoint
      if (mailaddress || startdate || enddate) {
        endPoint = `https://stoplight.io/mocks/woo/m-a-admin:main/1755950/api/mail_magazine/?mail_address=${mailaddress}&startdate=${startdate}&enddate=${enddate}`
      } else {
        endPoint = `https://stoplight.io/mocks/woo/m-a-admin:main/1755950/api/mail_magazine/${router.query.id}`
      }
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
  const userList = userLists.data && userLists.data.map((userList: any) => {
    return (
      <tr css={table.tr} key={userList.id}>
        <td css={table.td}>{userList.id}</td>
        <td css={table.td}>{userList.mail_address}</td>
        <td css={table.td}>{userList.registration_date}</td>
        <td css={table.td}>
          <button>削除</button>
        </td>
      </tr>
    )
  })
  const year = new Date().getFullYear
  for (let i = 2005; year < year; i++) {
    let element = year
    console.log(element)
  }
  const search = () => {
    console.log(`サーチ`)
    router.push({
      pathname: `/mail_magazine/page/${router.query.id}`,
      query: {
        mailaddress,
        startdate,
        enddate
      }
    })
  }
  return (
    <>
      <div css={filter.container}>
        <div css={filter.filds}>
          <InputField
            name={`key_word`}
            fildName={`キーワード`}
            placeholder={`キーワード`}
            type={'text'}
            attribute={`search-attribute`}
            value={mailaddress}
            onChange={(e: any) => { setMailaddress(e.target.value) }}
          />
          <SelectField
            name={`target`}
            options={[{ id: 1, value: `購入` }, { id: 2, value: `売却` }]}
            fildName={`開始日`}
            attribute={`search-attribute`}
            value={startdate}
            onChange={(e: any) => { setStartdate(e.target.value) }}
          />
          <SelectField
            name={`target`}
            options={[{ id: 1, value: `購入` }, { id: 2, value: `売却` }]}
            fildName={`終了日`}
            attribute={`search-attribute`}
            value={enddate}
            onChange={(e: any) => { setEnddate(e.target.value) }}
          />
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
            <Button
              txt={`検索`}
              type={`search`}
              color={Color.white}
              onClick={search}
              border
              borderRadius
              backgroundColor={Color.purple} />
          </div>
        </div>
      </div>
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
            <th css={table.td}>メールアドレス</th>
            <th css={table.td}>登録日</th>
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

export default MailMagazineList