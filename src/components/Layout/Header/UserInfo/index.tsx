import Link from 'next/link'
import { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { localStorageService } from '../../../../services/localStorageService'
import { ButtonPrimary, ButtonSecondary } from '../../../Buttons'
import { FlexWrapper } from '../../../Common/Layout'
import LogoutIcon from '@mui/icons-material/Logout'
import { useRouter } from 'next/router'
import { IconButton } from '@mui/material'

const UserInfo = () => {
  const [userDisplayName, setUserDisplayName] = useState()
  const router = useRouter()
  useEffect(() => {
    const userInfo = localStorageService.getUserInfo()
    setUserDisplayName(userInfo?.user_display_name)
  }, [])
  const logoutHandler = () => {
    localStorageService.removeUserInfo()
    router.push('/login')
  }
  return (
    <>
      {userDisplayName ? (
        <FlexWrapper>
          <UserName>{userDisplayName}</UserName>
          <IconButton>
            <UserLogoutIcon onClick={logoutHandler} />
          </IconButton>
        </FlexWrapper>
      ) : (
        <FlexWrapper>
          <Link href="/register">
            <ButtonSecondary className="mx-2">Register</ButtonSecondary>
          </Link>
          <Link href="/login">
            <ButtonPrimary>Login</ButtonPrimary>
          </Link>
        </FlexWrapper>
      )}
    </>
  )
}

export default UserInfo

const UserName = tw.span`capitalize ml-2`

const UserLogoutIcon = tw(LogoutIcon)`
    cursor-pointer dark:text-color-text-light light:text-color-text-dark hover:text-color-primary
`
