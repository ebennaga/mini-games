import { Box, Grid, Skeleton } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import React from 'react';

const RedeemHistoryLoading = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px 20px 0px'>
                <HeaderBack title='Redeem History' />
            </Box>
            <Grid container spacing={2} padding='20px'>
                {[...Array(4)].map((_item: any, index: number) => (
                    <Grid item xs={3} key={index}>
                        <Skeleton sx={{ width: '100%', height: '50px' }} />
                    </Grid>
                ))}
                <Grid item xs={12} borderBottom='1px solid rgba(0, 0, 0, 0.1)' />
            </Grid>
            {[...Array(4)].map((_item: any, index: number) => (
                <Grid container padding='20px' spacing={1} key={index}>
                    <Grid item xs={3} height='100px'>
                        <Skeleton sx={{ width: '100%', height: '150px', mt: '-30px' }} />
                    </Grid>
                    <Grid item xs={9} display='flex' flexDirection='column' justifyContent='space-between'>
                        <Skeleton sx={{ height: '20px', width: '100%' }} />
                        <Skeleton sx={{ height: '20px', width: '70%' }} />
                        <Skeleton sx={{ height: '20px', width: '50%' }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Skeleton sx={{ height: '20px', width: '10%' }} />
                            <Skeleton sx={{ height: '20px', width: '10%' }} />
                        </Box>
                    </Grid>
                </Grid>
            ))}
        </Box>
    );
};

export default RedeemHistoryLoading;
