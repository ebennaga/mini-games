import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

const TopupSkeleton = () => {
    const imgDummy = [
        { id: 1, image: '/images/payment/bni.png' },
        { id: 2, image: '/images/payment/bri.png' },
        { id: 3, image: '/images/payment/mandiri.png' },
        { id: 4, image: '/images/payment/permata.png' },
        { id: 5, image: '/images/payment/gopay.png' },
        { id: 6, image: '/images/payment/qris.png' }
    ];
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton isPage />
            </Box>
            <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '33px' }}>Top Up Coins</Typography>
            </Box>
            <Box padding='20px'>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Exchange Rate</Typography>
                    <Skeleton variant='rounded' width='35%' height={30} sx={{ mb: '20px' }} />
                </Box>
                <Grid container spacing={2}>
                    {[...Array(4)].map((item: any, idx: number) => (
                        <Grid item xs={6} key={idx}>
                            <Skeleton variant='rounded' sx={{ height: '180px', padding: '0px' }} />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ paddingX: '20px', mt: '20px' }}>
                    <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <img src='/images/subtract.png' width={22} height={22} alt='subtract' />
                        <Typography sx={{ fontSize: '12px' }}>
                            If you have problems, please <span style={{ color: '#FF4567' }}>Click here!</span>
                        </Typography>
                    </Box>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px', mt: '30px' }}>Transaction</Typography>
                </Box>
                <Skeleton variant='rounded' width='40%' height={30} sx={{ mt: '50px' }} />
                {[...Array(3)].map((item: any, idx: number) => (
                    <Skeleton key={idx} variant='rounded' width='100%' height={60} sx={{ my: '20px' }} />
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Skeleton variant='rounded' width='20%' height={10} sx={{ mt: '0px' }} />
                </Box>
                {/* {[...Array(2)].map((item: any, idx: number) => (
                    <Skeleton key={idx} variant='rounded' width='100%' height={60} sx={{ my: '20px' }} />
                ))} */}
                <Box
                    onClick={() => {
                        // router.push('/coins-prizes');
                    }}
                    sx={{
                        mt: '30px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: '33px',
                        borderTop: '1px solid #E6E6E6',
                        padding: '20px 20px'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <Box>
                            <img
                                src='/images/ask.png'
                                width={30}
                                height={30}
                                alt='maskot-logo'
                                style={{ marginLeft: '20%', marginTop: '5%' }}
                            />
                        </Box>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700, textAlign: 'start' }}>How to get coins & prizes</Typography>
                    </Box>
                    <Box sx={{ mt: 1, mr: 0 }}>
                        <ChevronRight sx={{ color: '#8634C1' }} />
                    </Box>
                </Box>
                <Box
                    onClick={() => {
                        // router.push('/help-support');
                    }}
                    sx={{
                        mt: '0px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: '33px',
                        padding: '20px 20px',
                        borderBottom: '1px solid #E6E6E6',
                        borderTop: '2px solid #F4F1FF'
                    }}
                >
                    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '30px' }}>
                        <Box>
                            <img
                                src='/images/ask.png'
                                width={30}
                                height={30}
                                alt='maskot-logo'
                                style={{ marginLeft: '20%', marginTop: '5%' }}
                            />
                        </Box>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700, textAlign: 'start' }}>Help & Support</Typography>
                    </Box>
                    <Box sx={{ mt: 1, mr: 0 }}>
                        <ChevronRight sx={{ color: '#8634C1' }} />
                    </Box>
                </Box>
                <Box sx={{ mt: '50px', mx: '20px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px', mt: '30px' }}>Payment Methods</Typography>
                    <Box
                        sx={{
                            mt: '30px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            columnGap: '25px',
                            rowGap: '20px'
                        }}
                    >
                        {imgDummy.map((item: any, idx: number) => (
                            <Box key={item.id} sx={{ width: '28%', textAlign: 'center', cursor: 'pointer' }}>
                                <img src={item.image} alt='bank-payment' style={{ width: '70%', height: '100%' }} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TopupSkeleton;
