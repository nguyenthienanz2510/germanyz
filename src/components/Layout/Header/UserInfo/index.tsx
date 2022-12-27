import Link from 'next/link'
import { useEffect, useState } from 'react'
import tw from 'twin.macro'
import { ButtonPrimary, ButtonSecondary } from '../../../Buttons'
import { FlexWrapper } from '../../../Common/Layout'
import LogoutIcon from '@mui/icons-material/Logout'
import { useRouter } from 'next/router'
import { IconButton } from '@mui/material'
import { useAppContext } from '../../../../context/appContext'

const UserInfo = () => {
  const [userDisplayName, setUserDisplayName] = useState()
  const router = useRouter()
  const { state, dispatch } = useAppContext()
  useEffect(() => {
    setUserDisplayName(state.user?.user_display_name)
  }, [state])
  const logoutHandler = () => {
    dispatch({type: "REMOVE_USER_INFO"})
    router.push('/login')
  }
  return (
    <>
      {userDisplayName ? (
        <FlexWrapper>
          <UserName>{userDisplayName}</UserName>
          <IconButton onClick={logoutHandler} >
            <UserLogoutIcon/>
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
