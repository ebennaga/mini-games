import { Grid, Skeleton } from '@mui/material';
import React from 'react';

const TournamentSliderSkeleton = () => {
    return (
        <Grid container spacing={2} mb={2}>
            <Grid item height='330px' xs={10}>
                <Skeleton sx={{ height: '400px', marginTop: '-60px' }} />
            </Grid>
            <Grid item height='330px' xs={2}>
                <Skeleton sx={{ height: '400px', marginTop: '-60px' }} />
            </Grid>
        </Grid>
    );
};

export default TournamentSliderSkeleton;
