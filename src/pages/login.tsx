import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import InputField from '../components/Form/InputField';
import { Heading1 } from '../components/Text/Heading';
import { FormWrapper } from '../components/Wrapper';

const Login = () => {
  const initialValues = { username: '', password: '' };
  return (
    <FormWrapper>
      <Heading1>Login</Heading1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {() => {
          return (
            <>
              <Form>
                <InputField name="username" label="Username" type="text" />
                <InputField name="password" label="Password" type="password" />
                <Button
                  variant="contained"
                  type="submit"
                  sx={{ marginTop: '1rem', padding: '8px 20px' }}
                >
                  Login
                </Button>
              </Form>
            </>
          );
        }}
      </Formik>
    </FormWrapper>
  );
};

export default Login;
