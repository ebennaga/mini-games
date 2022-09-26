/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import Search from './Search';
import useStyles from './useStyle';
import Mission from './Mission';
import GamesCard from './GamesCard';
import ReactSlick from './EventCarousel';

const HomeContainer = () => {
    const classes = useStyles();

    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
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
