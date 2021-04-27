import React from 'react'
import styled from 'styled-components'
import {render} from '../../utils/Router'
import { useRouter } from 'next/router'
import { sp } from '../../styles/Media'
const BreadcrumbLists = styled.div`
  max-width: 1180px;
  width: 100%;
  margin: 100px auto 0;
  ${sp`
    padding: 0 5%;
  `}

`
interface BreadcrumbProps {
  page?: string
}
const BreadcrumbListsInner = styled.ul`
  display: flex;
  list-style: none;
`
const BreadcrumbList = styled.li`
  display: flex;
  &:not(:last-of-type) {
    &:after {
      content: '>';
      padding: 0 20px;
    }
  }
`

const TxtLink = styled.p`
  cursor: pointer;
  text-decoration: underline;
`


export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  page
}) => {
  const router = useRouter()
  const pathname = router.pathname
  const stringArray = pathname.split ('/');
  let prams = stringArray [stringArray.length -2]
  return(
    <BreadcrumbLists>
      <BreadcrumbListsInner>
        <BreadcrumbList itemScope itemType="http://data-vocabulary.org/Breadcrumb">
          <TxtLink 
            onClick={() => { render('/')}}
            itemProp="title">トップページ
          </TxtLink>
        </BreadcrumbList>
        {
          (() => {
            if(stringArray.length > 2) {
              if(prams != 'business' && prams != 'form') {
                return(
                  <BreadcrumbList itemScope itemType="http://data-vocabulary.org/Breadcrumb" >
                    <TxtLink itemProp="url" 
                      onClick={() => { render('/business/life-support')}}
                    >
                        <span itemProp="title">
                          {prams == 'life-support' ? prams = 'ライフ事業' : ''}
                        </span>
                      </TxtLink>
                  </BreadcrumbList>
                )
              }
            }
          })()
        }
        <BreadcrumbList itemScope itemType="http://data-vocabulary.org/Breadcrumb" >
          <p itemProp="url" >
              <span itemProp="title">
                {page}
              </span>
            </p>
        </BreadcrumbList>
      </BreadcrumbListsInner>
    </BreadcrumbLists>
  )
}


export default Breadcrumb

