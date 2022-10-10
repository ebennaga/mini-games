import { Box, Typography } from '@mui/material';
import Header from 'components/Header';
import NavigationCard from 'components/NavigationCard';
import React from 'react';

const PaymentConfirmationContainer = () => {
    return (
        <Box sx={{ width: '100%' }} marginBottom='500px'>
            <Box sx={{ position: 'sticky', top: '0px', backgroundColor: 'white', p: '20px', zIndex: 99 }}>
                <Header logo='/icons/logo.svg' profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='0px 20px'>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ textAlign: 'start', fontWeight: 'bold', mt: '20px', fontSize: '24px' }}>
                            Payment Confirmation
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            background: 'linear-gradient(0.35turn, #FFEDA7 20% ,#FFEA98 12.5%, #FFEDA7 80%, #FFEA98 20%)',
                            padding: '15px',
                            width: '75%',
                            mt: '30px',
                            borderRadius: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            height: '150px'
                        }}
                    >
                        <Box sx={{ width: '50%', display: 'flex', alignItems: 'flex-end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src='/images/sm-coin.png' alt='coin' />
                                <Typography sx={{ color: '#373737', fontWeight: 700, fontSize: '32px' }}>100</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 500 }}>Rp. 10.000</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '12px', color: '#949494', my: '20px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi{' '}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#F4F1FF',
                    display: 'flex',
                    padding: '5px 5px 4px',
                    boxSizing: 'border-box'
                }}
            >
                <Box sx={{ boxSizing: 'border-box', width: '100%' }}>
                    {[...Array(6)].map((i: any, idx: number) => (
                        <Box key={idx} sx={{ padding: '10px', backgroundColor: 'white', mb: '1px', cursor: 'pointer' }}>
                            <NavigationCard
                                icon='/images/card-img.png'
                                body='Pay with Visa, MasterCard, JCB, or Amex'
                                title='Credit/DebitCard'
                                onClick={() => {}}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box>
                <Typography>Test</Typography>
            </Box>
        </Box>
    );
};

export default PaymentConfirmationContainer;
