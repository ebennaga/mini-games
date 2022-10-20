/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import React from 'react';
import numberFormat from 'helper/numberFormat';
import Header from 'components/Header';
import { HelpOutline, EmojiEvents, Share } from '@mui/icons-material';
import Button from 'components/Button/Index';
import { useSelector } from 'react-redux';
import TournamentCard from 'components/TournamentCard';
import TournamentSlider from 'components/TournamentSlider/TournamentSliderGD';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import NotifDialog from 'components/Dialog/notifDialog';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import useAuthReducer from 'hooks/useAuthReducer';
import GameDetailSkeleton from './GameDetailSkeleton';

const GameDetailContainer = () => {
    const isBack = true;
    const router = useRouter();
    const { fetchAPI, isLoading } = useAPICaller();
    const notify = useNotify();
    const [detailGame, setDetailGame] = React.useState<any>(null);
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    // const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [signupLoginDialog, setSignupLoginDialog] = React.useState<boolean>(false);
    const [openNotifDialog, setOpenNotifDialog] = React.useState<boolean>(false);
    const [sessionGame, setSessionGame] = React.useState<any>(null);

    const { setUser, clearUser } = useAuthReducer();

    const fetchData = async (id: number) => {
        try {
            const res = await fetchAPI({
                endpoint: `/games/${id}`,
                method: 'GET'
            });
            if (res.data?.data) {
                setDetailGame(res.data.data);
                // sessionStorage.setItem('prizeplayGameData', )
            }
        } catch (e) {
            notify('failed data', 'e');
        }
    };

    const getGameSession = async () => {
        const response = await fetchAPI({
            method: 'POST',
            endpoint: `webhook/game-sessions`,
            data: {
                game_id: router.query.id
            }
        });
        try {
            if (response.status === 200) {
                setSessionGame(response.data.data);
            } else {
                notify('failed error', 'error');
            }
        } catch (e: any) {
            notify(e.message, 'error');
        }
    };

    React.useEffect(() => {
        const fetchAllData = async () => {
            await fetchData(Number(router.query.id));
            await getGameSession();
        };
        fetchAllData();
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

    const handleClick = async () => {
        router.push(`/games/${router.query.id}/tournament`);
    };

    const handlePlay = () => {
        if (userState) {
            return router.push(`/games/${router.query.id}/casual/`);
        }
        return setSignupLoginDialog(true);
    };

    if (isLoading) {
        return <GameDetailSkeleton />;
    }

    return (
        <Box width='100%'>
            <Box
                sx={{
                    mb: 2,
                    position: 'sticky',
                    top: 10,
                    zIndex: 999,
                    padding: '0px 20px',
                    backgroundColor: 'transparent'
                }}
            >
                <Header isBack={isBack} point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box
                sx={{
                    backgroundImage: `url(${detailGame?.banner_url})`,
                    height: '50vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    zIndex: 1,
                    padding: '10px 0',
                    mt: '-61px',
                    borderRadius: '0px 0px 25px 25px'
                }}
            >
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(180deg, #353535 9.93%, rgba(53, 53, 53, 0) 90.83%)',
                        width: '99.5%',
                        height: '50%',
                        position: 'absolute',
                        top: '0px'
                    }}
                />
                <Grid container padding='0px 20px' />
                <Grid container padding='10px 20px' justifyContent='center' gap={2} position='relative' zIndex={2}>
                    <Grid item xs={5}>
                        <Box
                            sx={{
                                width: '142px',
                                height: '142px',
                                overflow: 'hidden',
                                backgroundImage: `url(${detailGame?.banner_url})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '8px'
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} padding='10px'>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                width: '100%',
                                height: '100%'
                            }}
                        >
                            <Box sx={{ width: '100%' }}>
                                <Typography
                                    sx={{ fontWeight: 'bold', color: 'white', fontSize: { xs: '23px', sm: '27px' }, lineHeight: '30px' }}
                                >
                                    {detailGame?.name}
                                </Typography>
                            </Box>
                            <Grid container justifyContent='space-between' sx={{ marginTop: { xs: '5%', sm: '10%' } }} gap='10px'>
                                <Grid item xs={6}>
                                    <ButtonBase
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#949494',
                                            padding: '1px 10px',
                                            borderRadius: '24px',
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>Tutorials</Typography>
                                        <HelpOutline sx={{ width: '14px', fontWeight: 'bold' }} />
                                    </ButtonBase>
                                </Grid>
                                <Grid container alignItems='center' gap='10px'>
                                    <Grid item xs={6}>
                                        <img src='/images/users-img.png' alt='user-img' />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography sx={{ fontSize: '11px', color: 'white' }}>
                                            {numberFormat(detailGame?.user_sessions)}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(transparent, #353535)',
                        width: '99.5%',
                        height: '50%',
                        position: 'absolute',
                        bottom: '0px',
                        borderRadius: '0px 0px 25px 25px'
                    }}
                />
            </Box>
            <Box mt={3}>
                {detailGame?.tournaments.length > 0 && (
                    <Grid container padding='10px 20px' gap='10px' my={3} overflow='hidden'>
                        <Grid item xs={6}>
                            <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                                Tournaments
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={{ fontSize: '12px', fontWeight: '600' }}>
                                Join tournaments and get points for reedem prize
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TournamentSlider>
                                {detailGame?.tournaments.map((item: any, idx: number) => (
                                    <TournamentCard
                                        key={item.id}
                                        time={item.end_time}
                                        pool={item.total_price}
                                        users={item.total_users}
                                        onClick={handleClick}
                                        imageGame={item.banner_url}
                                        coin={item.entry_coin}
                                    />
                                ))}
                            </TournamentSlider>
                        </Grid>
                    </Grid>
                )}
                <Grid container padding='0px 20px' direction='column'>
                    <Grid item xs={6}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            Casual Game
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontSize: '12px', fontWeight: 'light' }}>
                            get a change to got the Ticket to play Tournaments
                        </Typography>
                    </Grid>
                    <Grid item xs={12} mt='10px' position='relative'>
                        <Box
                            sx={{
                                borderRadius: '20px',
                                backgroundImage: `url(${detailGame?.banner_url})`,
                                height: '260px',
                                display: 'flex',
                                flexDirection: 'column-reverse',
                                backgroundSize: 'cover',
                                position: 'relative',
                                zIndex: 0
                            }}
                        >
                            <Box position='relative' zIndex={2} margin='20px'>
                                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '32px' }}>Free</Typography>
                                <Button onClick={handlePlay} height='40px' title='Play Casual' backgoundColor='#A54CE5' color='white' />
                            </Box>
                            <Box
                                sx={{
                                    backgroundImage: 'linear-gradient(transparent, black)',
                                    height: '50px',
                                    borderRadius: '0px 0px 20px 20px'
                                }}
                                position='absolute'
                                zIndex={1}
                                bottom='0%'
                                width='100%'
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container padding='10px 20px' mt={3}>
                    <Grid item xs={6}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            Your Stats
                        </Typography>
                    </Grid>
                    <Grid
                        mt='18px'
                        container
                        justifyContent='space-between'
                        gap='10px'
                        sx={{ backgroundColor: '#F4F1FF', padding: '18px 25px', borderRadius: '15px' }}
                    >
                        <Grid item xs={5} justifyContent='space-between'>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src='/icons/tape-stats.png' alt='ribbon' />
                                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>High scores</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box justifyContent='space-between' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <EmojiEvents />
                                <Typography sx={{ fontWeight: '700' }}>{numberFormat(detailGame?.auths.highscore)}</Typography>
                                <Share />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <NotifDialog
                    open={openNotifDialog}
                    setOpenDialog={setOpenNotifDialog}
                    body='You don’t have Coins in your balance. 
Top up Coins to continue'
                />
                <SignupLoginDialog open={signupLoginDialog} setOpen={setSignupLoginDialog} />
            </Box>
        </Box>
    );
};

export default GameDetailContainer;
