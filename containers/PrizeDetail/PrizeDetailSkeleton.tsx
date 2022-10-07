/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Skeleton, Grid } from '@mui/material';

const PrizeSkeletonDetail = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton />
            </Box>
            <Box padding='10px 20px'>
                <Skeleton variant='rounded' width='100%' height={300} />
                <Box sx={{ width: '100%' }}>
                    <Grid container justifyContent='space-between' alignItems='center' mt={2}>
                        <Grid item xs={10}>
                            <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}>
                                <Skeleton variant='rounded' width={40} height={30} />
                                <Skeleton variant='rounded' width={130} height={30} />
                            </Box>
                        </Grid>
                        <Grid item xs={1}>
                            <Skeleton variant='circular' width={30} height={30} />
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <Skeleton variant='rounded' width={200} height={20} />
                        <Skeleton variant='rounded' width={310} height={15} />
                    </Box>
                </Box>
                {[...Array(3)].map((i: any, idx: any) => (
                    <Box key={idx} sx={{ width: '100%', mt: '50px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <Skeleton variant='rounded' width={100} height={20} />
                        <Skeleton variant='rounded' width={300} height={12} />
                        <Skeleton variant='rounded' width={290} height={12} />
                        <Skeleton variant='rounded' width={280} height={12} />
                        <Skeleton variant='rounded' width={200} height={12} />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PrizeSkeletonDetail;
