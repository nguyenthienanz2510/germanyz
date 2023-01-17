import { NextPage } from 'next'
import styled from 'styled-components'

const SideBarItem: NextPage = () => {
  return (
    <SideBarItemWrapper className="bg-color-white dark:bg-color-bg-dark-secondary dark:hover:bg-color-bg-dark-secondary-active">
      <span>Premier League</span>
    </SideBarItemWrapper>
  )
}

export default SideBarItem

const SideBarItemWrapper = styled.div`
    min-height: 420px;
    margin-bottom: 20px;
    border-radius: 8px;
    padding: 10px;
    transition: all linear 0.3s;
    box-shadow:  ${props => props.theme.colors.border_gray};
`