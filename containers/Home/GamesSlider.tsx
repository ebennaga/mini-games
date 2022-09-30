import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface GamesSliderProps {
    children: any;
}

const GamesSlider: React.FC<GamesSliderProps> = ({ children }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true
    };
    return (
        <Box
            sx={{
                '& .slick-slider': { maxWidth: '110vw', width: '100%' },
                '& .slick-arrow': { display: 'none' },
                '& .slick-slide.slick-active': {
                    paddingRight: '7px'
                },
                '& .slick-list': {
                    minHeight: '217px',
                    height: '217px'
                }
            }}
        >
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default GamesSlider;
