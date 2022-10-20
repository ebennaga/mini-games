import React from 'react';
import { Box, Typography, Grid, ButtonBase } from '@mui/material';
import Header from 'components/Header';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
// import Button from 'components/Button/Index';
import { SmartDisplay, EmojiEvents, Share } from '@mui/icons-material';
import { useRouter } from 'next/router';
import numberFormat from 'helper/numberFormat';

const CasualContainer = () => {
    const { fetchAPI } = useAPICaller();
    const notify = useNotify();
    const [detailGame, setDetailGame] = React.useState<any>(null);
    const router = useRouter();

    const fetchData = async (id: number) => {
        try {
            const res = await fetchAPI({
                endpoint: `/games/${id}`,
                method: 'GET'
            });
            if (res.data?.data) {
                setDetailGame(res.data.data);
            }
        } catch (e) {
            notify('failed data', 'e');
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
                    <Header isBack point={102_300} profilePicture='/icons/dummy/profile.png' />
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
                    onClick={() => {
                        // router.push('/casual/loading');
                        router.push(`/games/${router.query.id}/casual/loading`);
                        // router.push('/casual/ads');
                    }}
                    sx={{
                        textTransform: 'none',
                        position: 'relative',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: '#A54CE5',
                        width: '100%',
                        height: '60px',
                        '&:hover': {
                            backgroundColor: '#A54CE5',
                            color: 'white',
                            fontWeight: 'bold'
                        }
                    }}
                >
                    Watch Ads{' '}
                    <span style={{ margin: '0px 5px' }}>
                        <SmartDisplay />
                    </span>{' '}
                    to Play
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default CasualContainer;
