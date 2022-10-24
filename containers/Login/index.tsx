/* eslint-disable no-unused-vars */
import React from 'react';
import { Typography, Box, ButtonBase } from '@mui/material';
import Layout from 'components/Layout/Index';
import Input from 'components/Input/index';
import Button from 'components/Button/Index';
import { useForm } from 'react-hook-form';
import { Google, Facebook } from '@mui/icons-material';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useAuthReducer from 'hooks/useAuthReducer';
import useNotify from 'hooks/useNotify';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {
    const router = useRouter();

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const newUser = auth.currentUser;

    const form = useForm({
        mode: 'all',
        defaultValues: {
            tel: '',
            email: '',
            password: ''
        }
    });
    const { data: session } = useSession();
    const dataInput = form.watch();

    const rules = { required: true };
    // eslint-disable-next-line no-unused-vars
    const [changeInput, setChangeInput] = React.useState<boolean>(false);

    const { fetchAPI, isLoading } = useAPICaller();
    const { setUser } = useAuthReducer();
    const notify = useNotify();

    console.log('data session', session);

    const handleSubmit = async (data: any) => {
        const response = await fetchAPI({
            method: 'POST',
            endpoint: 'auths/login',
            data: {
                email: data.email,
                password: data.password
            }
        });
        if (response.status === 200) {
            setUser(response.data.data);
            router.push('/');
        } else {
            notify('Login Failed', 'error');
        }
    };

    const handleLoginGoogle = async () => {
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential: any = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const { user } = result;

                // console.log('user', user.uid);
                // console.log('newuser', newUser);
                const response = await fetchAPI({
                    method: 'POST',
                    endpoint: 'auths/login/google',
                    data: {
                        email: user.email,
                        username: user.displayName,
                        google_id: user.uid
                    }
                });
                if (response.status === 200) {
                    setUser(response.data.data);
                    router.push('/');
                } else if (response.data.message === 'User registration is not completed') {
                    notify('You have to registration first', 'error');
                } else {
                    notify(response.data.message, 'error');
                }

                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const { email } = error.customData;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log('error', error.message);
                notify('Internal server error', 'error');
            });
    };

    return (
        <Layout backgoundColor='#FFF' border='2px solid #D9D9D9'>
            <Box sx={{ textAlign: 'start', width: '100%' }}>
                <Box margin='20px 20px'>
                    <Typography sx={{ fontWeight: 700, fontSize: '46px' }} component='h1'>
                        Welcome Back
                    </Typography>
                    <Typography sx={{ fontSize: '21px', color: '#949494' }}>Please Sign In to Continue !</Typography>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        {changeInput ? (
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
                            <ButtonBase onClick={() => router.push('/forgot')} sx={{ fontWeight: 'bold' }}>
                                Forgot Password
                            </ButtonBase>
                        </Box>
                        <Box sx={{ mt: 3 }}>
                            <Button
                                title='Log in'
                                backgoundColor='#A54CE5'
                                color='#FFF'
                                type='submit'
                                loading={isLoading}
                                disabled={!dataInput.email || !dataInput.password}
                            />
                        </Box>
                    </form>
                    {/* <Box sx={{ textAlign: 'center', mt: 2, color: '#A54CE5' }}>
                        <ButtonBase
                            onClick={() => {
                                setChangeInput(!changeInput);
                            }}
                            sx={{ fontWeight: 'bold' }}
                        >
                            {!changeInput ? 'Log in with phone number' : 'Log in with email'}
                        </ButtonBase>
                    </Box> */}
                    <Box sx={{ mt: '25px', textAlign: 'center' }}>
                        <Typography sx={{ color: '#949494', fontSize: '15px', mb: 2 }}>or you can:</Typography>
                        <Box sx={{ mb: 2 }}>
                            <Button
                                // onClick={() => signIn('google')}
                                onClick={handleLoginGoogle}
                                icon={<Google sx={{ color: '#A54CE5', position: 'absolute', left: '20px', bottom: '20px' }} />}
                                title='Log in with Google '
                                backgoundColor='#FFF'
                                color='#000'
                                border='2px solid #F4F1FF'
                            />
                        </Box>
                        <Box>
                            {/* <Button
                                icon={<Facebook sx={{ color: '#A54CE5', position: 'absolute', left: '20px', bottom: '20px' }} />}
                                title='Log in with Facebook'
                                backgoundColor='#FFF'
                                color='#000'
                                border='2px solid #F4F1FF'
                                onClick={() => {}}
                            /> */}
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
            </Box>
        </Layout>
    );
};

export default Login;
