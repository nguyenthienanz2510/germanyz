import { Form, Formik, FormikHelpers } from 'formik'
import Lottie from 'lottie-react'
import tw from 'twin.macro'
import rocket_json from '../assets/lottie/rocket.json'
import { ButtonPrimary } from '../components/Buttons'
import { Container } from '../components/Common/Container'
import InputField from '../components/Form/InputField'
import { Heading1 } from '../components/Common/Text/Heading'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useLoadingContext } from '../context/loading'
import * as Yup from 'yup'
import { useAppContext } from '../context/appContext'
import { loginMutation } from '../graphql-client/mutations/mutations.graphql'
import { useMutation } from '@apollo/client'

const Login = () => {
  const { state, dispatch } = useAppContext()

  const initialValues = { username: '', password: '' }
  const router = useRouter()
  const { setLoading } = useLoadingContext()

  state.user?.token && router.push('/')

  interface DataLogin {
    username: string
    password: string
  }

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string().required('Required'),
  })

  interface UserMutationResponse {
    authToken: string,
    refreshToken: string,
    user: string
  }

  interface LoginUserInput {
    username: string,
    password: string
  }

  const [loginUser, {loading ,data, error}] = useMutation<
    {login: UserMutationResponse},
    {loginInput: LoginUserInput}
  >(loginMutation)
  console.log('LOADING==>', loading)
  console.log('DATA==>', data)
  console.log('ERROR==>', error)
  setLoading(loading)
  
  const loginHandler = (dataLogin: DataLogin, setErrors: any) => {
    loginUser({
      variables: {
        loginInput: dataLogin
      }
    })
    // const postLoginRequest = async () => {
    //   setLoading(true)
    //   console.log(dataLogin)
    //   try {
    //     const res = await axios.post(
    //       `${process.env.NEXT_PUBLIC_WP_SITE_URL}/wp-json/jwt-auth/v1/token`,
    //       dataLogin,
    //     )
    //     dispatch({type: "SET_USER_INFO", value: res.data})
    //     setLoading(false)
    //   } catch (err: any) {
    //     setErrors({
    //       username:
    //         err?.response?.data.message.includes('The username') &&
    //         'Invalid username',
    //       password:
    //         err?.response?.data.message.includes('The password') &&
    //         'Invalid password',
    //     })
    //     setLoading(false)
    //   }
    // }
    // postLoginRequest()
  }

  return (
    <>
      <Container className="md:h-screen flex items-center">
        <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="md:w-1/2">
            <Lottie animationData={rocket_json} loop={true} />
          </div>
          <div className="md:w-1/2 px-5 mt-28 md:mt-0 md:px-0 md:items-center">
            <FormWrapper>
              <Heading1 className="m-0 text-color-text-primary">Login</Heading1>
              <Formik
                initialValues={initialValues}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={(
                  dataLogin,
                  { setErrors }: FormikHelpers<DataLogin>,
                ) => {
                  loginHandler(dataLogin, setErrors)
                }}
              >
                {() => {
                  return (
                    <>
                      <Form>
                        <InputField
                          name="username"
                          label="Username"
                          type="text"
                        />
                        <InputField
                          name="password"
                          label="Password"
                          type="password"
                        />
                        <ButtonPrimary type="submit" className="mt-5">
                          Login
                        </ButtonPrimary>
                      </Form>
                    </>
                  )
                }}
              </Formik>
            </FormWrapper>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Login

const FormWrapper = tw.div`w-full md:max-w-[360px]`
