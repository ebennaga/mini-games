/* eslint-disable no-unused-vars */
import { Box, Typography, Skeleton } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import NotifDialog from 'components/Dialog/notifDialog';
import Header from 'components/Header';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import HeaderTournament from './HeaderTournament';
import ButtonPlay from './ButtonPlay';
import LeaderboardPodium from './LeaderboardPodium';
import TableRank from './TableRank';

const GameTournament = () => {
    const router = useRouter();
    // const myCoins = 10;
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const coin = userState?.coin;
    const coins = 200;
    const notify = useNotify();
    const { fetchAPI, isLoading } = useAPICaller();

    const [listingGame, setListingGame] = React.useState<any>(null);
    const [openNotifDialog, setOpenNotifDialog] = React.useState<boolean>(false);
    const [signupLoginDialog, setSignupLoginDialog] = React.useState<boolean>(false);

    const dataLeaderboard = [
        { image: '/icons/dummy/profile-2.png', username: 'rinto', point: 246000, prize: 2000 },
        { image: '/icons/dummy/profile.png', username: 'eben', point: 13200, prize: 1500 },
        { image: '/icons/dummy/profile-3.png', username: 'arya', point: 10000, prize: 1000 },
        { image: '/icons/dummy/profile.png', username: 'amang', point: 900, prize: 900 },
        { image: '/icons/dummy/profile.png', username: 'nofal', point: 200, prize: 200 },
        { image: '/icons/dummy/profile-3.png', username: 'ricky', point: 500, prize: 550 },
        { image: '/icons/dummy/profile.png', username: 'wisnu', point: 250, prize: 250 },
        { image: '/icons/dummy/profile.png', username: 'ihsan', point: 300, prize: 300 },
        { image: '/icons/dummy/profile-3.png', username: 'warteg', point: 800, prize: 800 },
        { image: '/icons/dummy/profile.png', username: 'ihsan', point: 246, prize: 246 },
        { image: '/icons/dummy/profile.png', username: 'yanto', point: 132, prize: 150 },
        { image: '/icons/dummy/profile-3.png', username: 'beban', point: 10, prize: 10 }
    ];
    const fetchData = async (id: number) => {
        try {
            const res = await fetchAPI({
                endpoint: `/tournamets/${id}`,
                method: 'GET'
            });

            if (res.status === 200) {
                setListingGame(res.data.data);
            }
        } catch (e) {
            notify('failed data', 'e');
        }
    };

    React.useEffect(() => {
        fetchData(listingGame);
    }, []);

    const handlePlay = () => {
        if (userState) {
            if (userState?.coin < coins) {
                return setOpenNotifDialog(!openNotifDialog);
            }
            return router.push(`/games/${router.query.id}/tournament/result`);
        }
        return setSignupLoginDialog(true);
    };

    // if (isLoading || !listingGame) {
    //     return <Box>Loading</Box>;
    // }

    return (
        <Box width='100%'>
            <Header isBack point={coin} profilePicture='/icons/dummy/profile-2.png' paddingX='20px' />
            <HeaderTournament
                backgroundImage='/images/dummy/game-hopup.svg'
                titleGame='Hop Up'
                tournamentType='Tournament 1'
                time='6d 13h 23m'
                totalPlayer={0}
                playerImg1='/icons/dummy/main-ikan.png'
                playerImg2='/icons/dummy/user-1.png'
                playerImg3='/icons/dummy/user-2.png'
            />
            <Box component='main' padding='20px' color='#373737'>
                {isLoading || !listingGame ? (
                    <Box>
                        <Skeleton animation='wave' variant='rectangular' width='100%' />
                    </Box>
                ) : (
                    <Box component='section' padding='28px 0'>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '37px' }}>
                            <Typography component='h2' fontSize='24px' fontWeight={700}>
                                Leaderboard
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                                <img src='/icons/xs-troffy.png' alt='troffy' />
                                <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>250</Typography>
                            </Box>
                        </Box>
                        <LeaderboardPodium dataLeaderboard={listingGame.leaderboards} />
                    </Box>
                )}
                {isLoading || !listingGame ? (
                    <Box>
                        {[...Array(10)].map((index: any, item: any) => {
                            return <Skeleton key={item} variant='rectangular' sx={{ my: 4, mx: 1 }} />;
                        })}
                    </Box>
                ) : (
                    <Box component='section' marginBottom='40px'>
                        <TableRank dataLeaderboard={listingGame.leaderboards} />
                    </Box>
                )}
            </Box>
            <Box sx={{ padding: '20px', position: 'sticky', bottom: '10px' }}>
                {/* <ButtonPlay
                    onClick={() => {
                        if (coin < coins) {
                            return setOpenNotifDialog(!openNotifDialog);
                        }
                        return router.push(`/games/${router.query.id}/tournament/result`);
                    }}
                    title='Play Tournament'
                    points={coins}
                /> */}
                <ButtonPlay onClick={handlePlay} title='Play Tournament' points={coins} />
            </Box>
            <NotifDialog
                open={openNotifDialog}
                setOpenDialog={setOpenNotifDialog}
                body='You don’t have Coins in your balance. 
Top up Coins to continue'
            />
            <SignupLoginDialog open={signupLoginDialog} setOpen={setSignupLoginDialog} />
        </Box>
    );
};

export default GameTournament;
