import { Box, Typography } from '@mui/material';
import React from 'react';

interface TitleSectionProps {
    title: string;
    sutTitle: string;
    smallImage: any;
    bigImage: any;
}

const TitleSection: React.FC<TitleSectionProps> = ({ title, sutTitle, smallImage, bigImage }) => {
    return (
        <Box sx={{ padding: '28px 0', position: 'relative', overflow: 'hidden', display: 'flex' }}>
            <Box>
                <Typography fontSize='20px' fontWeight={700} component='h2'>
                    {title}
                </Typography>
                <Typography fontSize='12px' marginTop='16px' fontWeight={600} component='p'>
                    {sutTitle}
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', position: 'absolute', right: '-30px', top: '3px', rotate: '-33deg' }}>
                <Box>
                    <img src={smallImage} width='62.79px' height='59.36px' alt='coins' />
                </Box>
                <Box sx={{ marginLeft: '-25px' }}>
                    <img src={bigImage} width='83.64px' height='70.93px' alt='coins' />
                </Box>
            </Box>
        </Box>
    );
};

export default TitleSection;
