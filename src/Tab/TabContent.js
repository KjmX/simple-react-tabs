import * as React from 'react'
import styled, { css } from 'styled-components'

const StyledTabContent = styled.div`
    ${(props) => !props.active && css`
        display: none;
    `}
`

const TabContent = ({ children, id, selected }) => (
    <StyledTabContent id={id} active={selected}>{children}</StyledTabContent>
)

export default TabContent
