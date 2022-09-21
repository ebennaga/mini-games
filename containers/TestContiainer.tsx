import Input from 'components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, ButtonBase } from '@mui/material';

const TestContiainer = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            test: ''
        }
    });
    return (
        <form>
            <Box sx={{ background: '#fff', width: '50%', padding: 5 }}>
                <Input name='test' form={form} placeholder='Testing' color='primary' type='password' validator={{ required: true }} />
            </Box>
            <ButtonBase type='submit' sx={{ fontFamily: 'Montserrat, sans-serif' }}>
                submit
            </ButtonBase>
        </form>
    );
};

export default TestContiainer;
