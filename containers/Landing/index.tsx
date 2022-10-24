import { Box, ButtonBase, Typography } from '@mui/material';
import Layout from 'components/Layout/Index';
import React from 'react';
import ButtonCustom from 'components/Button/Index';

import { Google } from '@mui/icons-material';
import { useRouter } from 'next/router';

const LandingPage = () => {
    const router = useRouter();
    return (
        <Layout backgoundColor='#A54CE5'>
            <Box
                sx={{ width: '20%', display: 'flex', justifyContent: 'center', flexDirection: 'column', rowGap: '40px', marginTop: '40px' }}
            >
                <img src='/images/prizelogo.png' alt='prize-logo' />
            </Box>
            <Box sx={{ mt: 4 }}>
                <img src='/images//maskot.png' alt='maskot-logo' />
            </Box>
            <Box sx={{ textAlign: 'center', width: '90%', color: '#FFF', mt: 5 }}>
                <Typography sx={{ mb: 3, fontWeight: 700 }}>PLAY THE GAME - WIN THE PRIZE</Typography>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</Typography>
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    width: '90%',
                    color: '#FFF',
                    mt: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    rowGap: '10px',
                    marginBottom: '40px'
                }}
            >
                <ButtonCustom
                    onClick={() => {
                        router.push('/signup');
                    }}
                    title='Sign Up'
                    backgoundColor='#FFF'
                    color='#A54CE5'
                    border='none'
                />
                <ButtonCustom
                    icon={<Google sx={{ position: 'absolute', left: '20px', bottom: '20px' }} />}
                    title='Log in with Google'
                    backgoundColor='transparent'
                    color='#FFF'
                    border='2px solid #FFF'
                />
                {/* <ButtonCustom
                    icon={<Facebook sx={{ position: 'absolute', left: '20px', bottom: '20px' }} />}
                    title='Log in with Facebook'
                    backgoundColor='transparent'
                    color='#FFF'
                    border='2px solid #FFF'
                /> */}
                <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', mt: 3 }}>
                    <Typography>Already have an Account?</Typography>
                    <ButtonBase
                        onClick={() => {
                            router.push('/login');
                        }}
                        sx={{ fontSize: '16px', fontWeight: 'bold' }}
                    >
                        Log in!
                    </ButtonBase>
                </Box>
            </Box>
        </Layout>
    );
};

export default LandingPage;
