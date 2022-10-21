/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Skeleton, Typography, Grid } from '@mui/material';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';

const GameSekeleton = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton />
                <Box sx={{ mt: '50px' }}>
                    <Skeleton sx={{ width: '120px', height: '50px' }} />
                    <Grid justifyContent='start' container gap='55px' sx={{ mt: '20px' }}>
                        {[...Array(6)].map((i: any, idx: number) => (
                            <Grid item xs={5} key={idx}>
                                <Skeleton variant='rounded' sx={{ width: '100%', height: '150px' }} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default GameSekeleton;
