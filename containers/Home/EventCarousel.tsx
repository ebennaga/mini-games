import { Box, ButtonBase } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

const EventCarousel = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 1,
        speed: 500,
        dots: true,
        swipeToSlide: true
    };
    return (
        <Box sx={{ margin: 'auto', height: '200px' }}>
            <Box
                sx={{
                    '& .slick-slider': { maxWidth: '110vw', width: '100%' },
                    '& .slick-arrow': { display: 'none' },
                    '& .slick-list': { height: '200px', '@media (max-width:599px)': { height: '180px' } },
                    '& .slick-dots li': { width: '5px' },
                    '& .slick-track': { height: '180px' },
                    '& .slick-cloned': { marginLeft: '10px' },
                    '& .slick-dots': {
                        '& .slick-active button:before': {
                            color: '#A54CE5'
                        },
                        '& button:before': {
                            fontSize: '10px'
                        }
                    }
                }}
            >
                <Slider {...settings}>
                    <Box>
                        <ButtonBase
                            sx={{
                                background: `url(${'/icons/dummy/slider-1.png'})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                // width: '282px',
                                width: '90%',
                                // height: '154px',
                                height: { xs: '154px', sm: '200px' },
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
                                backgroundRepeat: 'no-repeat',
                                // width: '282px',
                                width: '90%',
                                // height: '154px',
                                height: { xs: '154px', sm: '200px' },
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
                                backgroundRepeat: 'no-repeat',
                                // width: '282px',
                                width: '90%',
                                // height: '154px',
                                height: { xs: '154px', sm: '200px' },
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
                                backgroundRepeat: 'no-repeat',
                                // width: '282px',
                                width: '90%',
                                // height: '154px',
                                height: { xs: '154px', sm: '200px' },
                                borderRadius: '22px'
                            }}
                        />
                    </Box>
                </Slider>
            </Box>
        </Box>
    );
};

export default EventCarousel;
