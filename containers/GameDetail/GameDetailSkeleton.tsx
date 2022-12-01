/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import TournamentSliderSkeleton from 'components/TournamentSlider/TournamentSliderSkeleton';
import TitleTournament from 'components/TitleTournament';
import { EmojiEvents, Share } from '@mui/icons-material';

const PrizeSkeleton = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton />
            </Box>
            <Grid container spacing={2} sx={{ padding: '20px', justifyContent: 'space-between', mt: 4 }}>
                <Grid item xs={6} sx={{ height: { xs: '170px', sm: '250px' } }}>
                    <Skeleton variant='rounded' width='100%' height='100%' />
                </Grid>
                <Grid item xs={6} sx={{ height: { xs: '170px', sm: '250px' } }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            height: '100%',
                            flexDirection: 'column',
                            justifyContent: 'end',
                            gap: '20px'
                        }}
                    >
                        <Skeleton variant='rounded' width='100%' height='30px' />
                        <Skeleton variant='rounded' width='100%' />
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ padding: '20px' }}>
                <TitleTournament image='/icons/noto_money-bag.png' title='Grand Tournaments' subTitle='Improve your skills risk-free' />
                <Box sx={{ mt: '-50px' }}>
                    <TournamentSliderSkeleton />
                </Box>
                <Box>
                    <TitleTournament image='' title='Casual' subTitle='Tournaments and get points for redeem prize' />
                    <Skeleton variant='rounded' sx={{ height: { xs: '170px', sm: '250px' }, mt: '15px', borderRadius: '15px' }} />
                </Box>
                <Box sx={{ mt: '30px' }}>
                    <Skeleton variant='rounded' width='40%' sx={{ mb: 1 }} />
                    <Skeleton variant='rounded' height='45px' sx={{ mb: 1, borderRadius: '10px' }} />
                </Box>
            </Box>
            <Grid container padding='10px 20px' mt={0}>
                <Grid item xs={6}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Your Stats
                    </Typography>
                </Grid>
                <Grid
                    mt='18px'
                    container
                    justifyContent='space-between'
                    gap='10px'
                    sx={{ backgroundColor: '#F4F1FF', padding: '18px 25px', borderRadius: '15px' }}
                >
                    <Grid item xs={5} justifyContent='space-between'>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='/images/ribb-casual.png' alt='ribbon' />
                            <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>Casual</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box justifyContent='space-between' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <EmojiEvents />
                            <Skeleton variant='rounded' width='100%' />
                            {/* <Typography sx={{ fontWeight: '700' }}>{numberFormat(detailGame?.auths.highscore)}</Typography> */}
                            <Share />
                        </Box>
                    </Grid>
                </Grid>
                <Grid
                    mt='18px'
                    container
                    justifyContent='space-between'
                    gap='10px'
                    sx={{ backgroundColor: '#D7EEFF', padding: '18px 25px', borderRadius: '15px' }}
                >
                    <Grid item xs={5} justifyContent='space-between'>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src='/images/ribb-tournament.png' alt='ribbon' />
                            <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>Tournament</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box justifyContent='space-between' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <EmojiEvents />
                            <Skeleton variant='rounded' width='100%' />
                            {/* <Typography sx={{ fontWeight: '700' }}>{numberFormat(detailGame?.auths.highscore_tournament)}</Typography> */}
                            <Share />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PrizeSkeleton;
