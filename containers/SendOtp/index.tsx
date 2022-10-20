import { Box, ButtonBase, Typography } from '@mui/material';
import Button from 'components/Button/Index';
import Input from 'components/Input';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import { useSelector } from 'react-redux';
import useAuthReducer from 'hooks/useAuthReducer';
import getMinuteSecond from 'helper/getMinuteSecond';
import ResendSuccessDialog from './ResendSuccessDialog';

const SendOtp = () => {
    const [dialogResend, setDialogResend] = useState<boolean>(false);
    const [remainingTime, setRemainingTime] = useState<number>(120);
    const dataGlobal = useSelector((state: any) => state?.webpage?.user?.user);
    const { isLoading, fetchAPI } = useAPICaller();
    const { isLoading: resendIsLoading, fetchAPI: fetchResendOtp } = useAPICaller();
    const notfiy = useNotify();
    const { setUser, clearUser } = useAuthReducer();
    const router = useRouter();
    const form = useForm({
        mode: 'all',
        defaultValues: {
            otp: ''
        }
    });

    useEffect(() => {
        const setTime = () =>
            setInterval(() => {
                setRemainingTime((currentValue: any) => (currentValue > 0 ? currentValue - 1 : 0));
            }, 1000);

        setTime();
    }, []);

    const handleLogin = async (email: string, password: string) => {
        const response = await fetchAPI({
            method: 'POST',
            endpoint: 'auths/login',
            data: {
                email,
                password
            }
        });
        if (response.status === 200) {
            clearUser();
            setUser(response.data.data);
        } else {
            notfiy('Login failed', 'error');
        }
    };

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

        if (response.status === 200) {
            await handleLogin(dataGlobal.emailOtp, dataGlobal.password);
            return router.push('/');
        }
        return notfiy(response.data.message, 'error');
    };

    const handleResendOtp = async () => {
        const response = await fetchResendOtp({
            method: 'POST',
            endpoint: 'auths/register/otp/resend',
            data: {
                email: dataGlobal.emailOtp,
                password: dataGlobal.password
            }
        });

        if (response.status === 200) {
            setDialogResend(true);
        } else if (response.data.message) {
            notfiy(response.data.message, 'error');
        } else {
            notfiy('Resend OTP failed', 'error');
        }
    };

    return (
        <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Box padding='0px 20px'>
                <Box sx={{ mb: '50px' }}>
                    <img src='/images/otp-img.png' width={219} alt='icon sending otp' />
                </Box>
                <Typography variant='subtitle1' component='p' textAlign='center' sx={{ color: '#949494', fontWeight: 400 }}>
                    A OTP Code has been sent via email to <br />{' '}
                    <span style={{ fontWeight: 'bold', color: 'black' }}>{dataGlobal.emailOtp}</span>
                </Typography>
                <Typography
                    variant='subtitle1'
                    component='p'
                    sx={{ color: remainingTime === 0 ? '#FF4566' : '#A54CE5', fontWeight: 'bold', my: 2 }}
                >
                    {getMinuteSecond(remainingTime)}
                </Typography>
                <form onSubmit={form.handleSubmit(handleSubmit)} style={{ width: '100%' }}>
                    <Box sx={{ width: '100%', margin: 'auto' }}>
                        <Input name='otp' form={form} placeholder='Insert OTP Number' validator={{ require }} type='number' />
                    </Box>
                    <Box sx={{ width: '100%', margin: 'auto', paddingTop: 3 }}>
                        <Button loading={isLoading} disabled={isLoading} title='Confirm' backgoundColor='#A54CE5' color='#fff' />
                    </Box>
                </form>
                <Typography component='p' fontSize='12px' fontWeight={400} marginTop='17px' sx={{ color: '#949494' }}>
                    If you don`t receive OTP.
                    {resendIsLoading ? (
                        <Typography component='span' fontSize='12px' fontWeight={700} pl='5px' sx={{ color: '#A54CE5' }}>
                            Please Wait...
                        </Typography>
                    ) : (
                        <ButtonBase onClick={handleResendOtp}>
                            <Typography component='span' fontSize='12px' fontWeight={700} pl='5px' sx={{ color: '#A54CE5' }}>
                                Resend OTP
                            </Typography>
                        </ButtonBase>
                    )}
                </Typography>
                <ResendSuccessDialog open={dialogResend} setOpen={setDialogResend} />
            </Box>
        </Box>
    );
};

export default SendOtp;
