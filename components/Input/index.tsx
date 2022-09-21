import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

interface InputProps {
    name: string;
    form: any;
    placeholder: string;
    type?: 'standart' | 'number' | 'password';
    helperText: string;
    color?: 'primary' | 'secondary';
}

const Input: React.FC<InputProps> = ({ name, form, placeholder, type = 'standart', helperText, color = 'primary' }) => {
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => {
                const background = color === 'primary' ? '#A54CE5' : '#F4F1FF';
                return (
                    <TextField
                        sx={{
                            '& .MuiInputBase-input': {
                                background,
                                textAlign: 'center'
                            },
                            '& .MuiInput-root': {
                                background,
                                borderRadius: '5px',
                                height: '50px',
                                padding: '10px 20px',
                                width: '100%'
                            },
                            '& .MuiFormHelperText-root': {
                                color: 'rgba(0, 0, 0, 0.7)',
                                fontSize: ' 18px',
                                marginTop: '10px',
                                '&.Mui-error': {
                                    color: '#CD1719'
                                }
                            }
                        }}
                        placeholder={placeholder}
                        type={type}
                        {...field}
                        fullWidth
                        InputProps={{ id: `input-${name}`, disableUnderline: true }}
                        helperText={helperText}
                    />
                );
            }}
        />
    );
};

export default Input;
