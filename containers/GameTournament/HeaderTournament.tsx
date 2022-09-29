/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import BadgeImages from 'components/BadgeImages';
import Header from 'components/Header';
import React from 'react';

interface HeaderTournamentProps {
    backgroundImage: string;
    point: number;
    profilePicture: string;
    titleGame: string;
    tournamentType: string;
    time: any;
    totalPlayer: number;
    playerImg1: string;
    playerImg2: string;
    playerImg3: string;
}

const HeaderTournament = (props: HeaderTournamentProps) => {
    const { backgroundImage, point, profilePicture, titleGame, tournamentType, time, totalPlayer, playerImg1, playerImg2, playerImg3 } =
        props;

    return (
        <Box
            component='header'
            sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px'
            }}
        >
            <Box
                sx={{
                    background: 'linear-gradient(0deg, #353535 9.93%, rgba(53, 53, 53, 0) 90.83%)',
                    height: '-webkit-fill-available',
                    padding: '20px 20px 50px 20px',
                    borderBottomLeftRadius: '15px',
                    borderBottomRightRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Header isBack point={point} profilePicture={profilePicture} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                    <Box sx={{ color: '#fff' }}>
                        <Typography component='h2' fontSize='24px' fontWeight={700}>
                            {titleGame}
                        </Typography>
                        <Typography component='h3' fontSize='14px' fontWeight={700}>
                            {tournamentType}
                        </Typography>
                        <Box
                            sx={{
                                color: '#282626',
                                background: '#FFDD50',
                                borderRadius: '19px',
                                padding: '4.5px 5px',
                                width: 'fit-content',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <img src='/icons/time.png' width='17px' height='17px' alt='time' />
                            <Typography component='span' height='18px' fontSize='14px' fontWeight={800} marginLeft='8px'>
                                {time}
                            </Typography>
                        </Box>
                    </Box>
                    <BadgeImages images1={playerImg1} images2={playerImg2} images3={playerImg3} total={201} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderTournament;
