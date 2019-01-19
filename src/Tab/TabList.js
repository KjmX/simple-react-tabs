import * as React from 'react'
import styled from 'styled-components'

const StyledTabList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
`

const TabList = ({ children }) => (
  <StyledTabList>{children}</StyledTabList>
)

export default TabList
