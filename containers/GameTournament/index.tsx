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
import useAuthReducer from 'hooks/useAuthReducer';
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
    const { fetchAPI } = useAPICaller();

    const { setUser, clearUser } = useAuthReducer();

    const [listingGame, setListingGame] = React.useState<any>(null);
    const [detailGame, setDetailGame] = React.useState<any>(null);
    const [sessionGame, setSessionGame] = React.useState<any>(null);
    const [openNotifDialog, setOpenNotifDialog] = React.useState<boolean>(false);
    const [isLoading, isSetLoading] = React.useState<boolean>(false);
    const [signupLoginDialog, setSignupLoginDialog] = React.useState<boolean>(false);

    const fetchData = async (id: number) => {
        isSetLoading(true);
        try {
            const res = await fetchAPI({
                endpoint: `/tournaments/${id}`,
                method: 'GET'
            });
            if (res.status === 200) {
                setListingGame(res.data.data);
            }
            isSetLoading(false);
        } catch (e) {
            notify('failed data', 'e');
            isSetLoading(false);
        }
    };

    const getGameDetail = async () => {
        const response = await fetchAPI({
            endpoint: `games/${router.query.id}`,
            method: 'GET'
        });
        if (response.status === 200) {
            setDetailGame(response.data.data);
        } else {
            notify('failed get detail game', 'error');
        }
    };

    const getGameSession = async () => {
        if (userState) {
            const response = await fetchAPI({
                method: 'POST',
                endpoint: `webhook/game-sessions`,
                data: {
                    game_id: router.query.id
                }
            });
            if (response.status === 200) {
                setSessionGame(response.data.data);
            } else {
                notify('failed get session game', 'error');
            }
        }
    };

    React.useEffect(() => {
        const getAllData = async () => {
            isSetLoading(true);
            await fetchData(Number(router.query['id-tournament']));
            await getGameDetail();
            await getGameSession();
            isSetLoading(false);
        };
        getAllData();
    }, []);

    React.useEffect(() => {
        if (userState && detailGame && sessionGame) {
            const dataGames = {
                imageGame: detailGame.banner_url,
                titleGame: detailGame.name,
                sessionGame: sessionGame.session_code,
                gameUrl: detailGame.game_url,
                descriptionGame: detailGame.description
            };
            const newState = { ...userState, ...dataGames };

            if (
                (!userState.imageGame || userState.imageGame !== detailGame.banner_url) &&
                (!userState.sessionGame || userState.sessionGame !== sessionGame.session_code) &&
                (!userState.gameUrl || userState.gameUrl !== detailGame.game_url) &&
                (!userState.description || userState.description !== detailGame.description)
            ) {
                clearUser();
                setUser(newState);
            }
        }
    }, [userState, sessionGame, detailGame]);

    const handlePlay = () => {
        if (userState) {
            if (userState?.coin < listingGame.entry_coin) {
                return setOpenNotifDialog(!openNotifDialog);
            }
            return router.push(`/games/${router.query.id}/tournament/${router.query['id-tournament']}/loading`);
        }
        return setSignupLoginDialog(true);
    };

    return (
        <Box width='100%'>
            {isLoading ? (
                <Box height='290px' mt='-88px'>
                    <Skeleton sx={{ height: '400px' }} />
                </Box>
            ) : (
                <>
                    <Header isBack point={coin} profilePicture='/icons/dummy/profile-2.png' paddingX='20px' />
                    <HeaderTournament
                        backgroundImage={listingGame?.game.banner_url}
                        titleGame={listingGame?.game.name}
                        tournamentType={listingGame?.name}
                        time={listingGame?.start_time}
                        totalPlayer={listingGame?.total_users}
                        playerImg1='/icons/dummy/main-ikan.png'
                        playerImg2='/icons/dummy/user-1.png'
                        playerImg3='/icons/dummy/user-2.png'
                    />{' '}
                </>
            )}
            <Box component='main' padding='20px' color='#373737'>
                {isLoading ? (
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
                        {listingGame?.leaderboards && <LeaderboardPodium dataLeaderboard={listingGame?.leaderboards} />}
                    </Box>
                )}
                {isLoading ? (
                    <Box>
                        {[...Array(10)].map((index: any, item: any) => {
                            return <Skeleton key={item} variant='rectangular' sx={{ my: 4, mx: 1 }} />;
                        })}
                    </Box>
                ) : (
                    <Box component='section' marginBottom='40px'>
                        {listingGame?.leaderboards && <TableRank dataLeaderboard={listingGame?.leaderboards} />}
                    </Box>
                )}
            </Box>
            <Box sx={{ padding: '20px', position: 'sticky', bottom: '10px' }}>
                {isLoading ? (
                    <Skeleton sx={{ height: '80px' }} />
                ) : (
                    <ButtonPlay onClick={handlePlay} title='Play Tournament' points={listingGame?.entry_coin} />
                )}
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
