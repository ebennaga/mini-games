/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Grid, Skeleton } from '@mui/material';

const ConfirmSkeleton = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton />
            </Box>
            <Box padding='0 20px' sx={{ mt: '30px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Skeleton variant='rounded' height={100} />
                    </Grid>
                    <Grid item xs={8}>
                        <Skeleton variant='rounded' width={80} height={14} />
                        <Skeleton variant='rounded' sx={{ mt: '7px' }} width={200} height={14} />
                        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', mt: 2 }}>
                            <Box>
                                <Skeleton variant='rounded' width={14} height={14} />
                            </Box>
                            <Skeleton variant='rounded' width={80} height={14} />
                        </Box>
                    </Grid>
                </Grid>
                <Skeleton variant='rounded' sx={{ mt: '25px' }} width='100%' height={12} />
                <Skeleton variant='rounded' sx={{ mt: '7px' }} width='100%' height={12} />
                <Skeleton variant='rounded' sx={{ mt: '7px' }} width='100%' height={12} />
                <Skeleton variant='rounded' sx={{ mt: '7px' }} width='100%' height={12} />
                <Skeleton variant='rounded' sx={{ mt: '7px' }} width='100%' height={12} />
            </Box>
            <Box padding='20px' margin='20px 0px' sx={{ display: 'flex', gap: '2px', flexDirection: 'column' }}>
                <Skeleton variant='rounded' width={110} height={25} sx={{ mb: '25px' }} />
                {[...Array(4)].map((i: any, idx: any) => (
                    <Box key={idx} sx={{ mt: '40px' }}>
                        <Skeleton variant='rounded' width={70} height={15} sx={{ mb: '10px' }} />
                        <Skeleton variant='rounded' width='100%' height={1} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ConfirmSkeleton;
