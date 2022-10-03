import { Box, Grid, Skeleton } from '@mui/material';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';
import React from 'react';

const ShopsSkeleton = () => {
    return (
        <Box sx={{ width: '-webkit-fill-available', px: '20px' }}>
            <HeaderSkeleton />
            <Box display='flex' justifyContent='space-between' marginTop={2}>
                <Skeleton sx={{ height: '30px', width: '170px' }} />
                <Skeleton sx={{ height: '30px', width: '100px' }} />
            </Box>
            <Skeleton sx={{ height: '200px', mb: '-50px' }} />
            <Grid container spacing={2}>
                {[...Array(6)].map((_item: any, index: number) => {
                    return (
                        <Grid item xs={6} key={index} sx={{ height: '180px' }}>
                            <Skeleton sx={{ height: '250px' }} />
                        </Grid>
                    );
                })}
            </Grid>
            <Skeleton sx={{ height: '250px', mt: 2, mb: '-65px' }} />
            <Skeleton sx={{ height: '150px', mt: 2, mb: '-50px' }} />
        </Box>
    );
};

export default ShopsSkeleton;
