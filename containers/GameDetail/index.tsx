/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import { HelpOutline, EmojiEvents, Share } from '@mui/icons-material';
import Button from 'components/Button/Index';

const GameDetailContainer = () => {
    const isBack = true;
    return (
        <Box border='1px solid #D9D9D9'>
            <Box
                sx={{
                    backgroundImage: `url(${'/images/bg-gamedetail.png'})`,
                    height: '50vh',
                    backgroundSize: 'cover',
                    position: 'relative'
                }}
            />
            <Box
                sx={{ backgroundImage: 'linear-gradient(transparent, black)', width: '99.5%', height: '30px' }}
                position='absolute'
                zIndex={0}
                bottom='50%'
            />
            <Grid container padding='20px' position='absolute' top={0} zIndex={2}>
                <Grid item xs={12}>
                    <Header isBack={isBack} point={102_300} profilePicture='/icons/dummy/profile.png' />
                </Grid>
            </Grid>
            <Grid container spacing={2} padding='20px' position='absolute' bottom='50%'>
                <Grid item xs={5}>
                    <img src='/images/game-img.png' alt='game-img' style={{ borderRadius: '10px', width: '100%' }} />
                </Grid>
                <Grid item xs={7} justifyContent='space-between' direction='row' spacing={5}>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: '23px', lineHeight: '30px' }}>
                            Menara Dingdong
                        </Typography>
                    </Grid>
                    <Grid container mt={5} justifyContent='space-between' width='100%'>
                        <Grid item xs={6}>
                            <ButtonBase
                                sx={{
                                    color: 'white',
                                    backgroundColor: '#949494',
                                    padding: '1px 10px',
                                    borderRadius: '24px',
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>Tutorials</Typography>
                                <HelpOutline sx={{ width: '14px', fontWeight: 'bold' }} />
                            </ButtonBase>
                        </Grid>
                        <Grid container xs={5} alignItems='center'>
                            <Grid item xs={6} mr='3px'>
                                <img src='/images/users-img.png' alt='user-img' />
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '11px', color: 'white' }}>45.652</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container padding='10px 20px'>
                <Grid item xs={6}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Tournaments
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '12px', fontWeight: '600' }}>Join tournaments and get points for reedem prize</Typography>
                </Grid>
            </Grid>
            <Grid container padding='20px' direction='column'>
                <Grid item xs={6}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Casual Game
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'light' }}>
                        get a change to got the Ticket to play Tournaments
                    </Typography>
                </Grid>
                <Grid item xs={12} mt='10px' position='relative'>
                    <Box
                        sx={{
                            borderRadius: '20px',
                            backgroundImage: `url(${'/images/bg-casual.png'})`,
                            height: '260px',
                            display: 'flex',
                            flexDirection: 'column-reverse',
                            backgroundSize: 'cover',
                            position: 'relative',
                            zIndex: 0
                        }}
                    >
                        <Box position='relative' zIndex={2} margin='20px'>
                            <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>Free</Typography>
                            <Button height='40px' title='Play Casual' backgoundColor='#A54CE5' color='white' />
                        </Box>
                        <Box
                            sx={{
                                backgroundImage: 'linear-gradient(transparent, black)',
                                height: '50px',
                                borderRadius: '0px 0px 20px 20px'
                            }}
                            position='absolute'
                            zIndex={1}
                            bottom='0%'
                            width='100%'
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container padding='10px 20px'>
                <Grid item xs={6}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Your Stats
                    </Typography>
                </Grid>
                <Grid
                    mt='18px'
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
        </Box>
    );
};

export default GameDetailContainer;
