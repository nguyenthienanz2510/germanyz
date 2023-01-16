import Link from 'next/link'
import tw from 'twin.macro'

const HeaderNav = () => {
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
    <HeaderNavContainer>
      <HeaderNavList>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className='hover:bg-[linear-gradient(180deg,#0DABFF,#ffffff)] dark:hover:bg-[linear-gradient(180deg,#001f5c,#000b27)]' key={index} href={item.path}>
                <div className="flex flex-col items-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                  />
                  <span>{item.name}</span>
                </div>
              </NavLink>
            </li>
          )
        })}
      </HeaderNavList>
    </HeaderNavContainer>
  )
}

export default HeaderNav

const HeaderNavContainer = tw.div`

`

const HeaderNavList = tw.ul`
  mr-6 flex items-center h-20 gap-4
`

const NavLink = tw(Link)`
  block h-20 px-2 py-4 min-w-[64px] text-center
`
