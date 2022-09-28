import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import SocialMediaList from 'components/SocialMediaList';
import React from 'react';

const AboutUs = () => {
    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737', height: '90vh' }}>
            <HeaderBack title='About' />
            <Box component='section' sx={{ marginTop: '57px', textAlign: 'center' }}>
                <img src='/icons/logo.svg' width='150px' height='77.12px' alt='prize play' style={{ marginBottom: '60px' }} />
                <img src='/images/logo-about.svg' width='240.33px' height='188px' alt='logo about' />
                <Typography component='p' textAlign='justify' marginTop='51px'>
                    <Typography component='span' fontWeight={700} fontSize='14px' sx={{ color: '#2E2E2E' }}>
                        Prize Play
                    </Typography>{' '}
                    <Typography component='span' fontWeight={400} fontSize='14px' sx={{ color: '#949494' }}>
                        is dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at
                        turpis condimentum lobortis.
                    </Typography>
                </Typography>
            </Box>
            <Box component='footer' sx={{ borderTop: '1px solid #E6E6E6', marginTop: '84px' }}>
                <SocialMediaList />
            </Box>
        </Box>
    );
};

export default AboutUs;
