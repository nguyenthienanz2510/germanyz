import Link from "next/link"
import tw from "twin.macro"

const HeaderNav = () => {
  return (
    <HeaderNavContainer>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/about-us'>About us</NavLink>
        <NavLink href='/shop'>Shop</NavLink>
        <NavLink href='/blog'>Blog</NavLink>
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