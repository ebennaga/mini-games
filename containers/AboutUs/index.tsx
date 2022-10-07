import { Box } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import InfoArticle from 'components/InfoArticle';
import SocialMediaList from 'components/SocialMediaList';
import React from 'react';

const AboutUs = () => {
    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='About' />
            <Box component='section' sx={{ marginTop: '57px', textAlign: 'center' }}>
                <img src='/icons/logo.svg' width='150px' height='77.12px' alt='prize play' style={{ marginBottom: '60px' }} />
                <img src='/images/logo-about.svg' width='240.33px' height='188px' alt='logo about' />
                <Box sx={{ marginTop: '51px' }}>
                    <InfoArticle
                        text='Prize play is dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                    aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                    condimentum lobortis.'
                    />
                </Box>
            </Box>
            <Box sx={{ borderTop: '1px solid #E6E6E6', marginTop: '84px' }}>
                <SocialMediaList />
            </Box>
        </Box>
    );
};

export default AboutUs;
