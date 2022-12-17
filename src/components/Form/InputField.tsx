import { FormControl, TextField } from '@mui/material';
import { useField } from 'formik';

interface InputFieldProps {
  name: string;
  label: string;
  type: string;
}

const InputField = (props: InputFieldProps) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl fullWidth sx={{ marginTop: '1rem' }}>
      <TextField
        variant="outlined"
        id={field.name}
        {...field}
        {...props}
      />
      {error && <span>{error}</span>}
    </FormControl>
  );
};

export default InputField;
