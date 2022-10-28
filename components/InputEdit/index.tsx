import { Box, ButtonBase, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import CreateIcon from '@mui/icons-material/Create';

interface InputEditProps {
    name: string;
    form: any;
    label: string;
    value?: string;
    placeholder?: string;
    disabled: boolean;
}

const InputEdit: React.FC<InputEditProps> = ({ name, form, label, value, placeholder, disabled }) => {
    const [isDisable, setIsDisable] = React.useState<boolean>(true);

    React.useEffect(() => {
        setIsDisable(disabled);
    }, [disabled]);
    React.useEffect(() => {
        form.setValue(name, value);
    }, [value]);

    return (
        <Box sx={{ width: '100%', position: 'relative' }}>
            <Typography
                component='label'
                fontSize='12px'
                fontWeight={400}
                sx={{ color: '#949494', position: 'absolute', zIndex: 90, top: '10px', left: '19px' }}
            >
                {label}
            </Typography>
            <Controller
                name={name}
                control={form.control}
                render={({ field }) => {
                    return (
                        <TextField
                            fullWidth
                            disabled={isDisable}
                            placeholder={placeholder}
                            {...field}
                            InputProps={{
                                id: `input-${name}`,
                                endAdornment:
                                    name === 'promoCode' ? (
                                        <Box />
                                    ) : (
                                        <ButtonBase onClick={() => setIsDisable(!isDisable)}>
                                            <CreateIcon sx={{ color: isDisable ? '#A54CE5' : '#BDBDBD', fontSize: '22px' }} />
                                        </ButtonBase>
                                    )
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    borderRadius: '10px',
                                    height: '73px',
                                    background: '#F4F1FF'
                                },
                                '& .MuiInputBase-input': {
                                    fontWeight: 'bold',
                                    fontSize: '20px',
                                    borderRadius: '15px',
                                    background: '#F4F1FF',
                                    paddingTop: '27px',
                                    paddingLeft: '19px',
                                    paddingBottom: '10px'
                                },
                                '& .MuiInput-root': {
                                    borderRadius: '5px',
                                    height: '50px',
                                    padding: '30px 20px',
                                    width: '100%'
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#F4F1FF !important',
                                    borderRadius: '15px'
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
                        />
                    );
                }}
            />
        </Box>
    );
};

export default InputEdit;
