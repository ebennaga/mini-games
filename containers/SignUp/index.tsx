import React, { useEffect } from 'react';
import { Typography, Box, ButtonBase, Grid } from '@mui/material';
import Layout from 'components/Layout/Index';
import Input from 'components/Input/index';
import Button from 'components/Button/Index';
import { useForm } from 'react-hook-form';
import { Google, Facebook } from '@mui/icons-material';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import useAuthReducer from 'hooks/useAuthReducer';

const SignUp = () => {
    const router = useRouter();
    const form = useForm({
        mode: 'all',
        defaultValues: {
            tel: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    });
    const dataInput = form.watch();

    const rules = { required: true };
    const [changeInput, setChangeInput] = React.useState<boolean>(false);
    const [isSamePwd, setIsSamePwd] = React.useState<boolean>(true);

    const { fetchAPI, isLoading } = useAPICaller();
    const notify = useNotify();
    const { setUser } = useAuthReducer();

    useEffect(() => {
        const value = form.watch();
        if (value.password.length >= 8) {
            if (value.password === value.confirmPassword) {
                setIsSamePwd(true);
            } else {
                setIsSamePwd(false);
            }
        }
    }, [form.watch('password'), form.watch('confirmPassword')]);

    const handleSubmit = async (data: any) => {
        const response = await fetchAPI({
            method: 'POST',
            endpoint: 'auths/register',
            data: {
                email: data.email,
                password: data.password,
                password_confirmation: data.confirmPassword
            }
        });
        if (response.data.status) {
            const registerData = { emailOtp: data.email };
            setUser(registerData);
            router.push('/send-otp');
        } else {
            notify('Signup Error', 'error');
        }
    };

    return (
        <Layout backgoundColor='#FFF'>
            <Box sx={{ textAlign: 'start', width: '90%', margin: '20px' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '46px' }} component='h1'>
                    Start Your Account. It’s Free !
                </Typography>
                <Typography sx={{ fontSize: '21px', color: '#949494' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </Typography>
                <form onSubmit={form.handleSubmit(handleSubmit)}>
                    <Grid container direction='row'>
                        {!changeInput ? (
                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Input name='email' form={form} placeholder='Insert Your Email' validator={rules} type='email' />
                            </Grid>
                        ) : (
                            <Grid item xs={12} sx={{ mt: 3 }}>
                                <Input name='tel' form={form} placeholder='Insert Your Phone Number' validator={rules} type='tel' />
                            </Grid>
                        )}
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Input
                                name='password'
                                form={form}
                                placeholder='Insert Your Password'
                                validator={{ minLength: 8 }}
                                type='password'
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Input name='confirmPassword' form={form} placeholder='Confirm Your Password' type='password' />
                            {!isSamePwd && (
                                <Box mt={2}>
                                    <Typography component='span' sx={{ color: '#CD1719', ml: '1em' }}>
                                        Password and Confirm Password does not match
                                    </Typography>
                                </Box>
                            )}
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Button
                                title='Sign Up'
                                backgoundColor='#A54CE5'
                                color='#FFF'
                                type='submit'
                                loading={isLoading}
                                disabled={!dataInput.email || dataInput.password.length < 8 || !isSamePwd}
                            />
                        </Grid>
                    </Grid>
                </form>
                {/* <Grid container direction='row'>
                    {!changeInput ? (
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Input name='email' form={form} placeholder='Insert Your Email' validator={rules} type='email' />
                        </Grid>
                    ) : (
                        <Grid item xs={12} sx={{ mt: 3 }}>
                            <Input name='tel' form={form} placeholder='Insert Your Phone Number' validator={rules} type='tel' />
                        </Grid>
                    )}
                    <Grid item xs={12} sx={{ mt: 3 }}>
                        <Input name='password' form={form} placeholder='Insert Your Password' validator={rules} type='password' />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 3 }}>
                        <Input name='confirmPassword' form={form} placeholder='Confirm Your Password' validator={rules} type='password' />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 3 }}>
                        <Button
                            title='Sign Up'
                            backgoundColor='#A54CE5'
                            color='#FFF'
                            onClick={() => {
                                router.push('/send-otp');
                            }}
                        />
                    </Grid>
                </Grid> */}
                <Box sx={{ textAlign: 'center', mt: 2, color: '#A54CE5' }}>
                    <ButtonBase
                        onClick={() => {
                            setChangeInput(!changeInput);
                        }}
                        sx={{ fontWeight: 'bold' }}
                    >
                        {changeInput ? 'Sign up with phone email' : 'Sign up with phone number'}
                    </ButtonBase>
                </Box>
                <Grid container sx={{ mt: '75px', textAlign: 'center' }}>
                    <Grid item xs={12}>
                        <Typography sx={{ color: '#949494', fontSize: '15px', mb: 2 }}>or you can:</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ mb: 2 }}>
                        <Button
                            icon={<Google sx={{ color: '#A54CE5', position: 'absolute', left: '20px', bottom: '20px' }} />}
                            title='Log in with Google'
                            backgoundColor='#FFF'
                            color='#000'
                            border='2px solid #F4F1FF'
                            onClick={() => {}}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            icon={<Facebook sx={{ color: '#A54CE5', position: 'absolute', left: '20px', bottom: '20px' }} />}
                            title='Log in with Facebook'
                            backgoundColor='#FFF'
                            color='#000'
                            border='2px solid #F4F1FF'
                            onClick={() => {}}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mt: 3
                        }}
                    >
                        <Typography sx={{ color: '#A54CE5' }}>Already have an Account?</Typography>
                        <ButtonBase sx={{ fontSize: '16px', fontWeight: 'bold', color: '#A54CE5' }}>Log in!</ButtonBase>
                    </Grid>
                </Grid>
            </Box>
        </Layout>
    );
};

export default SignUp;
