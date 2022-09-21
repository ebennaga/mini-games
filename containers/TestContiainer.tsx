import Input from 'components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/material';

const TestContiainer = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            test: ''
        }
    });
    return (
        <Box sx={{ background: '#fff', width: '50%', padding: 5 }}>
            <Input name='test' form={form} placeholder='Testing' type='standart' helperText='error' color='primary' />
        </Box>
    );
};

export default TestContiainer;
