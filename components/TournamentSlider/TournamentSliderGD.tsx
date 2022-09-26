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
                '& .slick-slider': { maxWidth: '100vw', width: '100%', height: '320px' },
                '& .slick-arrow': { display: 'none' },
                '& .slick-current': {
                    maxWidth: '500px !important',
                    width: '320px !important',
                    marginRight: '0px'
                }
            }}
        >
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default TournamentSlider;
