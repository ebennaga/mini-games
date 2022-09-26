import React from 'react';
import { Typography, Box, ButtonBase } from '@mui/material';
import Layout from 'components/Layout/Index';
import Input from 'components/Input/index';
import Button from 'components/Button/Index';
import { useForm } from 'react-hook-form';
import { Google, Facebook } from '@mui/icons-material';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const form = useForm({
        mode: 'all',
        defaultValues: {
            tel: '',
            email: '',
            password: ''
        }
    });
    const rules = { required: true };
    const [changeInput, setChangeInput] = React.useState<boolean>(false);

    return (
        <Layout backgoundColor='#FFF' border='2px solid #D9D9D9'>
            <Box sx={{ textAlign: 'start', width: '95%' }}>
                <Typography sx={{ fontWeight: 700, fontSize: '46px' }} component='h1'>
                    Welcome Back
                </Typography>
                <Typography sx={{ fontSize: '21px', color: '#949494' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </Typography>
                <form
                    onSubmit={() => {
                        form.handleSubmit(() => {});
                    }}
                >
                    {!changeInput ? (
                        <Box sx={{ mt: 3 }}>
                            <Input name='tel' form={form} placeholder='Insert Your Phone Number' validator={rules} type='tel' />
                        </Box>
                    ) : (
                        <Box sx={{ mt: 3 }}>
                            <Input name='email' form={form} placeholder='Insert Your Email' validator={rules} type='email' />
                        </Box>
                    )}
                    <Box sx={{ mt: 3 }}>
                        <Input name='password' form={form} placeholder=' Password' validator={rules} type='password' />
                    </Box>
                    <Box sx={{ textAlign: 'right', mt: 2, color: '#A54CE5' }}>
                        <ButtonBase sx={{ fontWeight: 'bold' }}>Forgot Password</ButtonBase>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Button title='Log in' backgoundColor='#A54CE5' color='#FFF' onClick={() => {}} />
                    </Box>
                </form>
                <Box sx={{ textAlign: 'center', mt: 2, color: '#A54CE5' }}>
                    <ButtonBase
                        onClick={() => {
                            setChangeInput(!changeInput);
                        }}
                        sx={{ fontWeight: 'bold' }}
                    >
                        {changeInput ? 'Log in with phone number' : 'Log in with email'}
                    </ButtonBase>
                </Box>
                <Box sx={{ mt: '75px', textAlign: 'center' }}>
                    <Typography sx={{ color: '#949494', fontSize: '15px', mb: 2 }}>or you can:</Typography>
                    <Box sx={{ mb: 2 }}>
                        <Button
                            icon={<Google sx={{ color: '#A54CE5', position: 'absolute', left: '20px', bottom: '20px' }} />}
                            title='Log in with Google'
                            backgoundColor='#FFF'
                            color='#000'
                            border='2px solid #F4F1FF'
                            onClick={() => {}}
                        />
                    </Box>
                    <Box>
                        <Button
                            icon={<Facebook sx={{ color: '#A54CE5', position: 'absolute', left: '20px', bottom: '20px' }} />}
                            title='Log in with Facebook'
                            backgoundColor='#FFF'
                            color='#000'
                            border='2px solid #F4F1FF'
                            onClick={() => {}}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mt: 3
                        }}
                    >
                        <Typography sx={{ color: '#A54CE5', fontWeight: 500, lineHeight: '12px' }}>Dont have an account?</Typography>
                        <ButtonBase
                            onClick={() => {
                                router.push('/signup');
                            }}
                            sx={{ fontSize: '16px', fontWeight: 700, color: '#A54CE5' }}
                        >
                            Sign Up!
                        </ButtonBase>
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
};

export default Login;
