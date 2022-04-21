import { useState } from 'react';
import { IconButton, InputAdornment, OutlinedTextFieldProps, TextField } from "@mui/material";
import { VisibilityOff, Visibility } from '@mui/icons-material';

interface InputPasswordProps extends OutlinedTextFieldProps {};

const InputPassword = (props: InputPasswordProps) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
};

export default InputPassword;