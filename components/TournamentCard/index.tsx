/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import getRemainingTimes from 'helper/getRemainingTime';
import numberFormat from 'helper/numberFormat';

interface TournamentCardProps {
    users: string;
    pool: any;
    coin: any;
    time: 'coming soon' | string;
    onClick?: any;
    customWidth?: any;
    imageGame: string;
    backgroundImage: string;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ time, coin, pool, users, onClick, customWidth, imageGame, backgroundImage }) => {
    const [timeTournament, setTimeTournament] = useState<string>('');
    const nowTime = new Date().getTime();
    const endTime = new Date(time).getTime();

    useEffect(() => {
        if (time && time[4] === '-' && time[7] === '-') {
            const newD = new Date(time).toLocaleString();
            if (!timeTournament) {
                setTimeTournament(getRemainingTimes(newD));
                // setTimeTournament(getRemainingTimes(time));
            }
            setInterval(() => {
                // setTimeTournament(getRemainingTimes(time));
                setTimeTournament(getRemainingTimes(newD));
            }, 6000);
        } else {
            setTimeTournament('Coming Soon');
        }
    }, []);

    return (
        <Box
            onClick={onClick}
            sx={{
                width: customWidth || '90%',
                height: '320px',
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderRadius: '24px'
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    background:
                        timeTournament === 'Coming Soon'
                            ? 'rgba(128, 128, 128, 0.85)'
                            : 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 65%)',
                    borderRadius: '24px'
                }}
            >
                <Box
                    sx={{
                        padding: '25px 15px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '86%'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            background: 'rgba(55, 55, 55, 0.5)',
                            width: 'fit-content',
                            padding: '4.3px 11px',
                            borderRadius: '10.5px',
                            color: '#fff',
                            alignSelf: 'end'
                        }}
                    >
                        {timeTournament !== 'Coming Soon' && (
                            <img src='/icons/clock.png' alt='clock timer' width='14px' height='14px' loading='lazy' />
                        )}
                        <Typography component='span' sx={{ fontSize: '12px', paddingLeft: '4px' }}>
                            {nowTime > endTime ? 'Ended' : timeTournament}
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            // padding: '17px',
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
                                width: '74px',
                                height: '74px',
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
                                <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                                    <img src='/images/point-shops.png' width={31} height={31} alt='star' loading='lazy' />
                                    <Typography
                                        component='span'
                                        sx={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            color: '#fff',
                                            display: 'flex',
                                            alignItems: 'center',
                                            paddingLeft: 0.5,
                                            '@media (max-width:470px)': {
                                                fontSize: '16.5px'
                                            },
                                            '@media (max-width:430px)': {
                                                fontSize: '15px'
                                            },
                                            '@media (max-width:400px)': {
                                                fontSize: '13px'
                                            }
                                        }}
                                    >
                                        {numberFormat(pool)}
                                        <Typography
                                            component='span'
                                            sx={{
                                                fontSize: '9px',
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
                                            {users}
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
                                    justifyContent: nowTime < endTime ? 'space-between' : 'center',
                                    marginTop: '9px',
                                    ml: 1
                                }}
                            >
                                <Typography
                                    fontSize='11px'
                                    fontWeight={600}
                                    component='span'
                                    sx={{ color: '#fff', '@media (max-width:400px)': { fontSize: '10px' } }}
                                >
                                    {`${nowTime > endTime ? 'View Results' : 'View Tournaments'}`}
                                </Typography>
                                {nowTime < endTime && (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <img src='/images/coin.png' width='13.81px' height='13.17px' alt='trophy' loading='lazy' />
                                        <Typography
                                            component='span'
                                            sx={{
                                                fontSize: '11px',
                                                fontWeight: 'bold',
                                                paddingLeft: '4px',
                                                '@media (max-width:400px)': { fontSize: '10px' }
                                            }}
                                        >
                                            {coin}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TournamentCard;
