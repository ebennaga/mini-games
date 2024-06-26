/* eslint-disable no-nested-ternary */
import { TextField, IconButton, Typography, ButtonBase } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface InputProps {
    name: string;
    form: any;
    placeholder: string;
    type?: 'text' | 'number' | 'password' | 'email' | 'tel';
    color?: 'primary' | 'secondary';
    validator?: any;
    component?: any;
    withPH?: any;
    isMatch?: boolean;
    isOTP?: boolean;
}

const Input: React.FC<InputProps> = ({
    withPH = false,
    name,
    form,
    placeholder,
    validator,
    color = 'primary',
    type = 'text',
    component,
    isMatch = false,
    isOTP = false
}) => {
    const [showPwd, setShowPwd] = React.useState<boolean>(false);

    const {
        formState: { errors }
    } = form;

    const error = errors[name] ? errors[name] : null;

    const errType: string = error?.type;

    let helperText: string = '';
    if (errType === 'maxLength') {
        helperText = `${withPH ? placeholder : name} - exceed maximum length`;
    } else if (errType === 'required') {
        helperText = `${withPH ? placeholder : name} - is required`;
    } else if (errType === 'minLength') {
        helperText = type === 'password' ? `Password minimum 6 characters` : `${withPH ? placeholder : name} - exceed minimum length`;
    }
    if (error?.message) {
        helperText = `${withPH ? placeholder : name} - ${error.message}`;
    }

    return (
        <Controller
            name={name}
            control={form.control}
            rules={validator}
            render={({ field }) => {
                const background = color === 'secondary' ? '#A54CE5' : '#F4F1FF';
                const colorText = color === 'secondary' ? '#fff' : '#373737';
                return (
                    <TextField
                        sx={{
                            '& .MuiInputBase-root': {
                                background,
                                color: colorText,
                                borderRadius: '15px',
                                height: '60px',
                                border: isMatch && isOTP ? '1px solid red' : null
                            },
                            '& .MuiInputBase-input': {
                                background,
                                paddingLeft: '20px',
                                fontWeight: 'bold',
                                fontSize: '14px',
                                borderRadius: '15px'
                            },
                            '& .MuiInput-root': {
                                background,
                                color: colorText,
                                borderRadius: '5px',
                                height: '50px',
                                padding: '30px 20px',
                                width: '100%'
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: `${background} !important`,
                                borderRadius: '15px'
                            },
                            '& .MuiFormHelperText-root': {
                                color: '#FF4242',
                                fontSize: ' 14px',
                                fontWeight: 'bold',
                                marginTop: '10px',
                                '&.Mui-error': {
                                    color: '#CD1719'
                                }
                            }
                        }}
                        placeholder={placeholder}
                        type={type === 'password' ? (showPwd ? 'text' : 'password') : type === 'tel' ? 'number' : type}
                        {...field}
                        fullWidth
                        InputProps={{
                            id: `input-${name}`,
                            // disableUnderline: true,
                            startAdornment: type === 'tel' && (
                                <Typography
                                    variant='subtitle1'
                                    component='span'
                                    fontWeight='bold'
                                    sx={{ paddingRight: 2, borderRight: '1px solid rgba(148, 148, 148, 0.2)' }}
                                >
                                    +62
                                </Typography>
                            ),
                            endAdornment:
                                type === 'password' ? (
                                    <IconButton onClick={() => setShowPwd(!showPwd)}>
                                        {!showPwd ? (
                                            <VisibilityIcon sx={{ color: '#A54CE5' }} />
                                        ) : (
                                            <VisibilityOffIcon sx={{ color: '#A54CE5' }} />
                                        )}
                                    </IconButton>
                                ) : (
                                    <ButtonBase>{component}</ButtonBase>
                                )
                        }}
                        helperText={helperText}
                        error={!!errType}
                    />
                );
            }}
        />
    );
};

export default Input;
