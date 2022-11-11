import React from 'react';
import { Box, Typography, Grid, ButtonBase, CircularProgress } from '@mui/material';
import Header from 'components/Header';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import { SmartDisplay, EmojiEvents, Share } from '@mui/icons-material';
import { useRouter } from 'next/router';
import numberFormat from 'helper/numberFormat';
import { useSelector } from 'react-redux';
import useAuthReducer from 'hooks/useAuthReducer';

const CasualContainer = () => {
    const { fetchAPI } = useAPICaller();
    const { fetchAPI: fetchSession, isLoading: loadingSession } = useAPICaller();
    const notify = useNotify();
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const [detailGame, setDetailGame] = React.useState<any>(null);
    const router = useRouter();
    const { setUser } = useAuthReducer();

    const handlePlay = async () => {
        try {
            const response = await fetchSession({
                method: 'POST',
                endpoint: `webhook/game-sessions`,
                data: {
                    game_id: router.query.id
                }
            });
            if (response.status === 200) {
                const data = { ...userState };
                data.sessionGame = response.data.data.session_code;
                setUser(data);
                router.push(`/games/${router.query.id}/casual/loading`);
            } else {
                notify(response.message, 'error');
            }
        } catch (e: any) {
            notify(e.message, 'error');
        }
    };

    const fetchData = async (id: number) => {
        console.log(id);
        try {
            const res = await fetchAPI({
                endpoint: `/games/${id}`,
                method: 'GET'
            });
            if (res.data?.data) {
                setDetailGame(res.data.data);
            }
        } catch (e: any) {
            notify(e.message, 'error');
        }
    };

    React.useEffect(() => {
        fetchData(Number(router.query.id));
    }, []);

    return (
        <Box sx={{ width: '100%' }}>
            {/* dari sini */}
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
                    zIndex: 0,
                    // padding: '10px 20px',
                    borderRadius: '0px 0px 20px 20px'
                }}
            >
                <Box sx={{ padding: '10px 20px', position: 'sticky', zIndex: 999, top: 5 }}>
                    <Header isBack point={102_300} profilePicture='/icons/dummy/profile.png' hrefBack={`/games/${router.query.id}`} />
                </Box>
                <Box
                    sx={{
                        backgroundImage: 'linear-gradient(transparent, #353535)',
                        height: '100%',
                        position: 'relative',
                        width: '100%',
                        bottom: '24%'
                    }}
                />
                <Box
                    sx={{
                        backgroundColor: '#353535',
                        width: '100%',
                        height: '25%',
                        position: 'absolute',
                        bottom: '0px',
                        borderRadius: '0px 0px 20px 20px'
                    }}
                >
                    <Box sx={{ paddingX: '20px', paddingBottom: '20px' }}>
                        <Typography sx={{ color: 'white', fontSize: '24px', fontWeight: 700 }}>{detailGame?.name}</Typography>
                        <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: 700 }}>Casual Play</Typography>
                    </Box>
                </Box>
            </Box>
            {/* sampai sini */}
            <Grid container direction='column' padding='10px'>
                <Grid item xs={12}>
                    <Typography sx={{ color: '#949494', fontSize: '14px', fontWeight: 400 }}>{detailGame?.description}</Typography>
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
            <Box sx={{ padding: '20px', position: 'sticky', bottom: '20px' }}>
                <ButtonBase
                    disabled={loadingSession}
                    onClick={handlePlay}
                    sx={{
                        textTransform: 'none',
                        position: 'relative',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: loadingSession ? '#F9F0FF' : '#A54CE5',
                        width: '100%',
                        height: '60px',
                        '&:hover': {
                            backgroundColor: '#A54CE5',
                            color: 'white',
                            fontWeight: 'bold'
                        }
                    }}
                >
                    {loadingSession ? (
                        <CircularProgress sx={{ color: '#A54CE5' }} />
                    ) : (
                        <>
                            {' '}
                            Watch Ads{' '}
                            <span style={{ margin: '0px 5px' }}>
                                <SmartDisplay />
                            </span>{' '}
                            to Play{' '}
                        </>
                    )}
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default CasualContainer;
