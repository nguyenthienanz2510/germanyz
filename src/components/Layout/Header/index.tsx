import Image from 'next/legacy/image'
import Link from 'next/link'
import ButtonChangeTheme from './ButtonChangeTheme'
import HeaderNav from './HeaderNav'
import UserInfo from './UserInfo'
import ViewListIcon from '@mui/icons-material/ViewList'
import ChatIcon from '@mui/icons-material/Chat'
import styled from 'styled-components'
import { useState } from 'react'
import MobileNav from './MobileNav'

const Header = () => {
  const [showMobileMenu, setMobileMenu] = useState(false)
  return (
    <div className="sticky z-[1000] top-0 left-0 right-0 flex items-center border-b border-gray-100 dark:border-color-bg-dark-secondary bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,11,39,0.8)] backdrop-blur-md">
      <div className="container flex items-center justify-between h-20">
        <button
          className="flex lg:hidden cursor-pointer"
          onClick={() => {
            showMobileMenu ? setMobileMenu(false) : setMobileMenu(true)
          }}
        >
          <ViewListIcon className="w-10 h-10 text-color-primary" />
        </button>
        <div className="">
          <Link href="/">
            <div className="flex items-center h-[40px] w-[200px] mr-2 relative">
              <Image
                src="/logo.svg"
                alt="logo"
                layout="fill"
                sizes="200px"
                priority
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <ChatIcon className="w-10 h-10 text-color-primary" />
        </div>
        <div className="hidden lg:flex justify-end items-center">
          <HeaderNav />
          <ButtonChangeTheme />
          <UserInfo />
        </div>
        <MobileMenu
          className={
            (showMobileMenu ? 'showMobileMenu' : 'hideMobileMenu') +
            ' bg-white dark:bg-black z-[1000]'
          }
          onClick={() => {
            showMobileMenu && setMobileMenu(false)
          }}
        >
          <div className="container">
            <div className="flex mb-5">
              <UserInfo />
              <ButtonChangeTheme />
            </div>
            <MobileNav />
          </div>
        </MobileMenu>
      </div>
    </div>
  )
}

export default Header

const MobileMenu = styled.div`
  padding: 20px 0;
  position: fixed;
  top: 80px;
  height: calc(100vh - 80px);
  left: 0;
  right: 0;
  transition: all linear 0.3s;
  &.showMobileMenu {
    transform: translateX(0);
    opacity: 1;
  }
  &.hideMobileMenu {
    transform: translateX(-100%);
    opacity: 0;
  }
`
