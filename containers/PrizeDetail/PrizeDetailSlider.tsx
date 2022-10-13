import { Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';

interface PrizeDetailSliderProps {
    children: any;
}

const CustomArrow = () => {
    return <Box />;
};

const PrizeDetailSlider: React.FC<PrizeDetailSliderProps> = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />
    };

    return (
        <Box
            sx={{
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
                },
                padding: '50px',
                backgroundColor: '#F4F1FF'
            }}
        >
            <Slider {...settings}>{children}</Slider>
        </Box>
    );
};

export default PrizeDetailSlider;
