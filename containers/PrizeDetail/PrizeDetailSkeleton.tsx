/* eslint-disable no-nested-ternary */
import React from 'react';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import { Box, Skeleton, Grid } from '@mui/material';

const PrizeSkeletonDetail = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px'>
                <HeaderSkeleton isPage={false} />
            </Box>
            <Box padding='10px 20px'>
                <Skeleton variant='rounded' width='100%' height={500} />
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ mt: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Skeleton variant='rounded' width={200} height={20} />
                        <Skeleton variant='circular' width={30} height={30} />
                    </Box>
                </Box>
                <Grid container justifyContent='space-between' alignItems='center' mt={4}>
                    <Grid item xs={10}>
                        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', width: '100%' }}>
                            <Skeleton variant='rounded' width={130} height={30} />
                            <Skeleton variant='rounded' width={40} height={30} />
                        </Box>
                    </Grid>
                </Grid>
                {[...Array(1)].map((i: any, idx: any) => (
                    <Box key={idx} sx={{ width: '100%', mt: '50px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {[...Array(5)].map((item: any, idx: any) => {
                            return <Skeleton variant='rounded' width='100%' height={12} key={idx} />;
                        })}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default PrizeSkeletonDetail;
