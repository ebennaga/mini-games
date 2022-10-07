/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Grid, Skeleton } from '@mui/material';
import TournamentSliderSkeleton from 'components/TournamentSlider/TournamentSliderSkeleton';

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
                <Skeleton variant='rounded' width='40%' sx={{ my: 1 }} />
                <Skeleton variant='rounded' width='70%' height='11px' />
                <Box sx={{ mt: '-50px' }}>
                    <TournamentSliderSkeleton />
                </Box>
                <Skeleton variant='rounded' width='40%' sx={{ my: 1 }} />
                <Skeleton variant='rounded' width='70%' height='11px' />
                <Skeleton variant='rounded' sx={{ height: { xs: '170px', sm: '250px' }, mt: '15px', borderRadius: '15px' }} />
                <Box sx={{ mt: '30px' }}>
                    <Skeleton variant='rounded' width='40%' sx={{ mb: 1 }} />
                    <Skeleton variant='rounded' height='45px' sx={{ mb: 1, borderRadius: '10px' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default PrizeSkeleton;
