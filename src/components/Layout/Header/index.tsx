import tw from 'twin.macro'
import ButtonChangeTheme from './ButtonChangeTheme'

const Header = () => {
  return (
    <HeaderContainer>
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-center bg-color-success dark:bg-orange-400">
          Header
        </span>
        <ButtonChangeTheme />
      </div>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = tw.div`
    h-16 bg-white dark:bg-color-gray-rgba-06 flex items-center shadow-inner border-b dark:border-0
`
