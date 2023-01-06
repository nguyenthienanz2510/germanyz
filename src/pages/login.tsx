import { Form, Formik, FormikHelpers } from 'formik'
import Lottie from 'lottie-react'
import tw from 'twin.macro'
import * as Yup from 'yup'
import rocket_json from '../assets/lottie/rocket.json'
import { ButtonPrimary } from '../components/Buttons'
import { Container } from '../components/Common/Container'
import { Heading1 } from '../components/Common/Text/Heading'
import InputField from '../components/Form/InputField'
import { useLoadingContext } from '../context/loading'
import {
  LoginInput, useLoginMutation
} from '../generated/graphql'

const Login = () => {
  const initialValues: LoginInput = { username: '', password: '' }
  const { setLoading } = useLoadingContext()

  const DisplayingErrorMessagesSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string().required('Required'),
  })

  const [loginUser, { loading, data, error }] = useLoginMutation()
  setLoading(loading)

  const loginHandler = async (
    dataLogin: LoginInput,
    { setErrors }: FormikHelpers<LoginInput>,
  ) => {
    try {
      const response = await loginUser({
        variables: {
          loginInput: dataLogin,
        },
      })
      console.log('RESPONSE', response)
    } catch (err: any) {
      console.log('ERROR ==> ', err?.message)
      setErrors({
        username:
          err?.message.includes('invalid_username') && 'Invalid username',
        password:
          err?.message.includes('incorrect_password') && 'Incorrect password',
      })
    }
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
                  formikHelpers: FormikHelpers<LoginInput>,
                ) => {
                  loginHandler(dataLogin, formikHelpers)
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
