/* eslint-disable no-unused-vars */
import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

interface InputUnderlineProps {
    name: string;
    form: any;
    placeholder: string;
    type?: 'number' | 'text';
}

const InputUnderline: React.FC<InputUnderlineProps> = ({ name, form, placeholder, type = 'text' }) => {
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => {
                return (
                    <TextField
                        fullWidth
                        type={type}
                        {...field}
                        label={placeholder}
                        variant='standard'
                        InputLabelProps={{ shrink: true }}
                        sx={{
                            marginTop: '18px',
                            '& .MuiFormLabel-root': {
                                color: '#949494',
                                fontWeight: 600,
                                fontSize: '12px'
                            },
                            '& .MuiInputBase-root': {
                                fontWeight: 600
                            },
                            '& .MuiInputBase-root:after': {
                                borderBottom: '2px solid #A54CE5'
                            }
                        }}
                    />
                );
            }}
        />
    );
};

export default InputUnderline;
