/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Grid, Skeleton } from '@mui/material';

const PrizeSkeleton = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton />
            </Box>
            <Box padding='20px'>
                <Skeleton variant='rounded' width='45%' height={30} sx={{ mb: '20px' }} />
                <Grid container spacing={2}>
                    {[...Array(8)].map((item: any, idx: number) => (
                        <Grid item xs={6} key={idx}>
                            <Skeleton variant='rounded' sx={{ height: '180px', padding: '0px' }} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default PrizeSkeleton;
