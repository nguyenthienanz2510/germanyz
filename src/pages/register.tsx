import { Formik, Form } from 'formik';

const Register = () => {
  return (
    <Formik initialValues={{ username: '', password: '' }}>
      {({ values }) => {
        console.log(values)
        return (<Form></Form>)
      }}
    </Formik>
  );
};

export default Register;
