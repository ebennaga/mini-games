import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import React from 'react';
import HelpSupportCard from './HelpSupportCard';

const HelpSupport = () => {
    const helpSupportData = [
        {
            title: 'How to win points ?',
            paragraph: ' to win points you must to win tournaments. '
        },
        {
            title: 'How to top up coins ?',
            customParagraph: (
                <Typography component='p' fontWeight={400} lineHeight='12px' fontSize='12px' sx={{ color: '#949494' }}>
                    To top up coin choose menu COIN, Choose the nominal,and complete the payment
                </Typography>
            )
        },
        {
            title: 'How to reedem prize ?',
            paragraph: 'Choose menu PRIZES, pick the prize you want to redeem '
        }
    ];

    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Help & Support' />
            <Typography
                fontWeight={700}
                fontSize='18px'
                marginBottom='13px'
                paddingTop='43px'
                paddingBottom='24px'
                borderBottom='1px solid #E6E6E6'
            >
                FAQ
            </Typography>
            <Box component='section'>
                {helpSupportData.map((item: any, index: number) => {
                    return (
                        <React.Fragment key={index}>
                            <HelpSupportCard title={item.title} paragraph={item.paragraph} customParagraph={item.customParagraph} />
                        </React.Fragment>
                    );
                })}
            </Box>
        </Box>
    );
};

export default HelpSupport;
