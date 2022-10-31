import React from 'react';
import { Box, Skeleton, Grid } from '@mui/material';

const LoadingResultTournament = () => {
    return (
        <Box padding='20px' display='flex' flexDirection='column' alignItems='center' width='-webkit-fill-available'>
            <Skeleton sx={{ width: '120px', height: '150px' }} />
            <Skeleton sx={{ height: '30px', width: '200px' }} />
            <Skeleton sx={{ height: '50px', width: '220px' }} />
            <Skeleton sx={{ height: '20px', width: '100px', mt: '50px' }} />
            <Skeleton sx={{ height: '30px', width: '100px', mb: '50px' }} />
            {[...Array(4)].map((_item: any, index: number) => {
                return (
                    <Grid key={index} container spacing={2}>
                        <Grid item xs={1}>
                            <Skeleton sx={{ height: '50px', width: '100%' }} />
                        </Grid>
                        <Grid item xs={3}>
                            <Skeleton sx={{ height: '50px', width: '100%' }} />
                        </Grid>
                        <Grid item xs={4}>
                            <Skeleton sx={{ height: '50px', width: '100%' }} />
                        </Grid>
                        <Grid item xs={4}>
                            <Skeleton sx={{ height: '50px', width: '100%' }} />
                        </Grid>
                    </Grid>
                );
            })}
            <Skeleton sx={{ width: '100%', height: '80px', mt: '50px' }} />
        </Box>
    );
};

export default LoadingResultTournament;
