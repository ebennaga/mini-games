import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import LeaderboardUser from './LeaderboardUser';

interface LeaderboardPodiumProps {
    dataLeaderboard: any;
}

const LeaderboardPodium: React.FC<LeaderboardPodiumProps> = ({ dataLeaderboard }) => {
    return (
        <Grid container alignItems='end'>
            <Grid item xs={4} sx={{ overflow: 'hidden', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {dataLeaderboard.length > 1 && (
                    <LeaderboardUser
                        image={dataLeaderboard[1].image}
                        username={dataLeaderboard[1].user.username || dataLeaderboard[1].user.displayName}
                        score={dataLeaderboard[1].user.total_score}
                    />
                )}
                <Box sx={{ width: '100%' }}>
                    <Box
                        sx={{
                            background: '#BB7BEC',
                            marginLeft: '6%',
                            width: '120%',
                            height: '18px',
                            transform: 'perspective(12px) rotateX(8deg)'
                        }}
                    />
                    <Box
                        sx={{
                            background: 'linear-gradient(180deg, #A54CE5 39.58%, #F4F1FF 100%)',
                            height: '146px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'end', marginRight: '9px', marginTop: '9px' }}>
                            <img src='/images/point-shops.png' width='21px' height='22px' alt='prize' />
                            {dataLeaderboard.length > 1 && (
                                <Typography component='span' fontSize='12px' fontWeight={700} marginLeft='5px' sx={{ color: '#fff' }}>
                                    {dataLeaderboard[1].user.point_prize}
                                </Typography>
                            )}
                        </Box>
                        <Typography
                            marginLeft='13px'
                            component='span'
                            fontSize='50px'
                            fontWeight={700}
                            sx={{ color: '#fff', position: 'relative' }}
                        >
                            2<sup style={{ position: 'absolute', top: '5px', fontSize: '29px' }}>#</sup>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={4} sx={{ overflow: 'hidden', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {dataLeaderboard.length > 0 && (
                    <LeaderboardUser
                        image={dataLeaderboard[0].image}
                        username={dataLeaderboard[0].user.username || dataLeaderboard[0].user.displayName}
                        score={dataLeaderboard[0].user.total_score}
                    />
                )}
                <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Box
                        sx={{
                            background: '#BB7BEC',
                            width: '90%',
                            height: '18px',
                            transform: 'perspective(12px) rotateX(8deg)'
                        }}
                    />
                    <Box
                        sx={{
                            background: 'linear-gradient(180deg, #A54CE5 39.58%, #F4F1FF 100%)',
                            width: '100%',
                            height: '205px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'end', marginRight: '9px', marginTop: '9px' }}>
                            <img src='/images/point-shops.png' width='21px' height='22px' alt='prize' />
                            {dataLeaderboard.length > 0 && (
                                <Typography component='span' fontSize='12px' fontWeight={700} marginLeft='5px' sx={{ color: '#fff' }}>
                                    {dataLeaderboard[0].user.point_prize}
                                </Typography>
                            )}
                        </Box>
                        <Typography
                            marginLeft='13px'
                            component='span'
                            fontSize='50px'
                            fontWeight={700}
                            sx={{ color: '#fff', position: 'relative' }}
                        >
                            1<sup style={{ position: 'absolute', top: '5px', fontSize: '29px' }}>#</sup>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={4} sx={{ overflow: 'hidden', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                {dataLeaderboard.length > 2 && (
                    <LeaderboardUser
                        image={dataLeaderboard[2].image}
                        username={dataLeaderboard[2].user.username || dataLeaderboard[2].user.displayName}
                        score={dataLeaderboard[2].user.total_score}
                    />
                )}
                <Box sx={{ width: '100%' }}>
                    <Box
                        sx={{
                            background: '#BB7BEC',
                            marginLeft: '-27%',
                            width: '120%',
                            height: '18px',
                            transform: 'perspective(12px) rotateX(8deg)'
                        }}
                    />
                    <Box
                        sx={{
                            background: 'linear-gradient(180deg, #A54CE5 39.58%, #F4F1FF 100%)',
                            height: '104px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', alignSelf: 'end', marginRight: '9px', marginTop: '9px' }}>
                            <img src='/images/point-shops.png' width='21px' height='22px' alt='prize' />
                            {dataLeaderboard.length > 2 && (
                                <Typography component='span' fontSize='12px' fontWeight={700} marginLeft='5px' sx={{ color: '#fff' }}>
                                    {dataLeaderboard[2].user.point_prize}
                                </Typography>
                            )}
                        </Box>
                        <Typography
                            marginLeft='13px'
                            component='span'
                            fontSize='50px'
                            fontWeight={700}
                            sx={{ color: '#fff', position: 'relative' }}
                        >
                            3<sup style={{ position: 'absolute', top: '5px', fontSize: '29px' }}>#</sup>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LeaderboardPodium;
