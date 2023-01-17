import Image from 'next/image'
import Link from 'next/link'
import ButtonChangeTheme from './ButtonChangeTheme'
import HeaderNav from './HeaderNav'
import UserInfo from './UserInfo'

const Header = () => {
  return (
    <div className="sticky z-[1000] top-0 left-0 right-0 flex items-center border-b border-gray-100 dark:border-color-bg-dark-secondary bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,11,39,0.8)] backdrop-blur-md">
      <div className="container flex items-center justify-between h-20">
        <div className="header__left">
          <Link href="/">
            <div className="flex items-center h-[40px] w-[200px] mr-2 relative">
              <Image src="/logo.svg" alt="logo" fill />
            </div>
          </Link>
        </div>
        <div className="header__right flex justify-end items-center">
          <HeaderNav />
          <ButtonChangeTheme />
          <UserInfo />
        </div>
      </div>
    </div>
  )
}

export default Header
