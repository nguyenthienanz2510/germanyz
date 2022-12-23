import { Form, Formik } from 'formik'
import Lottie from "lottie-react"
import tw from 'twin.macro'
import rocket_json from "../assets/lottie/rocket.json"
import { ButtonPrimary } from '../components/Buttons'
import { Container } from '../components/Common/Container'
import InputField from '../components/Form/InputField'
import { Heading1 } from '../components/Text/Heading'

const Login = () => {
  const initialValues = { username: '', password: '' }
  return (
    <Container className="h-screen flex items-center">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="hidden md:flex items-center justify-center">
          <Lottie animationData={rocket_json} loop={true} />
        </div>
        <div className="flex items-center w-full">
          <FormWrapper>
            <Heading1 className='m-0'>Login</Heading1>
            <Formik
              initialValues={initialValues}
              onSubmit={values => console.log(values)}
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
                      <ButtonPrimary type='submit' className='mt-4'>
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
  )
}

export default Login

const FormWrapper = tw.div`w-full md:max-w-[360px]`