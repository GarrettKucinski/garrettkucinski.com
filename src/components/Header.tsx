import * as React from 'react'
import styled from '@emotion/styled'
import {transparentize} from 'polished'
import {Link} from 'gatsby'

import {heights, dimensions, colors} from '../styles/variables'
import Container from './Container'

const {white, brand} = colors
const {containerPadding} = dimensions

const StyledHeader = styled.header `
  height: ${heights.header}px
  padding: 0 ${containerPadding}rem
  background-color: ${brand}
  color: ${transparentize(0.5, white)}
`

const HeaderInner = styled(Container)`
  display: flex
  flex-direction: row
  align-items: center
  height: 100%
`

const HomepageLink = styled(Link)`
  color: ${white}
  font-size: 1.5rem
  font-weight: 600

  &:hover,
  &:focus {
    text-decoration: none
  }
`

interface HeaderProps {
  title : string
}

const Header : React.FC < HeaderProps > = ({title}) => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">{title}</HomepageLink>
    </HeaderInner>
  </StyledHeader>
)

export default Header
