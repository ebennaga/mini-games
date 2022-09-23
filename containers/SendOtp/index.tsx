import { Box, Typography } from '@mui/material';
import ButtonLanding from 'components/Button/Index';
import Input from 'components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';

const SendOtp = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            otp: ''
        }
    });

    return (
        <>
            <img src='/icons/sending-otp.svg' width={201} height={201} alt='icon sending otp' />
            <Typography variant='subtitle1' component='p' textAlign='center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.s
            </Typography>
            <Typography variant='subtitle1' component='p' sx={{ color: '#A54CE5', fontWeight: 'bold' }}>
                00:58
            </Typography>
            <form style={{ width: '100%' }}>
                <Box sx={{ width: '100%', margin: 'auto' }}>
                    <Input name='otp' form={form} placeholder='Insert OTP Number' validator={{ require }} type='number' />
                </Box>
                <Box sx={{ width: '100%', margin: 'auto', paddingTop: 3 }}>
                    <ButtonLanding title='Confirm' backgoundColor='#A54CE5' color='#fff' />
                </Box>
            </form>
        </>
    );
};

export default SendOtp;
