import { Box, ButtonBase, CircularProgress, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import useAPICaller from 'hooks/useAPICaller';
import useAuthReducer from 'hooks/useAuthReducer';
import useNotify from 'hooks/useNotify';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import numberFormat from 'helper/numberFormat';
import RankCard from 'components/RankCard';
import NotifDialog from 'components/Dialog/notifDialog';
import LoadingResultTournament from './LoadingResultTournament';

const GameResultTournament = () => {
    const userState = useSelector((state: any) => state?.webpage?.user?.user);
    const router = useRouter();
    const { setUser } = useAuthReducer();
    const [authsData, setAuthsData] = React.useState<any>(null);
    const [firstPosition, setFirstPosition] = React.useState<any>(null);
    const [loadingSession, setLoadingSession] = React.useState<boolean>(false);
    const [dialogTopup, setDialogTopup] = React.useState<boolean>(false);
    const [typeTournament, setTypeTournament] = React.useState<'casual' | 'grand'>('grand');

    const { fetchAPI } = useAPICaller();
    const { fetchAPI: fetchTournament, isLoading: loadingFetchTournament } = useAPICaller();

    const notify = useNotify();

    const getTournamentAuth = async () => {
        try {
            const response = await fetchTournament({
                method: 'GET',
                endpoint: `tournaments/${router.query['id-tournament']}`
            });

            if (response?.data.status === 200) {
                const resData = response.data.data;
                setFirstPosition(resData.leaderboards[0]);
                setAuthsData(resData.auths);
                if (resData?.entry_coin === 0) {
                    setTypeTournament('casual');
                } else {
                    setTypeTournament('grand');
                }
            }
        } catch (error: any) {
            notify(error.message, 'error');
        }
    };
    const refreshAuth = async () => {
        const response = await fetchAPI({
            method: 'GET',
            endpoint: `auths`
        });
        if (response.status === 200) {
            const dataUser = { ...userState };
            dataUser.coin = response.data.data.coin;
            return dataUser;
        }
        return false;
    };
    const getGameSession = async () => {
        setLoadingSession(true);
        if (userState) {
            const response = await fetchAPI({
                method: 'POST',
                endpoint: `webhook/game-sessions`,
                data: {
                    game_id: router.query.id,
                    tournament_id: router.query['id-tournament']
                }
            });
            if (response?.status === 200) {
                const currentData = await refreshAuth();
                const sessionGame = response.data.data.session_code;
                if (currentData && sessionGame) {
                    const newState = { ...currentData, sessionGame };
                    setUser(newState);
                    router.push(`/games/${router.query.id}/tournament/${router.query['id-tournament']}/loading`);
                }
            } else if (response.data.message === 'Coin is not enough') {
                setDialogTopup(true);
            }
        }
        setLoadingSession(false);
    };

    React.useEffect(() => {
        getTournamentAuth();
    }, []);

    if (loadingFetchTournament) {
        return <LoadingResultTournament />;
    }
    console.log(firstPosition);
    return (
        <Box component='main' width='100%'>
            <Box padding='0 20px'>
                <ButtonBase
                    onClick={() => router.push(`/games/${router.query.id}/tournament/${router.query['id-tournament']}`)}
                    sx={{ background: '#A54CE5', width: '24px', height: '24px', borderRadius: '50px', marginBottom: '12px' }}
                >
                    <ArrowBackIcon sx={{ color: '#fff', fontSize: '19px' }} />
                </ButtonBase>
            </Box>
            <Box component='section' textAlign='center' color='#373737' borderBottom='1px solid rgba(40, 38, 38, 0.2)' paddingBottom='32px'>
                <img
                    src={userState.imageGame}
                    width='105px'
                    height='105px'
                    alt='game icon'
                    style={{ borderRadius: '8px' }}
                    loading='lazy'
                />
                <Typography
                    component='h2'
                    fontSize='20px'
                    fontWeight={600}
                    paddingTop='32px'
                    paddingBottom='16px'
                    sx={{ color: '#A54CE5' }}
                >
                    Your High Score
                </Typography>
                <Typography component='h3' fontSize='40px' fontWeight={700}>
                    {numberFormat(authsData?.total_score)}
                </Typography>
            </Box>
            <Box component='section' color='#373737' padding='0 20px'>
                <Typography component='h2' textAlign='center' fontSize='14px' fontWeight={600} marginTop='24px'>
                    Your Rank
                </Typography>
                <Typography component='h3' textAlign='center' fontSize='40px' fontWeight={700} marginTop='7px'>
                    {`${authsData ? authsData.position : ''}#`}
                </Typography>
                <RankCard
                    rank={firstPosition?.position}
                    image={firstPosition?.user.avatar_url}
                    username={firstPosition?.user.username.toLowerCase() || userState.displayName}
                    score={firstPosition?.user.total_score}
                    point={firstPosition?.user.point_prize}
                    disabledUnderline
                    type={typeTournament}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: '10px' }}>
                    {[...Array(3)].map((_item: any, index: number) => (
                        <Box
                            key={index}
                            sx={{ background: '#D9D9D9', width: '10px', height: '10px', borderRadius: '50px', mx: index === 1 ? '8px' : 0 }}
                        />
                    ))}
                </Box>
                {authsData?.adjacent_leaderboards.map((item: any) => {
                    return (
                        <RankCard
                            isYourRank={item.username === userState.username}
                            disabledUnderline
                            key={item.id}
                            rank={item.position}
                            image={item.avatar_url}
                            username={item.username?.toLowerCase()}
                            score={item.score}
                            type={typeTournament}
                            point={item.point}
                            // point={typeTournament === 'casual' ? item.total_prize.coin : item.total_prize.point}
                        />
                    );
                })}
                <Box
                    component='div'
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '72px', marginBottom: '30px' }}
                >
                    <Typography component='p' fontSize='14px' fontWeight={600}>
                        Use your
                    </Typography>
                    <img src='/icons/coins.svg' width='12.91px' height='10.95px' alt='coins' style={{ padding: '0 2px' }} loading='lazy' />
                    <Typography component='p' fontSize='14px' fontWeight={800} paddingRight='2px'>
                        20
                    </Typography>
                    <Typography component='p' fontSize='14px' fontWeight={600}>
                        for Playing Again
                    </Typography>
                </Box>
                <ButtonBase
                    onClick={getGameSession}
                    disabled={loadingSession}
                    sx={{
                        background: loadingSession ? '#F9F0FF' : '#A54CE5',
                        width: '100%',
                        padding: '23px 0',
                        borderRadius: '15px',
                        color: '#fff',
                        mb: '30px'
                    }}
                >
                    {loadingSession ? (
                        <CircularProgress sx={{ color: '#A54CE5' }} />
                    ) : (
                        <Typography component='span' fontSize='14px' fontWeight={700}>
                            Play Again
                        </Typography>
                    )}
                </ButtonBase>
            </Box>
            <NotifDialog open={dialogTopup} setOpenDialog={setDialogTopup} body='You dont have enought coins. Topup now!' />
        </Box>
    );
};

export default GameResultTournament;
