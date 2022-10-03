import { Box, Grid, Skeleton } from '@mui/material';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import InfoCardSkeleton from 'components/InfoCard/InfoCardSkeleton';
import TournamentSliderSkeleton from 'components/TournamentSlider/TournamentSliderSkeleton';
import React from 'react';

const HomeSkeleton = () => {
    return (
        <Box sx={{ width: '100%', marginTop: '20px' }}>
            <HeaderSkeleton />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton sx={{ width: '80%', height: '58px' }} />
                <Skeleton sx={{ width: '10%', height: '58px' }} />
            </Box>
            <Grid container>
                <Grid item xs={1}>
                    <Skeleton sx={{ height: '170px' }} />
                </Grid>
                <Grid item xs={10} padding='0 20px'>
                    <Skeleton sx={{ height: '170px' }} />
                </Grid>
                <Grid item xs={1}>
                    <Skeleton sx={{ height: '170px' }} />
                </Grid>
            </Grid>
            <Skeleton sx={{ height: '30px', width: '20%' }} />
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
                <Skeleton sx={{ height: '30px', width: '20%' }} />
                <Skeleton sx={{ height: '30px', width: '20%' }} />
            </Box>
            <TournamentSliderSkeleton />
            {[...Array(4)].map((_item: any, index: number) => (
                <InfoCardSkeleton key={index} />
            ))}
        </Box>
    );
};

export default HomeSkeleton;
