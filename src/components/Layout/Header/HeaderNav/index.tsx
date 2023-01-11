import Link from "next/link"
import tw from "twin.macro"

const HeaderNav = () => {

  const menu = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'About us',
      path: '/about-us'
    },
    {
      name: 'Blog',
      path: '/blog'
    },
    {
      name: 'Shop',
      path: '/shop'
    }
  ]

  return (
    <HeaderNavContainer>
        {
          menu.map((item, index) => { 
            return <NavLink key={index} href={item.path}>{item.name}</NavLink>
          })
        }
    </HeaderNavContainer>
  )
}

export default HeaderNav

const HeaderNavContainer = tw.div`
    flex items-center mx-10 flex-1 justify-items-start
`

const NavLink = tw(Link)`
    mx-2 hover:text-color-primary
`