import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ButtonPrimary, ButtonSecondary } from '../../../Buttons'
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
    dispatch({ type: 'REMOVE_USER_INFO' })
    router.push('/login')
  }
  return (
    <>
      {userDisplayName ? (
        <div className="flex justify-center items-center">
          <span className="capitalize ml-2">{userDisplayName}</span>
          <IconButton onClick={logoutHandler}>
            <LogoutIcon className="cursor-pointer dark:text-color-text-light light:text-color-text-dark hover:text-color-primary" />
          </IconButton>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Link href="/register">
            <ButtonSecondary className="mx-2">
              Register
            </ButtonSecondary>
          </Link>
          <Link href="/login">
            <ButtonPrimary>
              Login
            </ButtonPrimary>
          </Link>
        </div>
      )}
    </>
  )
}

export default UserInfo
