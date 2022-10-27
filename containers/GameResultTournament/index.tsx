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

const GameResultTournament = () => {
    const userState = useSelector((state: any) => state?.webpage?.user?.user);
    const router = useRouter();
    const { setUser } = useAuthReducer();
    const [authsData, setAuthsData] = React.useState<any>(null);
    const [loadingSession, setLoadingSession] = React.useState<boolean>(false);
    // const [sessionGame, setSessionGame] = React.useState<any>(null);

    const { fetchAPI } = useAPICaller();
    const notify = useNotify();
    // const dataLeaderboard = [
    //     { image: '/icons/dummy/profile.png', username: 'eben', point: 246000, prize: 1500, rank: 13 },
    //     { image: '/icons/dummy/profile-2.png', username: 'rinto', point: 236000, prize: 2000, rank: 14 },
    //     { image: '/icons/dummy/profile-3.png', username: 'arya', point: 10000, prize: 1000, rank: 15 }
    // ];

    const getTournamentAuth = async () => {
        try {
            const response = await fetchAPI({
                method: 'GET',
                endpoint: `tournaments/${router.query['id-tournament']}`
            });
            if (response?.data.status === 200) {
                setAuthsData(response?.data.data.auths);
            }
        } catch (error: any) {
            notify(error.message, 'error');
        }
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
                // setSessionGame(response.data.data.session_code);
                const sessionGame = response.data.data.session_code;
                if (userState && sessionGame) {
                    const newState = { ...userState, sessionGame };
                    setUser(newState);
                    router.push(`/games/${router.query.id}/tournament/${router.query['id-tournament']}/loading`);
                }
            } else {
                notify('failed get session game', 'error');
            }
        }
        setLoadingSession(false);
    };

    React.useEffect(() => {
        getTournamentAuth();
    }, []);

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
                <img src={userState.imageGame} width='105px' height='105px' alt='game icon' style={{ borderRadius: '8px' }} />
                <Typography
                    component='h2'
                    fontSize='20px'
                    fontWeight={600}
                    paddingTop='32px'
                    paddingBottom='16px'
                    sx={{ color: '#A54CE5' }}
                >
                    New High Score
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
                    {`${authsData?.position}#`}
                </Typography>
                <RankCard
                    rank={1}
                    image='/icons/dummy/profile-2.png'
                    username={userState.username}
                    point={authsData?.total_score}
                    prize={100}
                    disabledUnderline
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
                            image={item.image}
                            username={item.username}
                            point={item.total_score}
                            prize={item.point_prize}
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
                    <img src='/icons/coins.svg' width='12.91px' height='10.95px' alt='coins' style={{ padding: '0 2px' }} />
                    <Typography component='p' fontSize='14px' fontWeight={800} paddingRight='2px'>
                        10
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
        </Box>
    );
};

export default GameResultTournament;
