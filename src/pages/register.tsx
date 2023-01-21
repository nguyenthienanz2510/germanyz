// import { Form, Formik, FormikHelpers } from 'formik'
// import Lottie from 'lottie-react'
// import Link from 'next/link'
// import { useRouter } from 'next/router'
// import * as Yup from 'yup'
// import rocket_json from '../assets/lottie/rocket.json'
// import { ButtonPrimary } from '../components/Buttons'
// import InputField from '../components/Form/InputField'
// import { useLoadingContext } from '../context/loading'
// import { LoginInput } from '../generated/graphql'

const Register = () => {
  return <p className='text-center mt-10'>Page does not exist</p>
  // const { setLoading } = useLoadingContext()
  // const router = useRouter()
  // const initialValues: LoginInput = { username: '', password: '' }

  // const DisplayingErrorMessagesSchema = Yup.object().shape({
  //   username: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   password: Yup.string().required('Required'),
  // })

  // const [loginUser, { loading, data, error }] = useLoginMutation()
  // setLoading(loading)

  // const registerHandler = async (
  //   dataLogin: LoginInput,
  //   { setErrors }: FormikHelpers<LoginInput>,
  // ) => {
    //   const { postType, previewPostId } = router?.query ?? {}
    //   setLoading(true)
    //   try {
    //     const response = await axios({
    //       data: dataLogin,
    //       method: 'post',
    //       url: '/api/login',
    //     })
    //     const { success, error } = response.data ?? {}
    //     // If has errors
    //     if (!success) {
    //       setErrors({
    //         username:
    //           error?.message.includes('invalid_username') && 'Invalid username',
    //         password:
    //           error?.message.includes('incorrect_password') &&
    //           'Incorrect password',
    //       })
    //     }
    //     // If its a preview request
    //     if (success && postType && previewPostId) {
    //       const previewUrl = getPreviewRedirectUrl(postType, previewPostId)
    //       router.push(previewUrl)
    //     }
    //     success && router.push('/')
    //     setLoading(false)
    //   } catch (err) {
    //     console.log(err)
    //     setLoading(false)
    //   }
  // }
  // return (
  //   <>
  //     <div className="container md:h-screen flex items-center">
  //       <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center">
  //         <div className="md:w-1/2">
  //           <Lottie animationData={rocket_json} loop={true} />
  //         </div>
  //         <div className="md:w-1/2 px-5 mt-28 md:mt-0 md:px-0 md:items-center">
  //           <div className='w-full md:max-w-[360px]'>
  //             <h1 className="m-0 text-color-primary">Register</h1>
  //             <Formik
  //               initialValues={initialValues}
  //               validationSchema={DisplayingErrorMessagesSchema}
  //               onSubmit={(
  //                 dataLogin,
  //                 formikHelpers: FormikHelpers<LoginInput>,
  //               ) => {
  //                 registerHandler(dataLogin, formikHelpers)
  //               }}
  //             >
  //               {() => {
  //                 return (
  //                   <>
  //                     <Form>
  //                       <InputField
  //                         name="username"
  //                         label="Username"
  //                         type="text"
  //                       />
  //                       <InputField
  //                         name="password"
  //                         label="Password"
  //                         type="password"
  //                       />
  //                       <Link
  //                         href="/login"
  //                         className="text-color-primary underline mr-4"
  //                       >
  //                         Login
  //                       </Link>
  //                       <ButtonPrimary
  //                         type="submit"
  //                         className="mt-5"
  //                       >
  //                         Register
  //                       </ButtonPrimary>
  //                     </Form>
  //                   </>
  //                 )
  //               }}
  //             </Formik>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
}

export default Register