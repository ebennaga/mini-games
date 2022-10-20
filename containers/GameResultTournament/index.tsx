import { Box, ButtonBase, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import numberFormat from 'helper/numberFormat';
import RankCard from 'components/RankCard';

const GameResultTournament = () => {
    const router = useRouter();

    const dataLeaderboard = [
        { image: '/icons/dummy/profile.png', username: 'eben', point: 246000, prize: 1500, rank: 13 },
        { image: '/icons/dummy/profile-2.png', username: 'rinto', point: 236000, prize: 2000, rank: 14 },
        { image: '/icons/dummy/profile-3.png', username: 'arya', point: 10000, prize: 1000, rank: 15 }
    ];

    const username = 'rinto';

    return (
        <Box component='main' width='100%'>
            <Box padding='0 20px'>
                <ButtonBase
                    onClick={() => router.back()}
                    sx={{ background: '#A54CE5', width: '24px', height: '24px', borderRadius: '50px', marginBottom: '12px' }}
                >
                    <ArrowBackIcon sx={{ color: '#fff', fontSize: '19px' }} />
                </ButtonBase>
            </Box>
            <Box component='section' textAlign='center' color='#373737' borderBottom='1px solid rgba(40, 38, 38, 0.2)' paddingBottom='32px'>
                <img src='/images/dummy/game-hopup.svg' width='105px' height='105px' alt='game icon' style={{ borderRadius: '8px' }} />
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
                    {numberFormat(108324)}
                </Typography>
            </Box>
            <Box component='section' color='#373737' padding='0 20px'>
                <Typography component='h2' textAlign='center' fontSize='14px' fontWeight={600} marginTop='24px'>
                    Your Rank
                </Typography>
                <Typography component='h3' textAlign='center' fontSize='40px' fontWeight={700} marginTop='7px'>
                    34#
                </Typography>
                <RankCard rank={1} image='/icons/dummy/profile-2.png' username='Rinto' point={792730} prize={3430} disabledUnderline />
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: '10px' }}>
                    {[...Array(3)].map((_item: any, index: number) => (
                        <Box
                            key={index}
                            sx={{ background: '#D9D9D9', width: '10px', height: '10px', borderRadius: '50px', mx: index === 1 ? '8px' : 0 }}
                        />
                    ))}
                </Box>
                {dataLeaderboard.map((item: any) => {
                    return (
                        <RankCard
                            isYourRank={item.username === username}
                            disabledUnderline
                            key={item.rank}
                            rank={item.rank}
                            image={item.image}
                            username={item.username}
                            point={item.point}
                            prize={item.prize}
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
                        20
                    </Typography>
                    <Typography component='p' fontSize='14px' fontWeight={600}>
                        for Playing Again
                    </Typography>
                </Box>
                <ButtonBase
                    sx={{ background: '#A54CE5', width: '100%', padding: '23px 0', borderRadius: '15px', color: '#fff', mb: '30px' }}
                >
                    <Typography component='span' fontSize='14px' fontWeight={700}>
                        Play Again
                    </Typography>
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default GameResultTournament;
