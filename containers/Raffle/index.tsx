/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import React from 'react';
import useAPICaller from 'hooks/useAPICaller';
import numberFormat from 'helper/numberFormat';
import useNotify from 'hooks/useNotify';
import getTimeRaffle from 'helper/getTimeRaffle';
import { useSelector } from 'react-redux';
import { Box, Grid, Typography, ButtonBase } from '@mui/material';
import Header from 'components/Header';
import { WatchLater, Add, Remove, HelpOutline } from '@mui/icons-material';
import Button from 'components/Button/Index';
import StatusRoundDialog from 'components/Dialog/StatusRoundDialog';
import RewardDialog from 'components/Dialog/RewardDialog';
import RaffleWinners from './RaffleWinnersList';
import BuyTicketDialog from './BuyTicketDialog';
import RaffleSkeleton from './RaffleSkeleton';

const RaffleContainer = () => {
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const [winChance, setWinChance] = React.useState<any>(null);
    const [openBuyDialog, setOpenBuyDialog] = React.useState<any>(false);
    const [rafflesData, setRafflesData] = React.useState<any>(null);
    const [openRewardDialog, setOpenRewardDialog] = React.useState<any>(false);
    const [openStatusRoundDialog, setOpenStatusRoundDialog] = React.useState<any>(false);
    const [roundDay, setRoundDay] = React.useState<boolean>(false);
    const [buttonRaffle, setButtonRaffle] = React.useState<boolean>(false);
    const [borderValue, setBorderValue] = React.useState<string>('none');
    const [myTickets, setMytickets] = React.useState<number>(0);
    const [totalTickets, setTotalTickets] = React.useState<number>(0);
    const { fetchAPI, isLoading } = useAPICaller();
    const notify = useNotify();

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
        { image: '/icons/dummy/profile-3.png', username: 'beban', tickets: 10, prize: 10 },
        { image: '/icons/dummy/profile-3.png', username: 'ricky', tickets: 500, prize: 550 },
        { image: '/icons/dummy/profile.png', username: 'wisnu', tickets: 250, prize: 250 },
        { image: '/icons/dummy/profile.png', username: 'ihsan', tickets: 300, prize: 300 },
        { image: '/icons/dummy/profile-3.png', username: 'warteg', tickets: 800, prize: 800 },
        { image: '/icons/dummy/profile.png', username: 'ihsan', tickets: 246, prize: 246 },
        { image: '/icons/dummy/profile.png', username: 'yanto', tickets: 132, prize: 150 },
        { image: '/icons/dummy/profile-3.png', username: 'beban', tickets: 10, prize: 10 }
    ];

    const fetchData = async () => {
        try {
            const res = await fetchAPI({
                endpoint: 'raffles/id',
                method: 'GET'
            });
            notify(res.data?.message, 'success');
            if (res.data?.data) {
                setRafflesData(res.data.data);
                setMytickets(res.data.data.auths?.your_tickets);
                setTotalTickets(res.data.data.auths?.total_tickets);
            }
        } catch (e) {
            notify('failed data', e);
        }
    };

    const handleBuyRaffle = async () => {
        const response = await fetchAPI({
            method: 'PUT',
            endpoint: `raffles/${rafflesData.id}/redeem`,
            data: {
                total_tickets: myTickets
            }
        });
        setTotalTickets(totalTickets + myTickets);
        setWinChance(myTickets / totalTickets);
        notify(response.data?.message, 'success');
        setOpenBuyDialog(!openBuyDialog);
        setOpenRewardDialog(!openRewardDialog);
    };

    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    React.useEffect(() => {
        fetchData();
        const watchScroll = () => {
            window.addEventListener('scroll', handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    React.useEffect(() => {
        if (myTickets === 0) {
            setButtonRaffle(true);
        } else {
            setButtonRaffle(false);
        }
    }, [myTickets, buttonRaffle]);

    if (isLoading) {
        return <RaffleSkeleton roundDay={roundDay} />;
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='15px 20px'
                sx={{
                    borderBottom: borderValue,
                    border: '1px solid white',
                    mb: 2,
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    zIndex: 999
                }}
            >
                <Header isBack isShops logo='/icons/logo.svg' profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='20px'>
                <Grid container sx={{ width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid item xs={6}>
                        <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Lucky Raffle</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <ButtonBase
                            sx={{
                                display: 'flex',
                                width: '100%',
                                backgroundColor: '#949494',
                                alignItems: 'center',
                                padding: '3px 1px',
                                borderRadius: '15px',
                                justifyContent: 'space-evenly'
                            }}
                        >
                            <Typography sx={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>Tutorials</Typography>
                            <HelpOutline sx={{ fontSize: '15px', color: 'white' }} />
                        </ButtonBase>
                    </Grid>
                </Grid>
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
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <img src='/images/lg-points.png' alt='point' width={60} />
                                        <Typography sx={{ fontSize: '40px', color: 'white', fontWeight: 700 }}>
                                            {numberFormat(rafflesData?.ticket_point_price)}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '12px', color: 'white', fontWeight: 500 }}>
                                        Lucky Raffle round {rafflesData?.raffle_no} ends in
                                    </Typography>
                                    <Box sx={{ display: 'flex', mb: 2, color: 'white', gap: '5px', alignItems: 'center' }}>
                                        <WatchLater />
                                        <Typography sx={{ fontSize: '15px' }}>
                                            {getTimeRaffle(rafflesData?.start_time, rafflesData?.end_time)}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            <Typography sx={{ fontSize: '12px', color: 'white', fontWeight: 500, padding: '10px 15px' }}>
                                No. {rafflesData?.raffle_no}
                            </Typography>
                            <img src='/images/lucky-raffle.png' alt='luckyraffle' />
                        </Grid>
                    </Grid>
                    {roundDay && (
                        <Box sx={{ width: '100%', textAlign: 'center' }}>
                            <Box
                                sx={{
                                    backgroundColor: '#FF4567',
                                    mt: '20px',
                                    borderRadius: '8px',
                                    color: 'white',
                                    textAlign: 'center',
                                    paddingTop: '5px'
                                }}
                            >
                                <Typography sx={{ fontSize: '12px', fontWeight: 700 }}>Next Lucky Raffle Round 286 starts in</Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        mb: 2,
                                        color: 'white',
                                        gap: '5px',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <WatchLater sx={{ width: '15px' }} />
                                    <Typography sx={{ fontSize: '12px' }}>6d 13h 23m</Typography>
                                </Box>
                            </Box>
                            <Typography sx={{ fontSize: '24px', color: '#373737', fontWeight: 700 }}>
                                Winners of Raffle rounds {rafflesData?.raffle_no} <br />{' '}
                                {rafflesData?.auths.is_win ? (
                                    <span style={{ color: '#949494', fontSize: '14px' }}>
                                        The winner is <span style={{ color: '#A54CE5' }}>you</span>
                                    </span>
                                ) : (
                                    <span style={{ color: '#949494', fontSize: '14px' }}>You aren`t the winner in this round</span>
                                )}
                            </Typography>
                            <Box sx={{ mt: '20px' }}>
                                <img src={rafflesData?.auths.is_win ? '/images/winner.png' : '/images/not-winner.png'} alt='winner' />
                                <Typography sx={{ fontSize: '20px', fontWeight: 700, mt: '30px' }}>Arya Stark</Typography>
                            </Box>
                        </Box>
                    )}
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
                                <Typography sx={{ fontSize: '12px' }}>{roundDay ? 'Round' : 'Your Tickets'}</Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
                                    borderRight: '1px solid rgba(255, 255, 255, 0.05)'
                                }}
                            >
                                <Typography sx={{ fontSize: '12px' }}>{roundDay ? 'Prize' : 'Total Tickets'}</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '12px' }}>{roundDay ? 'Your Tickets' : 'Win Chance'}</Typography>
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
                                <Typography sx={{ fontSize: roundDay ? '13px' : '20px', fontWeight: 700 }}>
                                    {roundDay ? '285' : myTickets}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={4}
                                sx={{
                                    borderLeft: '1px solid rgba(40, 38, 38, 0.05)',
                                    borderRight: '1px solid rgba(40, 38, 38, 0.05)'
                                }}
                            >
                                {roundDay ? (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '5px'
                                        }}
                                    >
                                        <Box>
                                            <img src='/images/point-shops.png' alt='points' />
                                        </Box>
                                        <Typography sx={{ fontSize: '13px', fontWeight: 700 }}>350.000</Typography>
                                    </Box>
                                ) : (
                                    <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>{numberFormat(totalTickets)}</Typography>
                                )}
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>
                                    {roundDay ? myTickets : `${!winChance ? String(myTickets / totalTickets).slice(0, 6) : winChance}%`}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    {!roundDay && (
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
                                        if (myTickets !== 0) {
                                            setMytickets(myTickets - 1);
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
                                <Typography sx={{ fontSize: '50px', fontWeight: 'bold', color: '#373737' }}>{myTickets}</Typography>
                                <ButtonBase
                                    disableRipple
                                    onClick={() => {
                                        setMytickets(myTickets + 1);
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
                    )}
                    <RaffleWinners dataList={dataList} />
                </Grid>
                {!roundDay && (
                    <Box sx={{ position: 'sticky', bottom: '20px' }}>
                        <Button
                            onClick={() => setOpenBuyDialog(!openBuyDialog)}
                            title='Buy Raffle'
                            backgoundColor='#A54CE5'
                            color='white'
                            disabled={buttonRaffle}
                        />
                    </Box>
                )}
            </Box>
            <BuyTicketDialog
                handleBuyRaffle={handleBuyRaffle}
                point={userState.point}
                count={myTickets}
                open={openBuyDialog}
                setOpen={setOpenBuyDialog}
            />
            <RewardDialog
                body={`Successfully purchased ${myTickets} tickets in raffle round ${rafflesData?.raffle_no}`}
                open={openRewardDialog}
                setOpenDialog={setOpenRewardDialog}
                path='/shops/lucky-raffle'
            />
            <StatusRoundDialog isWinner={rafflesData?.auths.is_win} open={openStatusRoundDialog} setOpen={setOpenStatusRoundDialog} />
        </Box>
    );
};

export default RaffleContainer;
