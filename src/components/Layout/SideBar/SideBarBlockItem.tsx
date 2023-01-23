import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface SideBarItemProp {
  children: ReactNode
}

const SidebarBlockItem: React.FC<SideBarItemProp> = ({ children }) => {
  return (
    <SideBarItemWrapper className="min-h-[200px] mb-5 rounded-lg py-3 px-4 transition-all bg-color-white dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
      {children}
    </SideBarItemWrapper>
  )
}

export default SidebarBlockItem

const SideBarItemWrapper = styled.div`
  box-shadow: ${props => props.theme.colors.shadow_gray};
`
