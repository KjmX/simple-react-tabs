import * as React from 'react'
import styled from 'styled-components'

export const TAB_ROLE = 'tab'

const StyledTab = styled.li`
  flex: 0 0 140px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => props.active ? "green" : "black"};
  transition: transform .2s;
  
  :hover {
    transform: scale(1.1);
  }
`

const Tab = ({ children, id, selected }) => (
  <StyledTab role={TAB_ROLE} id={id} active={selected}>{children}</StyledTab>
)

export default Tab
