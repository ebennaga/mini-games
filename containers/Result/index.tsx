import { Box, Typography, ButtonBase, CircularProgress } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import { SmartDisplay } from '@mui/icons-material';
import React from 'react';
import { useRouter } from 'next/router';
import numberFormat from 'helper/numberFormat';
import { useSelector } from 'react-redux';
import useAPICaller from 'hooks/useAPICaller';
import useAuthReducer from 'hooks/useAuthReducer';
import useNotify from 'hooks/useNotify';

const ResultContainer = () => {
    const router = useRouter();
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const { fetchAPI, isLoading } = useAPICaller();
    const { setUser } = useAuthReducer();
    const notify = useNotify();

    const handlePlay = async () => {
        try {
            const response = await fetchAPI({
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

    return (
        <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box
                sx={{
                    mb: 2,
                    position: 'sticky',
                    top: 10,
                    zIndex: 999,
                    padding: '0px 20px'
                }}
            >
                <HeaderBack handleBack={() => router.push(`/games/${router.query.id}`)} />
            </Box>
            <Box sx={{ padding: '0px 20px', textAlign: 'center', m: '0px 0px' }}>
                <Box
                    sx={{
                        backgroundImage: `url(${userState.imageGame})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '105px',
                        height: '105px',
                        borderRadius: '8px',
                        margin: 'auto',
                        mb: '29px'
                    }}
                />
                <Typography sx={{ fontWeight: 700, fontSize: '24px', color: '#A54CE5' }}>High Score</Typography>
                <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '44px' }}>{numberFormat(23209)}</Typography>
                </Box>
            </Box>
            <Box sx={{ padding: '20px', position: 'sticky', bottom: '20px' }}>
                <ButtonBase
                    disabled={isLoading}
                    onClick={handlePlay}
                    sx={{
                        textTransform: 'none',
                        position: 'relative',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: isLoading ? '#F9F0FF' : '#A54CE5',
                        width: '100%',
                        height: '60px',
                        '&:hover': {
                            backgroundColor: '#A54CE5',
                            color: 'white',
                            fontWeight: 'bold'
                        }
                    }}
                >
                    {isLoading ? (
                        <CircularProgress sx={{ color: '#A54CE5' }} />
                    ) : (
                        <>
                            {' '}
                            Watch Ads{' '}
                            <Box sx={{ margin: '0px 5px' }}>
                                <SmartDisplay />
                            </Box>{' '}
                            to Play Again{' '}
                        </>
                    )}
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default ResultContainer;
