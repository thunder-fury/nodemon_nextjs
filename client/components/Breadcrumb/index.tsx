
import { css } from '@emotion/react'
import { render } from '../../utils/Router'
import { useRouter } from 'next/router'
import { Media } from '../../styles/Variables'
interface BreadcrumbProps {
  page?: string
}
export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  page
}) => {
  const router = useRouter()
  const pathname = router.pathname
  const stringArray = pathname.split('/');
  let prams = stringArray[stringArray.length - 2]
  return (
    <div css={Breadcrumbs.box}>
      <ul css={Breadcrumbs.inner}>
        {/* <li css={Breadcrumbs.list} itemScope itemType="http://data-vocabulary.org/Breadcrumb">
          <p css={Breadcrumbs.txtLink}
            onClick={() => { render('/dashboard') }}
            itemProp="title">ダッシュボード
          </p>
        </li> */}
        {
          (() => {
            if (stringArray.length > 2) {
              // if (prams != 'business' && prams != 'form') {
              //   return (
              //     <li css={Breadcrumbs.list} itemScope itemType="http://data-vocabulary.org/Breadcrumb" >
              //       <p css={Breadcrumbs.txtLink} itemProp="url"
              //         onClick={() => { render('/business/life-support') }}
              //       >
              //         <span itemProp="title">
              //           {prams == 'life-support' ? prams = 'ライフ事業' : ''}
              //         </span>
              //       </p>
              //     </li>
              //   )
              // }
            }
          })()
        }
        <li css={Breadcrumbs.list} itemScope itemType="http://data-vocabulary.org/Breadcrumb" >
          <p itemProp="url" >
            <span itemProp="title">
              {page}
            </span>
          </p>
        </li>
      </ul>
    </div>
  )
}

const Breadcrumbs = {
  box: css`
    max-width: 1180px;
    width: 100%;
    padding: 0 5%;
    ${Media.mq} {
      padding: 0;
    }
  `,
  inner: css`
    display: flex;
    list-style: none;
  `,
  list: css`
    display: flex;
    &:not(:last-of-type) {
      &:after {
        content: '>';
        padding: 0 20px;
      }
    }
  `,
  txtLink: css`
    cursor: pointer;
    text-decoration: underline;
  `
}


export default Breadcrumb

