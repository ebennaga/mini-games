import { Box, Grid, ButtonBase, Typography } from '@mui/material';
// import LayoutLoggedIn from 'components/LayoutLoggedIn';
import Layout from 'components/Layout/Index';
import React from 'react';
import { HelpOutline } from '@mui/icons-material';

const GameDetailContainer = () => {
    return (
        // <LayoutLoggedIn myCoin='102.300'>
        //     <Box position='absolute' zIndex={0} bottom='270px' width='100%'>
        //         <img src='/images/bg-gamedetail.png' alt='bg-gamedetail' style={{ width: '100%' }} />
        //     </Box>
        //     <Grid container gap='45px' padding='20px' mt='130px' position='relative' zIndex={1}>
        //         <Grid item xs={5}>
        //             <img src='/images/game-img.png' alt='game-img' style={{ borderRadius: '15px', width: '250px' }} />
        //         </Grid>
        //         <Grid item xs={6}>
        //             <Typography variant='h4' sx={{ color: 'white' }}>
        //                 Menara Dingdong
        //             </Typography>
        //         </Grid>
        //     </Grid>
        //     <Box
        //         sx={{
        //             position: 'absolute',
        //             zIndex: 0,
        //             bottom: '274px',
        //             width: '100%',
        //             height: '45px',
        //             background: 'linear-gradient(transparent, #353535)'
        //         }}
        //     />
        // </LayoutLoggedIn>
        <Layout>
            <Box sx={{ position: 'absolute', zIndex: 0, width: '100%' }}>
                <img src='/images/bg-gamedetail.png' alt='bgimage' style={{ width: '100%' }} />
                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: 1,
                        bottom: '5px',
                        width: '100%',
                        height: '45px',
                        background: 'linear-gradient(transparent, #353535)'
                    }}
                />
            </Box>
            <Grid border='1px solid red' container zIndex={2} paddingTop='20px' justifyContent='space-between' width='100%'>
                <Grid direction='row' gap='auto' container justifyContent='space-between' alignItems='center' width='100%' paddingX='20px'>
                    <Grid item xs={2}>
                        <ButtonBase>
                            <img src='/images/arrowBack.png' alt='arrowBack' />
                        </ButtonBase>
                    </Grid>
                    <Grid container justifyContent='space-evenly' alignItems='center' xs={4}>
                        <Grid item xs={7}>
                            <Grid
                                container
                                gap='3px'
                                alignItems='center'
                                justifyContent='space-evenly'
                                sx={{
                                    position: 'relative',
                                    backgroundColor: '#FFF5CD',
                                    padding: '8px 9px',
                                    borderRadius: '25px'
                                }}
                                component='div'
                            >
                                <img src='/images/coin.png' alt='coin' style={{ width: '20px' }} />
                                <Typography sx={{ fontSize: '0.75rem' }} fontWeight='bold'>
                                    102.300
                                </Typography>
                                <Box sx={{ position: 'absolute', bottom: '20px', left: '0px' }}>
                                    <img src='/images/badge-plus.png' alt='badge' />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <img src='/images/avatar.png' alt='avatar' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container alignItems='center' paddingX='20px' gap='15px'>
                    <Grid item xs={5}>
                        <img src='/images/game-img.png' alt='game-img' style={{ borderRadius: '15px', width: '100%' }} />
                    </Grid>
                    <Grid container justifyContent='space-between' height='100%' direction='row' xs={6}>
                        <Grid container alignItems='end' xs={12}>
                            <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold' }}>
                                Menara Dingdong
                            </Typography>
                        </Grid>
                        <Grid container alignItems='end' justifyContent='space-between' xs={12}>
                            <Grid item xs={6}>
                                <Box
                                    sx={{
                                        backgroundColor: '#949494',
                                        padding: '7px 10px',
                                        borderRadius: '24px',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Typography sx={{ color: 'white', fontWeight: '700' }}>Tutorials</Typography>
                                    <HelpOutline sx={{ color: 'white' }} />
                                </Box>
                            </Grid>
                            <Grid container gap='10px' alignItems='center' xs={5}>
                                <img src='/images/users-img.png' alt='users-img' />
                                <Typography sx={{ fontWeight: 'bold', color: 'white' }}>45.000</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default GameDetailContainer;
