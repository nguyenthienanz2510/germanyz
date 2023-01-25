import Image from "next/legacy/image";
import Link from 'next/link'
import { useRouter } from 'next/router'
import { styled } from 'twin.macro'
import BallIcon from "../../../../assets/images/icon/ball.svg"
import CupIcon from "../../../../assets/images/icon/cup.svg"
import AceIcon from "../../../../assets/images/icon/ace.svg"
import DiceIcon from "../../../../assets/images/icon/dice.svg"

const MobileNav = () => {
  const router = useRouter()

  const menu = [
    {
      name: 'Home',
      path: '/',
      icon: BallIcon
      // icon: 'https://img.fabet.cc/static/assets/images/components/header/sport.svg',
    },
    {
      name: 'About us',
      path: '/about-us',
      icon: CupIcon
      // icon: 'https://img.fabet.cc/static/assets/images/components/header/event.svg',
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: AceIcon
      // icon: 'https://img.fabet.cc/static/assets/images/components/header/game-bai.svg',
    },
    {
      name: 'Shop',
      path: '/shop',
      icon: DiceIcon
      // icon: 'https://img.fabet.cc/static/assets/images/components/header/quick-game.svg',
    },
  ]

  return (
    <div>
      <ul className="flex flex-wrap items-center h-20 justify-between">
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="block rounded-lg h-20 px-5 py-5 min-w-[64px] text-center hover:bg-[linear-gradient(180deg,#0DABFF,#ffffff)] dark:hover:bg-[linear-gradient(180deg,#001f5c,#000b27)]"
                key={index}
                href={item.path}
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={48}
                    height={48}
                  />
                  <NavLinkSpan
                    className={router.pathname == item.path ? 'active' : ''}
                  >
                    {item.name}
                  </NavLinkSpan>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MobileNav

const NavLinkSpan = styled.span`
  &.active {
    color: ${props => props.theme.colors.primary};
  }
`
