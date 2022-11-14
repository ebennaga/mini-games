import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
// import InfoArticle from 'components/InfoArticle';
import SocialMediaList from 'components/SocialMediaList';
import React from 'react';

const AboutUs = () => {
    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='About' />
            <Box component='section' sx={{ marginTop: '57px', textAlign: 'center' }}>
                <img
                    src='/icons/logo.svg'
                    width='150px'
                    height='77.12px'
                    alt='prize play'
                    style={{ marginBottom: '60px' }}
                    loading='lazy'
                />
                <img src='/images/logo-about.png' width='240.33px' height='188px' alt='logo about' loading='lazy' />
                <Box sx={{ marginTop: '51px' }}>
                    {/* <InfoArticle text='Welcome To prizeplay.io' /> */}
                    <Typography sx={{ color: '#949494', fontWeight: 700, size: '18px' }}>Welcome To prizeplay.io</Typography>
                    {/* <InfoArticle
                        text=' prizeplay.io is a Professional games, marketplace Platform. Here we will provide you only interesting content, which you will like very much. We are dedicated to providing you the best of games, marketplace, with a focus on dependability and gaming. We are working to turn our passion for games, marketplace into a booming online website. We hope you enjoy our games, marketplace as much as we enjoy offering them to you.
                        
                        I will keep posting more important posts on my Website for all of you. Please give your support and love.'
                    /> */}
                    <Typography sx={{ mt: 1, color: '#949494', fontWeight: 400, fontSize: '14px', lineHeight: '18px' }}>
                        prizeplay.io is a professional gaming marketplace platform, featuring exciting content which can win you a variety
                        of exclusive prizes! We are dedicated to providing you the best experience when it comes to gaming and online
                        commerce. We are constantly working on creating the best events, and competitions for everyone to enjoy. We only
                        employ legitimate means to ensuring a prize won is a prize earned, and we pride ourselves in being fair, and just
                        when it comes to users utilizing our platform.
                    </Typography>
                    <Typography sx={{ mt: 1, color: '#949494', fontWeight: 400, fontSize: '14px', lineHeight: '18px' }}>
                        We sincerely hope you have a great time here, and if you have any further inquiries, please do not hesitate to
                        contact us!
                    </Typography>
                    <Typography sx={{ mt: 1, color: '#949494', fontWeight: 400, fontSize: '14px' }}>
                        Updates and events will constantly be updated on this website for all to see! Thank you for your kind support, and
                        your gratitude!
                    </Typography>
                    <Typography sx={{ mt: 1, color: '#949494', fontWeight: 700, fontSize: '14px' }}>Have Fun!!</Typography>
                </Box>
            </Box>
            <Box sx={{ borderTop: '1px solid #E6E6E6', marginTop: '25px' }}>
                <SocialMediaList />
            </Box>
        </Box>
    );
};

export default AboutUs;
