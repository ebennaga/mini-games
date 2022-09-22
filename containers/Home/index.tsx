/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from 'react-slick';
import Search from './Search';
import useStyles from './useStyle';
import Mission from './Mission';
import GamesCard from './GamesCard';

const ArrowCustom = () => {
    return <Box />;
};

const HomeContainer = () => {
    const classes = useStyles();

    const settings = {
        // className: 'center',
        // centerMode: true,
        // dots: true,
        // infinite: true,
        // speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 2.1,
        speed: 500,
        dots: true
    };

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
            <Mission />
            <Box sx={{ marginTop: '32px' }}>
                <Typography variant='h6' fontWeight='bold' component='h2'>
                    Games
                </Typography>
                <Box sx={{ width: '100%', margin: 'auto', minHeight: '300px' }}>
                    <Box
                        sx={{
                            '& .slick-current': { width: '444px !important', zIndex: '80 !important', right: '122px !important' },
                            '& .slick-cloned': { width: '300px' },
                            '& .slick-slide.slick-active': { width: '300px', position: 'relative', right: '230px', zIndex: 90 },
                            '& .slick-slide': { display: 'flex !important', justifyContent: 'flex-start' }
                        }}
                    >
                        <Slider {...settings}>
                            <Box>
                                <ButtonBase
                                    sx={{
                                        background: `url(${'/icons/dummy/slider-1.png'})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: '330px',
                                        height: '184px',
                                        borderRadius: '22px'
                                    }}
                                />
                            </Box>
                            <Box>
                                <ButtonBase
                                    sx={{
                                        background: `url(${'/icons/dummy/slider-2.png'})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: '330px',
                                        height: '184px',
                                        borderRadius: '22px'
                                    }}
                                />
                            </Box>
                            <Box>
                                <ButtonBase
                                    sx={{
                                        background: `url(${'/icons/dummy/slider-3.png'})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: '330px',
                                        height: '184px',
                                        borderRadius: '22px'
                                    }}
                                />
                            </Box>
                            <Box>
                                <ButtonBase
                                    sx={{
                                        background: `url(${'/icons/dummy/slider-4.png'})`,
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        width: '330px',
                                        height: '184px',
                                        borderRadius: '22px'
                                    }}
                                />
                            </Box>
                        </Slider>
                    </Box>
                </Box>
                <GamesCard />
            </Box>
        </Box>
    );
};

export default HomeContainer;
