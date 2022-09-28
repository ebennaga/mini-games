import { Box } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import InfoArticle from 'components/InfoArticle';
import TitleSection from 'components/TitleSection';
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Privacy Policy' />
            <Box component='section' sx={{ marginTop: '27px' }}>
                <TitleSection
                    title='Prize Play Privacy Policy'
                    sutTitle='Last Updated: Okt 20 2022'
                    smallImage='/icons/coins.svg'
                    bigImage='/icons/coins.svg'
                />
            </Box>
            <Box component='article' sx={{ marginBottom: '50px' }}>
                {[...Array(2)].map((_item: any, index: number) => {
                    return (
                        <Box key={index} sx={{ marginTop: index === 0 ? 0 : '28px' }}>
                            <InfoArticle
                                text='Prize play is dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                                condimentum lobortis.'
                            />
                        </Box>
                    );
                })}
                <Box sx={{ marginTop: '28px' }}>
                    {[...Array(4)].map((_item: any, index: number) => {
                        return (
                            <Box key={index} sx={{ marginTop: index === 0 ? 0 : '28px' }}>
                                <InfoArticle
                                    title={`${index + 1}. Lorem ipsum dolor sit amet`}
                                    text='Prize play is dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class
                                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis
                                condimentum lobortis.'
                                />
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default PrivacyPolicy;
