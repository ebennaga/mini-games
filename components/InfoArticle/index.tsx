import { Box, Typography } from '@mui/material';
import React from 'react';

interface InfoArticleProps {
    title?: string;
    text: string;
}

const InfoArticle: React.FC<InfoArticleProps> = ({ text, title }) => {
    const textArray = text.split(' ');
    const titleArticle = textArray.slice(0, 2).join(' ');
    const articles = textArray.slice(2, textArray.length).join(' ');
    return (
        <Box>
            {title && (
                <Typography component='h3' fontWeight={700} fontSize='14px' marginBottom='21px' sx={{ color: '#2E2E2E' }}>
                    {title}
                </Typography>
            )}
            <Typography component='p' textAlign='justify' lineHeight='18px'>
                <Typography component='span' fontWeight={700} fontSize='14px' sx={{ color: '#2E2E2E' }}>
                    {titleArticle}
                </Typography>{' '}
                <Typography component='span' fontWeight={400} fontSize='14px' sx={{ color: '#949494' }}>
                    {articles}
                </Typography>
            </Typography>
        </Box>
    );
};

export default InfoArticle;
