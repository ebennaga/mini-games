import { Box, Typography } from '@mui/material';
import React from 'react';
import Search from './Search';
import useStyles from './useStyle';
import Mission from './Mission';
import GamesCard from './GamesCard';
import ReactSlick from './EventCarousel';

const HomeContainer = () => {
    const classes = useStyles();

    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <img src='/icons/logo.svg' width='75px' height='39px' alt='prize play' />
                <Box className={classes.headerRight} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                        className={classes.pointContainer}
                        sx={{
                            background: '#FFF5CD',
                            borderRadius: '27px',
                            width: '96px',
                            height: '30px',
                            position: 'relative',
                            marginRight: '11px'
                        }}
                    >
                        <Box sx={{ position: 'absolute', top: '-7px' }}>
                            <img src='/icons/plus-point.png' width='16px' height='16px' alt='plus point' />
                        </Box>
                        <Box
                            className={classes.pointSection}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '0 9px',
                                paddingTop: '2px'
                            }}
                        >
                            <img src='/icons/point.png' width='21px' height='20.02px' alt='point icon' />
                            <Typography
                                variant='subtitle1'
                                component='span'
                                className={classes.pointText}
                                sx={{ fontWeight: 'bold', fontSize: '14px', color: '#373737' }}
                            >
                                102.300
                            </Typography>
                        </Box>
                    </Box>
                    <img src='/icons/dummy/profile.png' width='46px' height='46px' alt='profile' />
                </Box>
            </Box>
            <Search />
            <ReactSlick />
            <Mission />
            <Box sx={{ marginTop: '32px' }}>
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    Games
                </Typography>
                <GamesCard />
            </Box>
        </Box>
    );
};

export default HomeContainer;
