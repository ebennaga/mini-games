import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface TournamentSliderProps {
    children: any;
    isLarge?: boolean;
    customMaxWidth?: string;
}

const TournamentSlider = (props: TournamentSliderProps) => {
    const { children, isLarge = false, customMaxWidth } = props;
    const settings = {
        dots: false,
        speed: 500,
        slideToShow: 1,
        swipeToSlide: true,
        infinite: false
    };

    const maxWidth = customMaxWidth || '100vw';

    return (
        <Box
            sx={{
                '& .slick-slider': {
                    maxWidth: isLarge ? '108vw' : maxWidth,
                    width: '100%',
                    height: '380px',
                    marginRight: '10px',
                    '@media (max-width:500px)': {
                        height: '300px'
                    }
                },
                '& .slick-arrow': { display: 'none' },
                '& .slick-current': {
                    // border: '1px solid red',
                    maxWidth: '500px !important',
                    width: '75vw !important',
                    marginRight: '15px'
                }
            }}
        >
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default TournamentSlider;
