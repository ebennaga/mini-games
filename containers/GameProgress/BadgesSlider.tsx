import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface BadgeSliderProps {
    children: any;
}

const BadgeSlider = (props: BadgeSliderProps) => {
    const { children } = props;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.2,
        swipeToSlide: true
    };

    return (
        <Box
            sx={{
                '& .slick-slider': {
                    maxWidth: '88vw',
                    width: '100%',
                    height: 'fit-content'
                },
                '& .slick-track': { display: 'flex' },
                '& .slick-arrow': { display: 'none' },
                '& .slick-slide': {
                    paddingRight: '20px'
                },
                '& .slick-cloned': {
                    paddingRight: '0px'
                }
            }}
        >
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default BadgeSlider;
