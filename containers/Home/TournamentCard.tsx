import { Box, ButtonBase, Typography } from '@mui/material';
import getRemainingTimes from 'helper/getRemainingTime';
import React, { useEffect, useState } from 'react';
import numberFormat from 'helper/numberFormat';

interface TournamentCardProps {
    image: string;
    imageGame: string;
    onClick: any;
    totalUser: number;
    prizePool: number;
    point: number;
    time: string;
    dataLength?: number;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ image, imageGame, onClick, totalUser, prizePool, point, time, dataLength }) => {
    const [timeTournament, setTimeTournament] = useState<string>('');

    useEffect(() => {
        const newD = new Date(time).toLocaleString();
        if (time && !timeTournament) {
            setTimeTournament(getRemainingTimes(newD));
        }
        setInterval(() => {
            setTimeTournament(getRemainingTimes(newD));
        }, 60000);
    }, []);

    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                width: dataLength && dataLength === 1 ? '100%' : '95%',
                height: '372px',
                backgroundImage: `url('${image}'), url(/images/img_error_bg.png)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '24px',
                '@media (max-width:500px)': {
                    height: '300px'
                }
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 65%)',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}
            >
                <Box sx={{ padding: '17px', alignSelf: 'flex-end' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            background: 'rgba(55, 55, 55, 0.5)',
                            width: 'fit-content',
                            padding: '4.3px 11px',
                            borderRadius: '10.5px',
                            color: '#fff'
                        }}
                    >
                        <img src='/icons/clock.png' alt='clock timer' width='14px' height='14px' />
                        <Typography component='span' height='15px' sx={{ fontSize: '12px', paddingLeft: '4px' }}>
                            {timeTournament}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        padding: '17px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                        // height: '86%'
                    }}
                >
                    <Box
                        sx={{
                            background: `url(${imageGame}), url(/images/img_error.svg)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '8px',
                            width: '78px',
                            height: '78px',
                            '@media (max-width:400px)': {
                                width: '65px',
                                height: '65px'
                            }
                        }}
                    />
                    <Box
                        sx={{
                            width: '75%',
                            '@media (max-width:470px)': {
                                width: '70%'
                            },
                            '@media (max-width:400px)': {
                                width: '70%'
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src='/images/point-shops.png' width={31} height={31} alt='star' />
                                <Typography
                                    component='span'
                                    sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingLeft: 0.5,
                                        '@media (max-width:400px)': {
                                            fontSize: '18px'
                                        }
                                    }}
                                >
                                    {numberFormat(prizePool)}
                                    <Typography
                                        component='span'
                                        sx={{
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            paddingLeft: '4px',
                                            '@media (max-width:400px)': { fontSize: '10px' }
                                        }}
                                    >
                                        Pool
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        background: '#FFDD50',
                                        borderRadius: '19px',
                                        padding: '4px 5px',
                                        width: 'fit-content'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            background: `url(${'/icons/dummy/main-ikan.png'})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            width: '16.71px',
                                            height: '16.71px',
                                            borderRadius: '22px'
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            background: `url(${'/icons/dummy/user-1.png'})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            width: '16.71px',
                                            height: '16.71px',
                                            borderRadius: '22px',
                                            marginLeft: '-10px'
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            background: `url(${'/icons/dummy/user-2.png'})`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            width: '16.71px',
                                            height: '16.71px',
                                            borderRadius: '22px',
                                            marginLeft: '-10px'
                                        }}
                                    />
                                    <Typography component='span' sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}>
                                        {totalUser}
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                color: '#fff',
                                background: '#A54CE5',
                                borderRadius: '12px',
                                padding: '11px 15px',
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '9px'
                            }}
                        >
                            <Typography
                                fontSize='11px'
                                fontWeight={600}
                                component='span'
                                sx={{ color: '#fff', '@media (max-width:400px)': { fontSize: '10px' } }}
                            >
                                View Tournaments
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src='/images/coin.png' width='13.81px' height='13.17px' alt='trophy' />
                                <Typography
                                    component='span'
                                    sx={{
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        paddingLeft: '4px',
                                        '@media (max-width:400px)': { fontSize: '10px' }
                                    }}
                                >
                                    {point}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ButtonBase>
    );
};

export default TournamentCard;
