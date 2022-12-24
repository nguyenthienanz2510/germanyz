import { Button } from '@mui/material';
import { Form, Formik } from 'formik';
import InputField from '../components/Form/InputField';
import { Heading1 } from '../components/Common/Text/Heading';
import { FormWrapper } from '../components/Wrapper';

const Register = () => {
  return (
    <FormWrapper>
      <Heading1>Register</Heading1>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {() => {
          return (
            <>
              <Form>
                <InputField
                  name="username"
                  label="Username"
                  type='text'
                />
                <InputField
                  name="password"
                  label="Password"
                  type="password"
                />
                <Button variant='contained' type='submit' sx={{marginTop: '1rem', padding: '8px 20px'}}>Register</Button>
              </Form>
            </>
          );
        }}
      </Formik>
    </FormWrapper>
  );
};

export default Register;
