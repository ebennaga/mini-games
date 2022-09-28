/* eslint-disable no-unused-vars */
import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface ShopsSliderProps {
    children: any;
}

const ShopsSlider: React.FC<ShopsSliderProps> = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Box
            sx={{
                '& .slick-slider': {
                    maxWidth: '590px',
                    width: '100%',
                    height: '260px',
                    outline: 'none',
                    '&  slick-initialized': {
                        width: '100%'
                    }
                },
                '& .slick-arrow': { display: 'none' },
                '& .slick-list': { height: '300px' },
                '.slick-track': { height: '200px' },
                mb: '30px',
                '.css-1xb8cnv': { paddingX: 0 },
                '& .slick-dots': {
                    '& .slick-active button:before': {
                        color: '#A54CE5'
                    },
                    '& button:before': {
                        fontSize: '12px'
                    }
                },
                '& .slick-dots li': {
                    margin: 0
                }
            }}
        >
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default ShopsSlider;
