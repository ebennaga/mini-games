import React from 'react';
import HeaderBack from 'components/HeaderBack';
import { Box, Divider, Grid, Typography, Tabs, Tab } from '@mui/material';
import TabPanelReferral from './TabReferral';
import TabPanelEarning from './TabEarning';

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
};
const MyReferrals = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737', height: '100%' }}>
            <HeaderBack title='Promo Code' />
            <Box component='section' sx={{ marginTop: '57px', marginLeft: '24px', marginRight: '24px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ color: '#373737', fontWeight: 500, fontSize: '12px' }}>Referrals:</Typography>
                            <Typography
                                sx={{ marginTop: '8px', color: '#373737', fontWeight: 700, fontSize: '20px', marginBottom: '24px' }}
                            >
                                3 Friends
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography sx={{ color: '#373737', fontWeight: 500, fontSize: '12px' }}>Reward:</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', marginTop: '8px' }}>
                                <Box>
                                    <img src='/images/sm-coin.png' alt='coin' />
                                </Box>
                                <Typography sx={{ color: '#373737', fontWeight: 700, fontSize: '20px' }}>150</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Divider />

                <Typography sx={{ color: '#949494', fontWeight: 400, fontSize: '12px', marginBottom: '14px', marginTop: '24px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                </Typography>
                <Typography sx={{ color: '#949494', fontWeight: 400, fontSize: '12px', marginBottom: '14px', marginTop: '24px' }}>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                </Typography>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mt: '20px' }}>
                    <Tabs
                        variant='fullWidth'
                        value={value}
                        onChange={handleChange}
                        indicatorColor='secondary'
                        textColor='inherit'
                        aria-label='basic tabs example'
                        TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
                        sx={{
                            '& .MuiTabs-indicator': {
                                display: 'flex',
                                justifyContent: 'center',
                                backgroundColor: 'transparent'
                            },
                            '& .MuiTabs-indicatorSpan': {
                                maxWidth: 150,
                                width: '100%',
                                backgroundColor: '#A54CE5'
                            },
                            '& .MuiButtonBase-root': {
                                minHeight: 0
                            }
                        }}
                    >
                        <Tab
                            label='Referral Details'
                            {...a11yProps(0)}
                            sx={{
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    fontWeight: 'bold'
                                }
                            }}
                        />
                        <Tab
                            label='Earning Details'
                            {...a11yProps(1)}
                            sx={{
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    fontWeight: 'bold'
                                }
                            }}
                        />
                    </Tabs>
                </Box>
                <TabPanelReferral value={value} index={0} />
                <TabPanelEarning value={value} index={1} />
            </Box>
        </Box>
    );
};

export default MyReferrals;
