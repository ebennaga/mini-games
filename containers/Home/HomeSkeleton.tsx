import { Box, Grid, Skeleton, Typography } from '@mui/material';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import InfoCard from 'components/InfoCard';
import TournamentSliderSkeleton from 'components/TournamentSlider/TournamentSliderSkeleton';
import { useRouter } from 'next/router';
import React from 'react';
import EventTournamentSlider from './EventTournamentSlider';

const HomeSkeleton = () => {
    const router = useRouter();

    return (
        <Box sx={{ width: '100%', marginTop: '20px' }}>
            <HeaderSkeleton page='home' />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5.5 }}>
                <Skeleton sx={{ width: '80%', height: '58px' }} />
                <Skeleton sx={{ width: '10%', height: '58px' }} />
            </Box>
            <Box my={3}>
                <EventTournamentSlider />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap: '5px', mb: '15px' }}>
                <Box
                    sx={{
                        width: '30%',
                        height: '182px',
                        background: '#F4F4F4',
                        borderRadius: '9px',
                        padding: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Box>
                        <img src='/icons/prize-home.png' alt='coinhome' />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '10px' }}>How to win Prize</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#949494', lineHeight: '8px' }}>
                            firstly you have to collect Points, after you have a huge points now it is time for you to redeem your points
                            into a prizes, so hurry up and join the tournament now!!
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '30%',
                        height: '182px',
                        background: '#F4F4F4',
                        borderRadius: '9px',
                        padding: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Box sx={{ position: 'relative' }}>
                        <img src='/icons/coint-home.png' alt='coinhome' />
                        {/* <img src='/icons/coin-home-sm.png' alt='coinhome' style={{ position: 'absolute', bottom: 0, right: 0 }} /> */}
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '10px' }}>How to get Coins</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#949494', lineHeight: '8px' }}>
                            You can top up coins in the COINS menu. After that, the coins balance will be added immediately or you can
                            invite your friends as much as possible and also running daily missions.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '30%',
                        height: '182px',
                        background: '#F4F4F4',
                        borderRadius: '9px',
                        padding: '10px',
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <Box sx={{ position: 'relative' }}>
                        <img src='/icons/point-home.png' alt='pointhome' />
                        {/* <img src='/icons/point-home-sm.png' alt='coinhome' style={{ position: 'absolute', bottom: 0, right: 0 }} /> */}
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '10px' }}>How to win Points</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#949494', lineHeight: '8px' }}>
                            Hi buddies, to get points you have to join the tournament and win the tournament. The higher your rank, the more
                            points you get!!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <InfoCard
                onClick={() => router.push('/topup')}
                buttonText='Top Up'
                title='Top up Coins Now &'
                subTitle='Join Tournament'
                background='/images/coins-bg.png'
                image='/images/coin-big.png'
                bgButton='#FFD833'
            />
            {/* <ButtonBase
                sx={{
                    background: 'url(/images/dummy/banner-invite.png)',
                    backgroundPosition: 'right',
                    backgroundSize: 'cover',
                    height: '140px',
                    width: '100%',
                    borderRadius: '6px',
                    marginBottom: '26px'
                }}
                onClick={() => router.push('/referral')}
            /> */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '20px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '15px' }}>
                    <Box>
                        <img src='/icons/noto_money-bag.png' alt='money-bag' />
                    </Box>
                    <Typography variant='subtitle1' fontWeight='bold' component='h1'>
                        Grand Tournaments
                    </Typography>
                </Box>
                <Skeleton sx={{ height: '30px', width: '20%' }} />
            </Box>
            <TournamentSliderSkeleton />
            {/* <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '15px' }}>
                    <Box>
                        <img src='/icons/free.png' alt='money-bag' />
                    </Box>
                    <Typography variant='subtitle1' fontWeight='bold' component='h1'>
                        Casual Tournaments
                    </Typography>
                </Box>
                <Skeleton sx={{ height: '30px', width: '20%' }} />
            </Box>
            <TournamentSliderSkeleton /> */}
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
            {/* <InfoCard
                onClick={() => router.push('/topup')}
                buttonText='Top Up'
                title='Top up Coins Now &'
                subTitle='Join Tournament'
                background='/images/coins-bg.png'
                image='/images/coin-big.png'
                bgButton='#FFD833'
            /> */}
            {/* <InfoCard
                onClick={() => router.push('/shops')}
                buttonText='Top Up'
                title='Win Tournament &'
                subTitle='Get Points to reedem '
                background='/images/points-bg.png'
                image='/images/lg-points.png'
                bgButton='#6FC0FB'
                linearBackground='linear-gradient(216deg, rgb(255 255 255 / 0%) 14%, rgb(156 209 247) 87%)'
            /> */}
        </Box>
    );
};

export default HomeSkeleton;
