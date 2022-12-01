import { Box, Grid, Skeleton, Typography } from '@mui/material';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import React from 'react';
import NavigationCard from 'components/NavigationCard';
import Link from 'next/link';

const ShopsSkeleton = () => {
    return (
        <Box sx={{ width: '-webkit-fill-available', p: '20px' }}>
            <HeaderSkeleton isPage />
            <Box display='flex' justifyContent='space-between' marginTop={4}>
                <Typography variant='h5' sx={{ fontWeight: '700' }}>
                    Redeem Prize
                </Typography>
                <Skeleton sx={{ height: '30px', width: '100px' }} />
            </Box>
            <Skeleton sx={{ height: '200px', mb: '-50px' }} />
            <Grid container justifyContent='space-between' alignItems='center' mt={10}>
                <Grid item xs={7} sm={7}>
                    <Typography sx={{ fontSize: '18px', fontWeight: '700' }}>Prizes</Typography>
                </Grid>
                <Grid item xs={1} sm={2} sx={{ textAlign: 'end' }}>
                    <Skeleton sx={{ height: '30px', width: '100%' }} />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {[...Array(6)].map((_item: any, index: number) => {
                    return (
                        <Grid item xs={6} key={index} sx={{ height: '180px' }}>
                            <Skeleton sx={{ height: '250px' }} />
                        </Grid>
                    );
                })}
            </Grid>
            <Skeleton sx={{ height: '250px', mt: 2, mb: '-65px' }} />
            <Box sx={{ padding: '30px 24px' }}>
                <NavigationCard
                    isBorder
                    icon='/icons/term.svg'
                    title='Terms & Condition'
                    onClick={() => {
                        // router.push('/terms-conditions');
                    }}
                />
            </Box>
            <Box padding='0 20px'>
                <Grid
                    container
                    position='relative'
                    sx={{ backgroundColor: '#56CF54', mt: 3, borderRadius: '15px', height: '100px' }}
                    alignItems='center'
                >
                    <Grid item xs={5} height='100%' position='relative'>
                        <Box sx={{ position: 'absolute', zIndex: 2, bottom: '-33px' }}>
                            <img src='/images/maskot-shops-2.png' alt='maskot' style={{ width: '145px' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={7} sx={{ color: 'white' }}>
                        <Link href='/tournaments'>
                            <Typography sx={{ fontWeight: 'bold' }}>Play & Join the Tournament</Typography>
                        </Link>
                        <Typography sx={{ fontSize: '10px' }}>Get the Points and Redeem it with our special prize!</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ShopsSkeleton;
