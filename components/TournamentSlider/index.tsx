import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface TournamentSliderProps {
    children: any;
}

const TournamentSlider = (props: TournamentSliderProps) => {
    const { children } = props;
    const settings = {
        dots: false,
        speed: 500,
        slideToShow: 1,
        swipeToSlide: true
    };

    return (
        <Box
            sx={{
                // border: '1px solid red',
                '& .slick-slider': { maxWidth: '110vw', width: '100%', height: '380px' },
                '& .slick-arrow': { display: 'none' },
                '& .slick-current': {
                    // border: '1px solid red',
                    maxWidth: '500px !important',
                    width: '380px !important',
                    marginRight: '15px'
                }
            }}
        >
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default TournamentSlider;
