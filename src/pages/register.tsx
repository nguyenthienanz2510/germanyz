import { FormControl, Input, InputLabel } from '@mui/material';
import { Formik, Form } from 'formik';
import tw from 'twin.macro';
import { Heading1 } from '../components/Text/Heading';
import { FormWrapper } from '../components/Wrapper';

const Register = () => {
  return (
    <FormWrapper>
      <Heading1>Register</Heading1>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange }) => {
          return (
            <>
              <Form>
                <FormControl fullWidth tw='mt-6'>
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    id="username"
                    placeholder="Username"
                    value={values.username}
                    onChange={handleChange}
                  />
                </FormControl>
              </Form>
              <Form>
                <FormControl fullWidth tw='mt-6'>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </FormControl>
              </Form>
            </>
          );
        }}
      </Formik>
    </FormWrapper>
  );
};

export default Register;
