/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import Layout from 'components/Layout/Index';
import React from 'react';
import Image from 'next/image';
import PrizeLogo from 'public/images/prizelogo.png';
import PrizaMaskot from 'public/images/maskot.png';
import ButtonCustom from 'components/Button/Index';
import { Google, Facebook } from '@mui/icons-material';

const LandingPage = () => {
    return (
        <Box sx={{ backgroundColor: '#FFF', display: 'flex', justifyContent: 'center' }}>
            <Layout>
                <Box sx={{ width: '20%', display: 'flex', justifyContent: 'center', flexDirection: 'column', rowGap: '40px' }}>
                    <Image src={PrizeLogo} />
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Image src={PrizaMaskot} />
                </Box>
                <Box sx={{ textAlign: 'center', width: '90%', color: '#FFF', mt: 5 }}>
                    <Typography sx={{ mb: 3 }}>PLAY THE GAME - WIN THE PRIZE</Typography>
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
                        rowGap: '10px'
                    }}
                >
                    <ButtonCustom title='Sign Up' backgoundColor='#FFF' color='#A54CE5' border='none' />
                    <ButtonCustom
                        icon={<Google sx={{ position: 'absolute', left: '20px', bottom: '20px' }} />}
                        title='Log in with Google'
                        backgoundColor='transparent'
                        color='#FFF'
                        border='2px solid #FFF'
                    />
                    <ButtonCustom
                        icon={<Facebook sx={{ position: 'absolute', left: '20px', bottom: '20px' }} />}
                        title='Log in with Facebook'
                        backgoundColor='transparent'
                        color='#FFF'
                        border='2px solid #FFF'
                    />
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center', mt: 3 }}>
                        <Typography>Already have an Account?</Typography>
                        <ButtonBase sx={{ fontSize: '16px', fontWeight: 'bold' }}>Log in!</ButtonBase>
                    </Box>
                </Box>
            </Layout>
        </Box>
    );
};

export default LandingPage;
