import React from 'react';
import { Box, Typography, Grid, ButtonBase } from '@mui/material';
import Header from 'components/Header';
// import Button from 'components/Button/Index';
import { SmartDisplay, EmojiEvents, Share } from '@mui/icons-material';
import { useRouter } from 'next/router';

const CasualContainer = () => {
    const router = useRouter();
    return (
        <Box sx={{ width: '100%' }}>
            {/* dari sini */}
            <Box
                sx={{
                    backgroundImage: `url(${'/images/bg-casual.png'})`,
                    height: '50vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 0,
                    // padding: '10px 20px',
                    borderRadius: '0px 0px 20px 20px'
                }}
            >
                <Box sx={{ padding: '10px 20px', position: 'sticky', zIndex: 999, top: 5 }}>
                    <Header isBack point={102_300} profilePicture='/icons/dummy/profile.png' />
                </Box>
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(transparent, #353535)',
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                        bottom: '24%'
                    }}
                />
                <Box
                    sx={{
                        backgroundColor: '#353535',
                        width: '100%',
                        height: '25%',
                        position: 'absolute',
                        bottom: '0px',
                        borderRadius: '0px 0px 20px 20px'
                    }}
                >
                    <Box sx={{ paddingX: '20px', paddingBottom: '20px' }}>
                        <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: 700 }}>Block Stack</Typography>
                        <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 700 }}>Casual Play</Typography>
                    </Box>
                </Box>
            </Box>
            {/* sampai sini */}
            <Grid container direction='column' padding='10px'>
                <Grid item xs={12}>
                    <Typography sx={{ color: '#949494', fontSize: '14px', fontWeight: 400 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    </Typography>
                </Grid>
            </Grid>
            <Grid container padding='10px 20px' mt={3}>
                <Grid item xs={6}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Your Stats
                    </Typography>
                </Grid>
                <Grid
                    mt='18px'
                    mb='310px'
                    container
                    justifyContent='space-between'
                    xs={12}
                    gap='10px'
                    sx={{ backgroundColor: '#F4F1FF', padding: '18px 25px', borderRadius: '15px' }}
                >
                    <Grid container xs={5} justifyContent='space-between'>
                        <img src='/icons/tape-stats.png' alt='ribbon' />
                        <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>High scores</Typography>
                    </Grid>
                    <Grid container xs={5} justifyContent='space-between'>
                        <EmojiEvents />
                        <Typography sx={{ fontWeight: '700' }}>211.876</Typography>
                        <Share />
                    </Grid>
                </Grid>
            </Grid>
            <Box sx={{ padding: '20px', position: 'sticky', bottom: '20px' }}>
                <ButtonBase
                    onClick={() => {
                        // router.push('/casual/loading');
                        router.push('/casual/ads');
                    }}
                    sx={{
                        textTransform: 'none',
                        position: 'relative',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: '#A54CE5',
                        width: '100%',
                        height: '60px',
                        '&:hover': {
                            backgroundColor: '#A54CE5',
                            color: 'white',
                            fontWeight: 'bold'
                        }
                    }}
                >
                    Watch Ads{' '}
                    <span style={{ margin: '0px 5px' }}>
                        <SmartDisplay />
                    </span>{' '}
                    to Play
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default CasualContainer;
