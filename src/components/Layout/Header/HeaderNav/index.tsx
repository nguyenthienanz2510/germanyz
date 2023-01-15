import Link from 'next/link'
import tw from 'twin.macro'

const HeaderNav = () => {
  const menu = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About us',
      path: '/about-us',
    },
    {
      name: 'Blog',
      path: '/blog',
    },
    {
      name: 'Shop',
      path: '/shop',
    },
  ]

  return (
    <HeaderNavContainer>
      <HeaderNavList>
        {menu.map((item, index) => {
          return (
            <li>
              <NavLink className='hover:bg-[linear-gradient(180deg,#001f5c,#000b27)]' key={index} href={item.path}>
                <div className="flex flex-col items-center">
                  <img
                    src="https://img.fabet.cc/static/assets/images/components/header/sport.svg"
                    alt="{item.name}"
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
  block h-20 px-2 py-4 min-w-[60px]
`
