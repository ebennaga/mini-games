/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { Box, Typography } from '@mui/material';
import Button from 'components/Button/Index';
import Input from 'components/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import { useSelector } from 'react-redux';
// import useAuthReducer from 'hooks/useAuthReducer';

const SendOtp = () => {
    // const userState = useSelector((state: any) => state.webpage?.user?.user);
    // const userState = { email: 'pesimov754@canyona.com' };
    const dataGlobal = useSelector((state: any) => state.webpage?.user?.user);
    const { isLoading, fetchAPI } = useAPICaller();
    const notfiy = useNotify();
    // const { setUser } = useAuthReducer();
    const router = useRouter();
    const form = useForm({
        mode: 'all',
        defaultValues: {
            otp: ''
        }
    });
    const handleSubmit = async (data: any, e: any) => {
        e.preventDefault();
        const response = await fetchAPI({
            method: 'POST',
            endpoint: 'auths/register/otp',
            data: {
                email: dataGlobal.emailOtp,
                password: dataGlobal.password,
                otp_token: data.otp
            }
        });
        console.log('response', response);
        // if (tempOTP !== data.otp) {
        //     return notfiy('OTP Doesn`t match!', 'error');
        // }
        if (response.status === 200) {
            console.log(response);
            return;
            // return router.push('/home');
        }
        return notfiy(response.data.message, 'error');

        // router.push('/home');
    };

    return (
        <Box sx={{ padding: '20px', textAlign: 'center' }}>
            <img src='/icons/sending-otp.svg' width={201} height={201} alt='icon sending otp' />
            <Typography variant='subtitle1' component='p' textAlign='center' sx={{ color: '#949494', fontWeight: 400 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.s
            </Typography>
            <Typography variant='subtitle1' component='p' sx={{ color: '#A54CE5', fontWeight: 'bold', my: 2 }}>
                00:58
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)} style={{ width: '100%' }}>
                <Box sx={{ width: '100%', margin: 'auto' }}>
                    <Input name='otp' form={form} placeholder='Insert OTP Number' validator={{ require }} type='number' />
                </Box>
                <Box sx={{ width: '100%', margin: 'auto', paddingTop: 3 }}>
                    <Button loading={isLoading} disabled={isLoading} title='Confirm' backgoundColor='#A54CE5' color='#fff' />
                </Box>
            </form>
        </Box>
    );
};

export default SendOtp;