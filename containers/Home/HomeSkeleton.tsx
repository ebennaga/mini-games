import { Box, Grid, Skeleton, Typography } from '@mui/material';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import InfoCard from 'components/InfoCard';
import TournamentSliderSkeleton from 'components/TournamentSlider/TournamentSliderSkeleton';
import { useRouter } from 'next/router';
import React from 'react';
import EventCarousel from './EventCarousel';

const HomeSkeleton = () => {
    const router = useRouter();

    return (
        <Box sx={{ width: '100%', marginTop: '20px' }}>
            <HeaderSkeleton />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
                <Skeleton sx={{ width: '80%', height: '58px' }} />
                <Skeleton sx={{ width: '10%', height: '58px' }} />
            </Box>
            <Box my={3}>
                <EventCarousel customMaxWidth='91vw' />
            </Box>
            <Typography variant='h6' fontWeight='bold' component='h2'>
                Games
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Skeleton sx={{ height: '170px' }} />
                </Grid>
                <Grid item xs={4}>
                    <Skeleton sx={{ height: '170px' }} />
                </Grid>
                <Grid item xs={4}>
                    <Skeleton sx={{ height: '170px' }} />
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    Tournaments
                </Typography>
                <Skeleton sx={{ height: '30px', width: '20%' }} />
            </Box>
            <TournamentSliderSkeleton />
            <InfoCard
                onClick={() => router.push('/topup')}
                buttonText='Top Up'
                title='Top up Coins Now &'
                subTitle='Join Tournament'
                background='/images/coins-bg.png'
                image='/images/coin-big.png'
                bgButton='#FFD833'
            />
            <InfoCard
                onClick={() => router.push('/shops')}
                buttonText='Top Up'
                title='Win Tournament &'
                subTitle='Get Points to reedem '
                background='/images/points-bg.png'
                image='/images/lg-points.png'
                bgButton='#6FC0FB'
                linearBackground='linear-gradient(216deg, rgb(255 255 255 / 0%) 14%, rgb(156 209 247) 87%)'
            />
        </Box>
    );
};

export default HomeSkeleton;
