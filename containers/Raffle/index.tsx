/* eslint-disable no-unused-vars */
import { Box, Grid, Typography, ButtonBase } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import { WatchLater, Add, Remove, ArrowBack, ArrowForward } from '@mui/icons-material';
import Button from 'components/Button/Index';
import StatusRoundDialog from 'components/Dialog/StatusRoundDialog';
import RewardDialog from 'components/Dialog/RewardDialog';
import RaffleWinners from './RaffleWinnersList';
import BuyTicketDialog from './BuyTicketDialog';

const RaffleContainer = () => {
    const [quantity, setQuantity] = React.useState<number>(0);
    const [openBuyDialog, setOpenBuyDialog] = React.useState<any>(false);
    const [openRewardDialog, setOpenRewardDialog] = React.useState<any>(false);
    const [openStatusRoundDialog, setOpenStatusRoundDialog] = React.useState<any>(true);

    const dataList = [
        { image: '/icons/dummy/profile-2.png', username: 'rinto', tickets: 246000, prize: 2000 },
        { image: '/icons/dummy/profile.png', username: 'eben', tickets: 13200, prize: 1500 },
        { image: '/icons/dummy/profile-3.png', username: 'arya', tickets: 10000, prize: 1000 },
        { image: '/icons/dummy/profile.png', username: 'amang', tickets: 900, prize: 900 },
        { image: '/icons/dummy/profile.png', username: 'nofal', tickets: 200, prize: 200 },
        { image: '/icons/dummy/profile-3.png', username: 'ricky', tickets: 500, prize: 550 },
        { image: '/icons/dummy/profile.png', username: 'wisnu', tickets: 250, prize: 250 },
        { image: '/icons/dummy/profile.png', username: 'ihsan', tickets: 300, prize: 300 },
        { image: '/icons/dummy/profile-3.png', username: 'warteg', tickets: 800, prize: 800 },
        { image: '/icons/dummy/profile.png', username: 'ihsan', tickets: 246, prize: 246 },
        { image: '/icons/dummy/profile.png', username: 'yanto', tickets: 132, prize: 150 },
        { image: '/icons/dummy/profile-3.png', username: 'beban', tickets: 10, prize: 10 }
    ];

    const handleBuyRaffle = () => {
        setOpenBuyDialog(!openBuyDialog);
        setOpenRewardDialog(!openRewardDialog);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='20px'
                sx={{
                    borderBottom: '1px solid rgba(148, 148, 148, 0.35)',
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999
                }}
            >
                <Header isShops logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='20px'>
                <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Lucky Raffle</Typography>
                <Grid container justifyContent='center' alignItems='center' sx={{ mt: '25px' }}>
                    <Grid
                        container
                        justifyContent='space-between'
                        sx={{ backgroundColor: '#373737', borderRadius: '15px', height: '100%' }}
                        direction='row'
                    >
                        <Grid item xs={6} sx={{ padding: '10px 20px' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%'
                                }}
                            >
                                <Box>
                                    <Typography sx={{ fontSize: '12px', color: 'white', fontWeight: 500 }}>Price Worth</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <img src='/icons/points.png' alt='point' />
                                        <Typography sx={{ fontSize: '40px', color: 'white', fontWeight: 700 }}>35.000</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '12px', color: 'white', fontWeight: 500 }}>
                                        Lucky Raffle round 285 ends in
                                    </Typography>
                                    <Box sx={{ display: 'flex', mb: 2, color: 'white', gap: '5px', alignItems: 'center' }}>
                                        <WatchLater />
                                        <Typography sx={{ fontSize: '15px' }}>6d 13h 23m</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            <Typography sx={{ fontSize: '12px', color: 'white', fontWeight: 500, padding: '10px 15px' }}>
                                No. 284
                            </Typography>
                            <img src='/images/lucky-raffle.png' alt='luckyraffle' />
                        </Grid>
                    </Grid>
                    <Box sx={{ width: '100%' }}>
                        <Grid
                            container
                            sx={{
                                mt: '30px',
                                backgroundColor: '#373737',
                                padding: '12px',
                                color: 'white',
                                textAlign: 'center',
                                borderRadius: '15px 15px 0px 0px'
                            }}
                            justifyContent='center'
                        >
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '12px' }}>Your Tickets</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRight: '1px solid rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                <Typography sx={{ fontSize: '12px' }}>Total Tickets</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '12px' }}>Win Chance</Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            sx={{
                                backgroundColor: '#F4F1FF',
                                padding: '12px',
                                color: '#373737',
                                textAlign: 'center',
                                borderRadius: '0px 0px 15px 15px'
                            }}
                            justifyContent='center'
                            alignItems='center'
                        >
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>10</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    borderLeft: '1px solid rgba(40, 38, 38, 0.05)',
                                    borderRight: '1px solid rgba(40, 38, 38, 0.05)'
                                }}
                            >
                                <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>101.195.723</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>0.00001976%</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container justifyContent='center' alignItems='center' sx={{ mt: '50px' }}>
                        <Grid item xs={6}>
                            <Typography sx={{ textAlign: 'center', color: '#949494', fontSize: '14px', fontWeight: 500 }}>
                                No. of Raffle
                            </Typography>
                        </Grid>
                        <Grid container justifyContent='space-between' sx={{ mt: '20px' }} alignItems='center'>
                            <ButtonBase
                                disableRipple
                                onClick={() => {
                                    if (quantity !== 0) {
                                        setQuantity(quantity - 1);
                                    }
                                }}
                                sx={{
                                    ':active': { backgroundColor: '#D9D9D9' },
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '1px solid black',
                                    borderRadius: '100%'
                                }}
                            >
                                <Remove sx={{ fontWeight: 'bold' }} />
                            </ButtonBase>
                            <Typography sx={{ fontSize: '50px', fontWeight: 'bold', color: '#373737' }}>{quantity}</Typography>
                            <ButtonBase
                                disableRipple
                                onClick={() => {
                                    if (quantity >= 0) {
                                        setQuantity(quantity + 1);
                                    }
                                }}
                                sx={{
                                    ':active': { backgroundColor: '#D9D9D9' },
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '1px solid black',
                                    borderRadius: '100%'
                                }}
                            >
                                <Add />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                <img src='/images/point-shops.png' alt='point' />
                                <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>
                                    <span style={{ fontWeight: 'bold' }}>100</span> per Raffle
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <RaffleWinners dataList={dataList} />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px', my: '30px' }}>
                        <ButtonBase
                            disableRipple
                            sx={{
                                ':active': { backgroundColor: '#D9D9D9' },
                                cursor: 'pointer',
                                padding: '10px',
                                border: '1.3px solid #D9D9D9',
                                borderRadius: '100%'
                            }}
                        >
                            <ArrowBack sx={{ color: '#A54CE5' }} />
                        </ButtonBase>
                        <ButtonBase
                            disableRipple
                            sx={{
                                ':active': { backgroundColor: '#D9D9D9' },
                                cursor: 'pointer',
                                padding: '10px',
                                border: '1.3px solid #D9D9D9',
                                borderRadius: '100%'
                            }}
                        >
                            <ArrowForward sx={{ color: '#A54CE5' }} />
                        </ButtonBase>
                    </Box>
                </Grid>
                <Button onClick={() => setOpenBuyDialog(!openBuyDialog)} title='Buy Raffle' backgoundColor='#A54CE5' color='white' />
            </Box>
            <BuyTicketDialog handleBuyRaffle={handleBuyRaffle} count={quantity} open={openBuyDialog} setOpen={setOpenBuyDialog} />
            <RewardDialog
                body={`Successfully purchased ${quantity} tickets in raffle round 284`}
                open={openRewardDialog}
                setOpenDialog={setOpenRewardDialog}
            />
            <StatusRoundDialog open={openStatusRoundDialog} setOpen={setOpenStatusRoundDialog} />
        </Box>
    );
};

export default RaffleContainer;
