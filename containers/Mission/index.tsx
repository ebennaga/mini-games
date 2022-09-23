/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography, ButtonBase, Tab, Tabs, Box } from '@mui/material';
import { ArrowCircleLeft, WatchLater } from '@mui/icons-material';
import TabPanel from 'components/TabPanel';
import Layout from 'components/Layout/Index';
import MissionCard from 'components/MissionCard';
import Button from 'components/Button/Index';

const a11yProps = (index: number) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `mission-tabpanel-${index}`
    };
};

const MissionPage = () => {
    const [value, setValue] = React.useState<number>(0);
    const [isCompleted, setIsCompleted] = React.useState<boolean>(true);
    const [isClaimed, setIsClaimed] = React.useState<boolean>(true);
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Layout backgoundColor='#FFF'>
            <Box sx={{ margin: '20px', width: '90%' }}>
                <Grid container>
                    <Grid item xs={2}>
                        <ButtonBase>
                            <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{ textAlign: 'center', fontSize: '25px', fontWeight: 700 }}>Mission</Typography>
                    </Grid>
                </Grid>
            </Box>
            <Grid container direction='row' justifyContent='center'>
                <Grid item xs={12}>
                    <Tabs
                        sx={{ width: '100%', borderBottom: '1px solid rgba(0, 0, 0, 0.1)', mt: 3 }}
                        variant='fullWidth'
                        indicatorColor='secondary'
                        textColor='inherit'
                        value={value}
                        onChange={handleChange}
                        aria-label='tabs-mission'
                    >
                        {['Daily', 'Weekly', 'Monthly'].map((item, idx) => (
                            <Tab key={idx} sx={{ fontWeight: 'bold', textTransform: 'none' }} label={item} {...a11yProps(idx)} />
                        ))}
                    </Tabs>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} index={0} sx={{ width: '100%' }}>
                        <Box sx={{ margin: '20px' }}>
                            <Grid
                                container
                                sx={{
                                    backgroundColor: '#FF4567',
                                    borderRadius: '24px',
                                    px: 1,
                                    py: 1,
                                    my: 4,
                                    width: '100%',
                                    color: 'white'
                                }}
                            >
                                <Grid item sx={{ textAlign: 'center' }} xs={1}>
                                    <WatchLater />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography sx={{ fontWeight: 'bold' }}>Daily Mission Reset : 08 : 52 : 10</Typography>
                                </Grid>
                            </Grid>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', my: 4 }}>Progress Mission</Typography>
                            {[...Array(3)].map((item, index) => (
                                <MissionCard
                                    achievMission='5/5'
                                    descMission='Play 5 Games Banana jump'
                                    statusMission='Mission Complete'
                                    isCompleted={isCompleted}
                                    key={index}
                                >
                                    {!isClaimed ? (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                width: '50%',
                                                backgroundColor: '#FFF5CD',
                                                padding: '8px',
                                                justifyContent: 'space-around',
                                                borderRadius: '10px'
                                            }}
                                        >
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px' }}>Claimed</Typography>
                                        </Box>
                                    ) : (
                                        <>
                                            {' '}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    width: '25%',
                                                    backgroundColor: '#E8DEFF',
                                                    padding: '8px',
                                                    justifyContent: 'space-around',
                                                    borderRadius: '10px'
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: 'bold', color: '#9163F6', fontSize: '19.5px' }}>
                                                    XP
                                                </Typography>
                                                <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px' }}>10</Typography>
                                            </Box>
                                            {isCompleted && <Typography> + </Typography>}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    width: '25%',
                                                    backgroundColor: '#FFF5CD',
                                                    padding: '8px',
                                                    justifyContent: 'space-between',
                                                    borderRadius: '10px',
                                                    fontWeight: 'bold',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <img src='/images/coin.png' alt='coin-img' />
                                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>10</Typography>
                                            </Box>
                                        </>
                                    )}
                                </MissionCard>
                            ))}
                        </Box>
                        <Box sx={{ width: '100%', height: '1px', backgroundColor: 'rgba(40, 38, 38, 0.2)', marginTop: '40px' }} />
                        <Box sx={{ margin: '20px' }}>
                            <Typography sx={{ fontSize: '30px', fontWeight: 'bold', my: 4 }}>Completed Mission</Typography>
                            {[...Array(2)].map((item, index) => (
                                <MissionCard
                                    achievMission='5/5'
                                    statusMission='Mission Complete'
                                    descMission='Play 5 Games Banana jump'
                                    isClaimed={isClaimed}
                                    isCompleted={isCompleted}
                                    key={index}
                                >
                                    {isClaimed ? (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                width: '50%',
                                                backgroundColor: '#FFF5CD',
                                                padding: '8px',
                                                justifyContent: 'space-around',
                                                borderRadius: '10px'
                                            }}
                                        >
                                            <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px' }}>Claimed</Typography>
                                        </Box>
                                    ) : (
                                        <>
                                            {' '}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    width: '25%',
                                                    backgroundColor: '#E8DEFF',
                                                    padding: '8px',
                                                    justifyContent: 'space-around',
                                                    borderRadius: '10px'
                                                }}
                                            >
                                                <Typography sx={{ fontWeight: 'bold', color: '#9163F6', fontSize: '19.5px' }}>
                                                    XP
                                                </Typography>
                                                <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px' }}>10</Typography>
                                            </Box>
                                            {isCompleted && <Typography> + </Typography>}
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    width: '25%',
                                                    backgroundColor: '#FFF5CD',
                                                    padding: '8px',
                                                    justifyContent: 'space-between',
                                                    borderRadius: '10px',
                                                    fontWeight: 'bold',
                                                    alignItems: 'center'
                                                }}
                                            >
                                                <img src='/images/coin.png' alt='coin-img' />
                                                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>10</Typography>
                                            </Box>
                                        </>
                                    )}
                                </MissionCard>
                            ))}
                            <Box sx={{ marginTop: '120px' }}>
                                <Button
                                    disabled={isDisabled}
                                    height='60px'
                                    backgoundColor={isDisabled ? '#E1E1E1' : '#A54CE5'}
                                    color={isDisabled ? '#FFF' : '#FFF'}
                                    title='Claim Reward'
                                    border={isDisabled ? 'none' : '#FFF'}
                                />
                            </Box>
                        </Box>
                    </TabPanel>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} index={1}>
                        <Typography>Weekly</Typography>
                    </TabPanel>
                </Grid>
                <Grid item xs={12}>
                    <TabPanel value={value} index={2}>
                        <Typography>Monthly</Typography>
                    </TabPanel>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default MissionPage;
