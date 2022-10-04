/* eslint-disable no-unused-vars */
import Header from 'components/Header';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Box, Typography, Stack, Skeleton, Grid } from '@mui/material';
import BadgeImages from 'components/BadgeImages';
import HeaderSkeleton from 'components/Header/HeaderSkeleton';

interface GameProps {
    playerImg1: string;
    playerImg2: string;
    playerImg3: string;
    totalPlayer: number;
}

// eslint-disable-next-line no-unused-vars
const GameContainer: React.FC<GameProps> = ({ playerImg1, playerImg2, playerImg3, totalPlayer }) => {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    React.useEffect(() => {
        setTimeout(() => setLoading(false), 3000);
    }, []);
    const cards = [
        {
            id: 1,
            title: 'Block Stack',
            person: 300
        },
        {
            id: 2,
            title: 'Hop Up',
            person: 400
        }
    ];
    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            {loading ? (
                <HeaderSkeleton />
            ) : (
                <Box
                    padding='25px'
                    sx={{
                        mb: 2,
                        position: 'sticky',
                        top: -1,
                        backgroundColor: 'white',
                        zIndex: 999,
                        width: '-webkit-fill-available'
                    }}
                >
                    <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
                </Box>
            )}

            <Box sx={{ mt: '42px', mx: '20px' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 700 }}>Games</Typography>
            </Box>

            <Box
                sx={{
                    mt: '25px',
                    mx: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '33px',
                    direction: 'row'
                }}
            >
                {loading ? (
                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        {[...Array(2)].map((_item: any, index: number) => {
                            return (
                                <Box key={index}>
                                    <Skeleton animation='wave' variant='rectangular' sx={{ width: '162px', height: '172px' }} />
                                    <Skeleton
                                        sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
                                        animation='wave'
                                        variant='rectangular'
                                        width={80}
                                        height={80}
                                    />
                                </Box>
                            );
                        })}
                    </Grid>
                ) : (
                    <Stack direction='row' spacing={2}>
                        {cards.map((item: any) => {
                            return (
                                <Box
                                    onClick={() => {
                                        router.push(`/games/${item.id}`);
                                    }}
                                    key={item.id}
                                    sx={{
                                        width: '172px',
                                        height: '172px',
                                        borderRadius: '11px',
                                        backgroundImage: `url(${'/images/hopup.png'})`
                                    }}
                                >
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 23 }}>
                                        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>{item.title}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <BadgeImages
                                            backgroundColor='white'
                                            size='large'
                                            images1={'/images/dingdong.png' || playerImg1}
                                            images2={'/images/wanita.png' || playerImg2}
                                            images3={playerImg3}
                                            total={item.person}
                                        />
                                    </Box>
                                </Box>
                            );
                        })}
                    </Stack>
                )}
            </Box>
        </Box>
    );
};

export default GameContainer;
