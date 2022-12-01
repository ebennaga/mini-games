import { Box, Grid, Skeleton, Tab, Tabs } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import React from 'react';

const RedeemHistoryLoading = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px 20px 0px'>
                <HeaderBack title='Redeem History' />
            </Box>
            <Grid container spacing={2} padding='20px'>
                <Box sx={{ mt: '20px', maxWidth: { xs: 370, sm: 480 }, bgcolor: 'background.paper' }}>
                    <Tabs
                        indicatorColor='secondary'
                        textColor='inherit'
                        // value={value}
                        // onChange={handleChange}
                        variant='scrollable'
                        scrollButtons={false}
                        aria-label='scrollable prevent tabs example'
                    >
                        <Tab
                            disableRipple
                            sx={{
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    fontWeight: 'bold'
                                }
                            }}
                            label='Semua'
                        />
                        <Tab
                            disableRipple
                            sx={{
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    fontWeight: 'bold'
                                }
                            }}
                            label='Diproses'
                        />
                        <Tab
                            disableRipple
                            sx={{
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    fontWeight: 'bold'
                                }
                            }}
                            label='Dikemas'
                        />
                        <Tab
                            disableRipple
                            sx={{
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    fontWeight: 'bold'
                                }
                            }}
                            label='Dikirim'
                        />
                        <Tab
                            disableRipple
                            sx={{
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    fontWeight: 'bold'
                                }
                            }}
                            label='Selesai'
                        />
                    </Tabs>
                </Box>
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
