import { Box, Grid, Skeleton, Typography, ButtonBase } from '@mui/material';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import InfoCard from 'components/InfoCard';
import TournamentSliderSkeleton from 'components/TournamentSlider/TournamentSliderSkeleton';
import { useRouter } from 'next/router';
import React from 'react';
// import EventCarousel from './EventCarousel';
// import ButtonLanding from 'components/Button/Index';

const HomeSkeleton = () => {
    const router = useRouter();

    return (
        <Box sx={{ width: '100%', marginTop: '20px' }}>
            <HeaderSkeleton page='home' />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5.5 }}>
                <Skeleton sx={{ width: '80%', height: '58px' }} />
                <Skeleton sx={{ width: '10%', height: '58px' }} />
            </Box>
            {/* <Box my={3}>
                <EventCarousel customMaxWidth='91vw' />
            </Box> */}
            {/* <Box
                sx={{
                    width: '100%',
                    height: '411px',
                    background: '#6FC0FB',
                    mb: '20px',
                    borderRadius: '10px',
                    backgroundImage: 'url(/images/dummy/bg-gradient-home.png)',
                    backgroundSize: 'cover',
                    // paddingY: '20px',
                    textAlign: 'center',
                    position: 'relative'
                }}
            >
                <Box sx={{ top: '20px', position: 'absolute', left: '50%', translate: '-50%', width: '100%' }}>
                    <Typography sx={{ mb: '20px', color: 'white', fontSize: '26px', fontWeight: 700, lineHeight: '27px' }}>
                        Play free game, <br /> win attractive prize!
                    </Typography>
                    <Typography sx={{ color: 'white', fontSize: '12px', fontWeight: 500 }}>
                        Play free tournament, collect coins to join grand <br /> tournaments and win the prizes.
                    </Typography>
                </Box>
                <Box sx={{ position: 'absolute', left: '50%', translate: '-50%', bottom: '25px', width: '165px' }}>
                    <ButtonLanding title='Play Game' backgoundColor='#A54CE5' color='white' height='40px' />
                </Box>
            </Box> */}
            <Box sx={{ mb: '20px' }}>
                <Skeleton variant='rounded' width='100%' height='411px' />
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
                        <img src='/icons/coin-home-lg.png' alt='coinhome' />
                        <img src='/icons/coin-home-sm.png' alt='coinhome' style={{ position: 'absolute', bottom: 0, right: 0 }} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '10px' }}>How to get Coins</Typography>
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
                        <img src='/icons/point-home-lg.png' alt='pointhome' />
                        <img src='/icons/point-home-sm.png' alt='coinhome' style={{ position: 'absolute', bottom: 0, right: 0 }} />
                    </Box>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '10px' }}>How to win Points</Typography>
                        <Typography sx={{ fontSize: '8px', color: '#949494', lineHeight: '8px' }}>
                            firstly you have to collect Points, after you have a huge points now it is time for you to redeem your points
                            into a prizes, so hurry up and join the tournament now!!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <ButtonBase
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
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            <InfoCard
                onClick={() => router.push('/topup')}
                buttonText='Top Up'
                title='Top up Coins Now &'
                subTitle='Join Tournament'
                background='/images/coins-bg.png'
                image='/images/coin-big.png'
                bgButton='#FFD833'
            />
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
