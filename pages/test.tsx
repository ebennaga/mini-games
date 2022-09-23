import { Box } from '@mui/material';
import GamesCard from 'containers/Home/GamesCard';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from 'components/Layout/Index';

const Page = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Layout backgoundColor='#fff'>
            <Box sx={{ width: '100%', margin: 'auto', background: 'yellow', minHeight: '300px' }}>
                <Box>
                    <Slider {...settings}>
                        <GamesCard />
                        <GamesCard />
                        <GamesCard />
                        <GamesCard />
                        <GamesCard />
                        <GamesCard />
                    </Slider>
                </Box>
            </Box>
        </Layout>
    );
};

export default Page;
