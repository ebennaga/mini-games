import { Box, ButtonBase, Typography } from '@mui/material';
// import Link from 'next/link';
import React from 'react';

interface TournamentCardProps {
    image: string;
    onClick: any;
    totalUser: number;
    rank: number;
    prize: number;
    prizePool: number;
    totalMedal: number;
    point: number;
    time: string;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ image, onClick, totalUser, rank, prize, prizePool, totalMedal, point, time }) => {
    const rankSup = (rank === 1 && 'st') || (rank === 2 && 'nd') || (rank === 3 && 'rd') || (rank > 3 && 'th');
    return (
        <ButtonBase
            onClick={onClick}
            sx={{
                width: '95%',
                height: '372px',
                backgroundImage: `url('${image}')`,
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
                    borderRadius: '24px'
                }}
            >
                <Box
                    sx={{
                        padding: '25px 22px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: '86%'
                    }}
                >
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
                        <Box sx={{ display: 'flex' }}>
                            <Box
                                sx={{
                                    background: '#FFDD50',
                                    borderRadius: '19px',
                                    width: 'fit-content',
                                    padding: '2px 5px'
                                }}
                            >
                                <Typography component='span' sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}>
                                    {rank} <sup>{rankSup}</sup>
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    background: '#FFDD50',
                                    borderRadius: '19px',
                                    width: 'fit-content',
                                    padding: '2px 5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginLeft: 1
                                }}
                            >
                                <img src='/icons/star.png' width={17} height={17} alt='star' />
                                <Typography component='span' sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}>
                                    {prize}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src='/icons/star.png' width={31} height={31} alt='star' />
                                <Typography
                                    component='span'
                                    sx={{
                                        fontSize: '24px',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        paddingLeft: 0.5
                                    }}
                                >
                                    {prizePool}
                                    <Typography component='span' sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}>
                                        Pool
                                    </Typography>
                                </Typography>
                            </Box>
                            <Box sx={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <img src='/icons/trophy.png' width='14px' height='10px' alt='trophy' />
                                    <Typography component='span' sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}>
                                        {totalMedal}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 1.5 }}>
                                    <img src='/images/coin.png' width='13.81px' height='13.17px' alt='trophy' />
                                    <Typography component='span' sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '4px' }}>
                                        {point}
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
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src='/icons/clock.png' alt='clock timer' width='14px' height='14px' />
                                <Typography component='span' sx={{ fontSize: '12px', paddingLeft: '4px' }}>
                                    {time}
                                </Typography>
                            </Box>
                            <Typography fontSize='11px' fontWeight={600} component='span' sx={{ color: '#fff' }}>
                                View Tournaments
                            </Typography>
                            {/* <Link href={`/games/${index + 1}/tournament`}>
                                <a
                                    style={{
                                        textDecoration: 'none !important',
                                        fontWeight: 600,
                                        color: '#fff',
                                        fontSize: '11px',
                                        textDecorationLine: 'none'
                                    }}
                                >
                                    View Tournaments
                                </a>
                            </Link> */}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </ButtonBase>
    );
};

export default TournamentCard;
