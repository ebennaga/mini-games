import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Grid, Skeleton } from '@mui/material';

const TopupSkeleton = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton />
            </Box>
            <Box padding='20px'>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Skeleton variant='rounded' width='35%' height={30} sx={{ mb: '20px' }} />
                    <Skeleton variant='rounded' width='35%' height={30} sx={{ mb: '20px' }} />
                </Box>
                <Grid container spacing={2}>
                    {[...Array(4)].map((item: any, idx: number) => (
                        <Grid item xs={6} key={idx}>
                            <Skeleton variant='rounded' sx={{ height: '180px', padding: '0px' }} />
                        </Grid>
                    ))}
                </Grid>
                <Skeleton variant='rounded' width='100%' height={30} sx={{ my: '20px' }} />
                <Skeleton variant='rounded' width='40%' height={30} sx={{ mt: '50px' }} />
                {[...Array(3)].map((item: any, idx: number) => (
                    <Skeleton key={idx} variant='rounded' width='100%' height={60} sx={{ my: '20px' }} />
                ))}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Skeleton variant='rounded' width='20%' height={10} sx={{ mt: '0px' }} />
                </Box>
                {[...Array(2)].map((item: any, idx: number) => (
                    <Skeleton key={idx} variant='rounded' width='100%' height={60} sx={{ my: '20px' }} />
                ))}
            </Box>
        </Box>
    );
};

export default TopupSkeleton;
