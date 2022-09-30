import { Box, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/router';
import Header from 'components/Header';
import HeaderTournament from './HeaderTournament';
import ButtonPlay from './ButtonPlay';
import LeaderboardPodium from './LeaderboardPodium';
import TableRank from './TableRank';

const GameTournament = () => {
    const router = useRouter();
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

    return (
        <Box width='100%'>
            <Header isBack point={102343} profilePicture='/icons/dummy/profile-2.png' paddingX='20px' />
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
                <ButtonPlay
                    onClick={() => router.push(`/games/${router.query.id}/tournament/result`)}
                    title='Play Tournament'
                    points={40}
                />
                <Box component='section' padding='28px 0'>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '37px' }}>
                        <Typography component='h2' fontSize='24px' fontWeight={700}>
                            Leaderboard
                        </Typography>
                        <ArrowForwardIcon sx={{ color: '#373737' }} />
                    </Box>
                    <LeaderboardPodium dataLeaderboard={dataLeaderboard} />
                </Box>
                <Box component='section' marginBottom='40px'>
                    <TableRank dataLeaderboard={dataLeaderboard} />
                </Box>
            </Box>
        </Box>
    );
};

export default GameTournament;
