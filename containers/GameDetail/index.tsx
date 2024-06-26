/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import React from 'react';
import numberFormat from 'helper/numberFormat';
import Header from 'components/Header';
import { HelpOutline, EmojiEvents, Share } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import TournamentCard from 'components/TournamentCard';
import TournamentSlider from 'components/TournamentSlider/TournamentSliderGD';
import { useRouter } from 'next/router';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import NotifDialog from 'components/Dialog/notifDialog';
import SignupLoginDialog from 'components/Dialog/SignupLoginDialog';
import useAuthReducer from 'hooks/useAuthReducer';
import getRemainingTimes from 'helper/getRemainingTime';
import TitleTournament from 'components/TitleTournament';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import GameDetailSkeleton from './GameDetailSkeleton';

const GameDetailContainer = () => {
    // const isBack = true;
    const router = useRouter();
    const { fetchAPI } = useAPICaller();
    const [isLoading, setIsLoading] = React.useState(true);
    const notify = useNotify();
    const [detailGame, setDetailGame] = React.useState<any>(null);
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const [signupLoginDialog, setSignupLoginDialog] = React.useState<boolean>(false);
    const [openNotifDialog, setOpenNotifDialog] = React.useState<boolean>(false);
    const [isCasualTournament, setIsCasualTournament] = React.useState<number>(0);
    const [isGrandTournament, setIsGrandTournament] = React.useState<number>(0);
    // const [inertialAds, setInertialAds] = React.useState<'default' | 'open' | 'close'>('default');

    const { setUser, clearUser } = useAuthReducer();

    const fetchData = async (id: number) => {
        setIsLoading(true);
        try {
            const res = await fetchAPI({
                endpoint: `/games/${id}`,
                method: 'GET'
            });
            const dataRes = res.data?.data;
            if (dataRes) {
                setDetailGame(dataRes);

                // Read data for validate is tournament appears or not
                dataRes?.tournaments?.map((item: any) => {
                    if (item.entry_coin > 0) {
                        return setIsGrandTournament(isGrandTournament + 1);
                    }
                    if (item.entry_coin === 0) {
                        return setIsCasualTournament(isCasualTournament + 1);
                    }
                    return null;
                });
                dataRes?.free_tournaments?.map((item: any) => {
                    if (item.entry_coin > 0) {
                        return setIsGrandTournament(isGrandTournament + 1);
                    }
                    if (item.entry_coin === 0) {
                        return setIsCasualTournament(isCasualTournament + 1);
                    }
                    return null;
                });
            }
            setIsLoading(false);
        } catch (e: any) {
            notify(e.message, 'e');
            setIsLoading(false);
        }
        setIsLoading(false);
    };

    React.useEffect(() => {
        const fetchAllData = async () => {
            await fetchData(Number(router.query.id));
        };
        fetchAllData();
    }, []);

    React.useEffect(() => {
        if (userState && detailGame) {
            const dataGames = {
                imageGame: detailGame.banner_url,
                titleGame: detailGame.name,
                gameUrl: detailGame.game_url,
                descriptionGame: detailGame.description
            };
            const newState = { ...userState, ...dataGames };

            if (
                (!userState.imageGame || userState.imageGame !== detailGame.banner_url) &&
                (!userState.gameUrl || userState.gameUrl !== detailGame.game_url) &&
                (!userState.description || userState.description !== detailGame.description)
            ) {
                clearUser();
                setUser(newState);
            }
        }
    }, [userState, detailGame]);

    const handleClick = async (idTournament: any) => {
        return router.push(`/games/${router.query.id}/tournament/${idTournament}`);
    };

    const handlePlay = () => {
        if (userState?.api_token) {
            return router.push(`/games/${router.query.id}/casual/`);
        }
        return setSignupLoginDialog(true);
    };

    React.useEffect(() => {
        window.googletag = window.googletag || { cmd: [] };
        googletag.cmd.push(() => {
            const slot = googletag.defineOutOfPageSlot(
                '/21622890900,22860604212/ID_prizeplay.io_res_cate_interstitial_fullscreen',
                googletag.enums.OutOfPageFormat.INTERSTITIAL
            );
            if (slot) {
                slot.addService(googletag.pubads());

                googletag.pubads().addEventListener('slotOnload', (event: any) => {
                    if (slot === event.slot) {
                        document.getElementById('link').style.display = 'flex';
                    }
                });
            }
            googletag.enableServices();
            googletag.display(slot);
        });
    }, []);

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
                <Header
                    logo='/images/arrowback.svg'
                    heightLogo='auto'
                    widthLogo='30px'
                    hrefBack='/games'
                    point={102_300}
                    profilePicture='/icons/dummy/profile.png'
                    customBackElement={
                        <Link href='/games'>
                            <a
                                id='link'
                                style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50px',
                                    background: '#A54CE5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <ArrowBackIcon sx={{ color: '#fff', width: '20px', height: '20px', fontWeight: 'bold' }} />
                            </a>
                        </Link>
                    }
                />
                <Link href='/games'>
                    <a data-google-interstitial='false' style={{ display: 'none' }}>
                        interstitial
                    </a>
                </Link>
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
                        width: '-webkit-fill-available',
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
                    <Grid item xs={6}>
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
                            <Grid
                                container
                                justifyContent='space-between'
                                sx={{ marginTop: { xs: '5%', sm: '10%' } }}
                                gap='10px'
                                width='100%'
                            >
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
                                <Grid item xs={5}>
                                    <Grid container alignItems='center' justifyContent='space-between'>
                                        <Grid item xs={6}>
                                            <img src='/images/users-img.png' alt='user-img' />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography sx={{ fontSize: '11px', color: 'white' }}>
                                                {numberFormat(detailGame?.user_count)}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(transparent, #353535)',
                        width: '-webkit-fill-available',
                        height: '50%',
                        position: 'absolute',
                        bottom: '0px',
                        borderRadius: '0px 0px 25px 25px'
                    }}
                />
            </Box>
            <Box mt={3}>
                {detailGame?.tournaments.length > 0 && isGrandTournament > 0 && (
                    <Grid container padding='10px 20px' gap='0px' my={3} overflow='hidden'>
                        <Grid item xs={12}>
                            <TitleTournament
                                image='/icons/noto_money-bag.png'
                                title='Grand Tournaments'
                                subTitle='Tournaments and get points for redeem prize'
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: '24px' }}>
                            <TournamentSlider>
                                {detailGame?.tournaments.map((item: any, idx: number) => {
                                    const date = new Date(item.start_time).toLocaleString('en-US');
                                    const remainingTime = getRemainingTimes(date);
                                    const isComingSoon = remainingTime[0] !== '-' || item.status !== 'OPEN';

                                    if (item.entry_coin > 0) {
                                        return (
                                            <TournamentCard
                                                status={item.status}
                                                key={item.id}
                                                time={isComingSoon ? 'coming soon' : item.end_time}
                                                pool={numberFormat(item.total_prize.point)}
                                                users={item.total_users}
                                                onClick={() => handleClick(item.id)}
                                                imageGame={detailGame?.banner_url}
                                                backgroundImage={item.banner_url}
                                                coin={item.entry_coin}
                                                type={item.type}
                                                typeTournament={item.entry_coin === 0 ? 'casual' : 'grand'}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </TournamentSlider>
                        </Grid>
                    </Grid>
                )}
                <Box sx={{ bgcolor: '#F8EEFF', padding: '5px 0 34px 0' }}>
                    {detailGame?.tournaments?.length > 0 && isCasualTournament > 0 && (
                        <Grid container paddingX='20px' gap='0px' mt={3} overflow='hidden'>
                            <Grid item xs={12}>
                                <TitleTournament
                                    image='/icons/free.png'
                                    title='Casual Tournaments'
                                    subTitle='Joins casual tournaments and get coins for the real chalenge in Prize Tournament'
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '24px' }}>
                                <TournamentSlider>
                                    {detailGame?.tournaments?.map((item: any, idx: number) => {
                                        const date = new Date(item.start_time).toLocaleString('en-US');
                                        const remainingTime = getRemainingTimes(date);
                                        const isComingSoon = remainingTime[0] !== '-' || item.status !== 'OPEN';

                                        if (item.entry_coin === 0) {
                                            return (
                                                <TournamentCard
                                                    status={item.status}
                                                    key={item.id}
                                                    time={isComingSoon ? 'coming soon' : item.end_time}
                                                    pool={item.total_prize}
                                                    users={item.total_users}
                                                    onClick={() => handleClick(item.id)}
                                                    imageGame={detailGame?.banner_url}
                                                    backgroundImage={item.banner_url}
                                                    coin={item.entry_coin}
                                                    type={item.type}
                                                    typeTournament='casual'
                                                />
                                            );
                                        }
                                        return null;
                                    })}
                                </TournamentSlider>
                            </Grid>
                        </Grid>
                    )}
                    <Grid container padding='0px 20px' mt={3} direction='column'>
                        <Grid item xs={12}>
                            <TitleTournament title='Casual Game' subTitle='Improve your skills risk-free' />
                        </Grid>
                        <Grid item xs={12} mt='24px' position='relative'>
                            <Box
                                sx={{
                                    borderRadius: '20px',
                                    backgroundImage: `url(${
                                        detailGame?.tournaments.length > 0 ? detailGame?.tournaments[0].banner_url : detailGame?.banner_url
                                    })`,
                                    height: '260px',
                                    display: 'flex',
                                    flexDirection: 'column-reverse',
                                    backgroundSize: 'cover',
                                    position: 'relative',
                                    zIndex: 0
                                }}
                            >
                                <Box
                                    sx={{
                                        background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)',
                                        borderRadius: '20px',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'flex-end'
                                    }}
                                >
                                    <Grid container sx={{ padding: '15px' }} spacing={1} alignItems='center'>
                                        <Grid item xs={3}>
                                            <Box
                                                sx={{
                                                    height: '78px',
                                                    width: '78px',
                                                    borderRadius: '8px',
                                                    background: `url(${detailGame?.banner_url})`,
                                                    backgroundPosition: 'center',
                                                    backgroundSize: 'cover'
                                                }}
                                            >
                                                {/* <img src={detailGame?.banner_url} alt='banner' style={{ width: '100%', borderRadius: '8px' }} /> */}
                                            </Box>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Box position='relative' zIndex={2} sx={{ ml: 1 }}>
                                                <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '32px', lineHeight: 1 }}>
                                                    Free
                                                </Typography>
                                                <ButtonBase
                                                    onClick={handlePlay}
                                                    sx={{
                                                        backgroundColor: '#A54CE5',
                                                        borderRadius: '15px',
                                                        width: '100%',
                                                        height: '40px'
                                                    }}
                                                >
                                                    <Typography sx={{ color: 'white', fontWeight: 'bold', gontSize: '14px' }}>
                                                        Play Casual
                                                    </Typography>
                                                </ButtonBase>
                                                {/* <Button onClick={handlePlay} height='40px' title='Play Casual' backgoundColor='#A54CE5' color='white' /> */}
                                            </Box>
                                        </Grid>
                                    </Grid>
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
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
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
                                <img src='/images/ribb-casual.png' alt='ribbon' />
                                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>Casual</Typography>
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
                    <Grid
                        mt='18px'
                        container
                        justifyContent='space-between'
                        gap='10px'
                        sx={{ backgroundColor: '#D7EEFF', padding: '18px 25px', borderRadius: '15px' }}
                    >
                        <Grid item xs={5} justifyContent='space-between'>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src='/images/ribb-tournament.png' alt='ribbon' />
                                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>Tournament</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box justifyContent='space-between' sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <EmojiEvents />
                                <Typography sx={{ fontWeight: '700' }}>{numberFormat(detailGame?.auths.highscore_tournament)}</Typography>
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
