import tw from 'twin.macro'
import ButtonChangeTheme from './ButtonChangeTheme'
import HeaderNav from './HeaderNav'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container mx-auto flex justify-between items-center">
        <PageTitle>
          <PageName>Germanyz</PageName>
        </PageTitle>
        <HeaderNav/>
        <ButtonChangeTheme />
      </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = tw.div`
    h-16 bg-white flex items-center shadow-inner border-b 
    dark:border-0 dark:bg-color-bg-dark-primary
`

const PageTitle = tw.div`
  flex items-center
`

const PageName = tw.span`
  text-2xl text-color-text-primary 
`
