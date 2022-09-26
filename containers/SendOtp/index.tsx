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
        <Box sx={{ padding: '20px', textAlign: 'center' }}>
            <img src='/icons/sending-otp.svg' width={201} height={201} alt='icon sending otp' />
            <Typography variant='subtitle1' component='p' textAlign='center' sx={{ color: '#949494', fontWeight: 400 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.s
            </Typography>
            <Typography variant='subtitle1' component='p' sx={{ color: '#A54CE5', fontWeight: 'bold', my: 2 }}>
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
        </Box>
    );
};

export default SendOtp;
