import React from 'react';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

interface TextFieldProps {
    form: any;
    name: string;
    placeholder: string;
    validator?: any;
    type: 'text' | 'email';
    isTop?: boolean;
    isBorder?: boolean;
}

const PayInput: React.FC<TextFieldProps> = ({ isTop, form, name, placeholder, validator, type = 'text', isBorder }) => {
    const { errors } = form.formState;
    const error = errors[name] ? errors[name] : null;

    const errType: string = error?.type;
    let helperText: string = '';
    if (errType === 'required') {
        helperText = `${name} is required`;
    }

    return (
        <Controller
            name={name}
            control={form.control}
            rules={validator}
            render={({ field }) => {
                return (
                    <TextField
                        helperText={helperText.charAt(0).toUpperCase() + helperText.slice(1)}
                        {...field}
                        id='standard-basic'
                        placeholder={placeholder}
                        variant='standard'
                        fullWidth
                        type={type}
                        sx={{
                            mt: isTop ? '10px' : null,
                            '& .MuiInputBase-input': {
                                fontSize: '16px',
                                padding: '20px',
                                borderLeft: isBorder ? '1px solid #CCC' : null
                            },
                            '& .MuiFormLabel-root': {
                                fontSize: '12px',
                                fontWeight: 600,
                                color: '#949494'
                            },
                            '& .MuiFormHelperText-root': {
                                color: 'red',
                                fontWeight: 600,
                                padding: '10px'
                            },
                            '& .MuiInputBase-input::placeholder': {
                                fontSize: '16px',
                                color: '#8E8E8E',
                                fontWeight: 400
                            }
                        }}
                    />
                );
            }}
        />
    );
};

export default PayInput;
