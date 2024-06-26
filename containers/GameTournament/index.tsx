/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { Box, Typography, Skeleton, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import NotifDialog from 'components/Dialog/notifDialog';
import Header from 'components/Header';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import useAuthReducer from 'hooks/useAuthReducer';
import getRemainingTimes from 'helper/getRemainingTime';
import HeaderTournament from './HeaderTournament';
import ButtonPlay from './ButtonPlay';
import LeaderboardPodium from './LeaderboardPodium';
import TableRank from './TableRank';

const GameTournament = () => {
    const router = useRouter();
    // const myCoins = 10;
    const userState = useSelector((state: any) => state?.webpage?.user?.user);
    const coin = userState?.coin;
    const notify = useNotify();
    const { fetchAPI } = useAPICaller();

    const { setUser, clearUser } = useAuthReducer();

    const [listingGame, setListingGame] = React.useState<any>(null);
    const [openNotifDialog, setOpenNotifDialog] = React.useState<boolean>(false);
    const [isLoading, isSetLoading] = React.useState<boolean>(false);
    const [signupLoginDialog, setSignupLoginDialog] = React.useState<boolean>(false);
    const [loadingPlay, setLoadingPlay] = React.useState<boolean>(false);
    const [isComingSoon, setIsComingSoon] = React.useState<boolean>(false);

    const nowTime: any = new Date().getTime();
    const endTime: any = new Date(listingGame?.end_time).getTime();

    const fetchData = async (id: number) => {
        isSetLoading(true);
        try {
            const res = await fetchAPI({
                endpoint: `/tournaments/${id}`,
                method: 'GET'
            });

            if (res.status === 200) {
                const resData = res.data.data;
                setListingGame(resData);
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
            const { data } = response.data;
            const dataGames = {
                imageGame: data.banner_url,
                titleGame: data.name,
                gameUrl: data.game_url,
                descriptionGame: data.description
            };
            const newState = { ...userState, ...dataGames };

            if (listingGame?.entry_coin) {
                newState.entryCoin = listingGame.entry_coin;
            }

            setUser(newState);
        } else {
            notify('failed get detail game', 'error');
        }
    };

    const getGameSession = async () => {
        setLoadingPlay(true);
        if (userState) {
            const response = await fetchAPI({
                method: 'POST',
                endpoint: `webhook/game-sessions`,
                data: {
                    game_id: router.query.id,
                    tournament_id: router.query['id-tournament']
                }
            });
            if (response.status === 200) {
                const newState = { ...userState };
                newState.sessionGame = response.data.data.session_code;
                clearUser();
                setUser(newState);
                return newState;
            }
            // notify('failed get session game', 'error');
            return false;
        }
        setLoadingPlay(false);
    };

    React.useEffect(() => {
        const getAllData = async () => {
            isSetLoading(true);
            await fetchData(Number(router.query['id-tournament']));
            await getGameDetail();
            isSetLoading(false);
        };
        getAllData();
    }, []);

    // Check is game tournament started
    React.useEffect(() => {
        if (listingGame) {
            const date = new Date(listingGame.start_time).toLocaleString('en-US');
            const remainingTime = getRemainingTimes(date);
            const isComingSoonTournament = remainingTime[0] !== '-' || listingGame.status !== 'OPEN';
            setIsComingSoon(isComingSoonTournament);
        }
    }, [listingGame]);

    const refreshAuth = async (data: any) => {
        const response = await fetchAPI({
            method: 'GET',
            endpoint: `auths`
        });
        if (response.status === 200) {
            const dataUser = { ...data };
            dataUser.coin = response.data.data.coin;
            setUser(dataUser);
        }
    };
    const handlePlay = async () => {
        if (userState.api_token) {
            if (userState?.coin < listingGame.entry_coin) {
                return setOpenNotifDialog(!openNotifDialog);
            }
            const response = await getGameSession();

            if (response) {
                await refreshAuth(response);
                return router.push(`/games/${router.query.id}/tournament/${router.query['id-tournament']}/loading`);
            }
            return notify('Ups, Server error!', 'error');
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
                        end={listingGame?.end_time}
                        backgroundImage={listingGame?.game.banner_url}
                        titleGame={listingGame?.game.name}
                        tournamentType={listingGame?.name}
                        time={listingGame?.start_time}
                        totalPlayer={listingGame?.total_users}
                        playerImg1='/icons/dummy/main-ikan.png'
                        playerImg2='/icons/dummy/user-1.png'
                        playerImg3='/icons/dummy/user-2.png'
                        isComingSoon={isComingSoon}
                        type={listingGame?.type}
                        entryCoin={listingGame?.entry_coin}
                    />{' '}
                </>
            )}
            <Box component='main' padding='20px' color='#373737'>
                {isLoading ? (
                    // <Box>
                    //     <Skeleton animation='wave' variant='rectangular' width='100%' />
                    // </Box>
                    <Grid container alignItems='flex-end' padding='20px'>
                        <Grid item xs={4} sx={{ height: '200px' }}>
                            <Skeleton sx={{ width: '100%', height: '200px', mt: '-18px' }} />
                        </Grid>
                        <Grid item xs={4} sx={{ height: '300px' }}>
                            <Skeleton sx={{ width: '100%', height: '300px' }} />
                        </Grid>
                        <Grid item xs={4} sx={{ height: '150px' }}>
                            <Skeleton sx={{ width: '100%', height: '150px', mt: '-28px' }} />
                        </Grid>
                    </Grid>
                ) : (
                    <Box component='section' padding='18px 0'>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '37px' }}>
                            <Typography component='h2' fontSize='24px' fontWeight={700}>
                                Leaderboard
                            </Typography>
                            {!isComingSoon && (
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                                    <img src='/icons/xs-troffy.png' alt='troffy' loading='lazy' />
                                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold' }}>
                                        {listingGame?.leaderboards?.length}
                                    </Typography>
                                </Box>
                            )}
                        </Box>
                        {(isComingSoon || listingGame?.leaderboards.length === 0) && (
                            <Box sx={{ textAlign: 'center', marginY: '150px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src='/images/leaderboard-img.png' alt='leaderboard' loading='lazy' />
                                </Box>
                                <Typography sx={{ fontSize: '14px', color: '#949494', fontWeight: 'bold', mt: 3 }}>
                                    {isComingSoon ? 'Stay tune for the Tournament' : 'Nobody has played yet. Be the first.'}
                                </Typography>
                            </Box>
                        )}
                        {listingGame?.leaderboards && listingGame?.leaderboards.length > 0 && !isComingSoon && (
                            <LeaderboardPodium
                                dataLeaderboard={listingGame?.leaderboards}
                                type={listingGame?.entry_coin === 0 ? 'casual' : 'grand'}
                            />
                        )}
                    </Box>
                )}
                {isLoading ? (
                    <Box>
                        {[...Array(10)].map((index: any, item: any) => {
                            return <Skeleton key={item} variant='rectangular' sx={{ my: 4, mx: 1 }} />;
                        })}
                    </Box>
                ) : (
                    !isComingSoon && (
                        <Box component='section' marginBottom='40px'>
                            {listingGame?.leaderboards && listingGame?.leaderboards.length > 0 && (
                                <TableRank
                                    dataLeaderboard={listingGame?.leaderboards}
                                    type={listingGame?.entry_coin === 0 ? 'casual' : 'grand'}
                                />
                            )}
                        </Box>
                    )
                )}
            </Box>
            {nowTime < endTime && (
                <Box sx={{ padding: '20px', position: 'sticky', bottom: '10px' }}>
                    {isLoading ? (
                        <Skeleton sx={{ height: '80px' }} />
                    ) : (
                        <ButtonPlay
                            isComingSoon={isComingSoon}
                            onClick={handlePlay}
                            title='Play Tournament'
                            points={listingGame?.entry_coin}
                            isLoading={loadingPlay}
                            typeTournament={listingGame?.entry_coin === 0 ? 'casual' : 'grand'}
                        />
                    )}
                </Box>
            )}
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
