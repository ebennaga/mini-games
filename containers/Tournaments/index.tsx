import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import TournamentCard from 'components/TournamentCard';
// import TournamentSlider from 'components/TournamentSlider';
import TournamentSliderGD from 'components/TournamentSlider/TournamentSliderGD';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import GameHeader from './GameHeader';
import TournamentsSkeleton from './TournamentsSkeleton';

const Tournaments = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000);
    }, []);
    const router = useRouter();

    if (isLoading) {
        return <TournamentsSkeleton />;
    }
    return (
        <Box sx={{ width: '-webkit-fill-available' }}>
            <HeaderBack title='Tournaments' />
            <Box component='section' marginTop='45px'>
                <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <img src='/icons/wifi.svg' width='14px' height='18.5px' alt='attention' />
                    <Typography component='h2' fontSize='18px' marginTop='3px' marginLeft='5px' fontWeight={700} sx={{ color: '#A54CE5' }}>
                        On Going Tourney
                    </Typography>
                </Box>
                <TournamentSliderGD spacing='large'>
                    {[...Array(3)].map((_item: any, index: number) => {
                        return (
                            <TournamentCard
                                customWidth='99%'
                                onClick={() => router.push(`/games/${index + 1}/tournament`)}
                                time='6d 13h 23m'
                                pool='3500'
                                champion='250'
                                coin='100'
                                stars='5.25'
                                users='376'
                                position='35'
                                key={index}
                            />
                        );
                    })}
                </TournamentSliderGD>
            </Box>
            <Box component='section' marginBottom='46px' marginTop='40px'>
                <GameHeader image='/images/hopup.png' title='Hop Up' />
                <Box marginTop='24px'>
                    <TournamentSliderGD>
                        {[...Array(3)].map((_item: any, index: number) => {
                            return (
                                <TournamentCard
                                    customWidth='93%'
                                    onClick={() => router.push(`/games/${index + 1}/tournament`)}
                                    time='6d 13h 23m'
                                    pool='3500'
                                    champion='250'
                                    coin='100'
                                    stars='5.25'
                                    users='376'
                                    position='35'
                                    key={index}
                                />
                            );
                        })}
                    </TournamentSliderGD>
                </Box>
            </Box>
            <Box component='section' marginBottom='46px'>
                <GameHeader image='/images/game-img.png' title='Block Stack' />
                <Box marginTop='24px'>
                    <TournamentSliderGD>
                        {[...Array(3)].map((_item: any, index: number) => {
                            return (
                                <TournamentCard
                                    customWidth='93%'
                                    onClick={() => router.push(`/games/${index + 1}/tournament`)}
                                    time='6d 13h 23m'
                                    pool='3500'
                                    champion='250'
                                    coin='100'
                                    stars='5.25'
                                    users='376'
                                    position='35'
                                    key={index}
                                />
                            );
                        })}
                    </TournamentSliderGD>
                </Box>
            </Box>
        </Box>
    );
};

export default Tournaments;
