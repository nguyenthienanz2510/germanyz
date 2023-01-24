import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { styled } from "twin.macro"


const HeaderNav = () => {

  const router = useRouter()

  const menu = [
    {
      name: 'Home',
      path: '/',
      icon: 'https://img.fabet.cc/static/assets/images/components/header/sport.svg'
    },
    {
      name: 'About us',
      path: '/about-us',
      icon: 'https://img.fabet.cc/static/assets/images/components/header/event.svg'
    },
    {
      name: 'Blog',
      path: '/blog',
      icon: 'https://img.fabet.cc/static/assets/images/components/header/game-bai.svg'
    },
    {
      name: 'Shop',
      path: '/shop',
      icon: 'https://img.fabet.cc/static/assets/images/components/header/quick-game.svg'
    },
  ]

  return (
    <div>
      <ul className="mr-6 flex items-center h-20 gap-4">
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <Link className='block h-20 px-2 py-4 min-w-[64px] text-center hover:bg-[linear-gradient(180deg,#0DABFF,#ffffff)] dark:hover:bg-[linear-gradient(180deg,#001f5c,#000b27)]' key={index} href={item.path}>
                <div className="flex flex-col items-center">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={32}
                    height={32}
                  />
                  <NavLinkSpan className={router.pathname == item.path ? 'active' : ''}>{item.name}</NavLinkSpan>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HeaderNav

const NavLinkSpan = styled.span`
  &.active {
    color: ${props => props.theme.colors.primary}
  }
`
