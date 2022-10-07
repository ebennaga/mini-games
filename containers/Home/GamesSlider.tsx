import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface GamesSliderProps {
    children: any;
    customMaxWidth?: string;
    data: any;
}

const GamesSlider: React.FC<GamesSliderProps> = ({ children, customMaxWidth, data }) => {
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
                '.slick-track': {
                    display: data.length > 3 ? 'block' : 'flex'
                },
                '& .slick-slider': { maxWidth: customMaxWidth || '110vw', width: '100%' },
                '& .slick-arrow': { display: 'none' },
                '& .slick-slide.slick-active': {
                    paddingRight: '7px'
                },
                '& .slick-list': {
                    minHeight: '217px',
                    height: '217px',
                    '@media (max-width:475px)': {
                        height: '200px'
                    },
                    '@media (max-width:450px)': {
                        height: '190px'
                    }
                }
            }}
        >
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default GamesSlider;
