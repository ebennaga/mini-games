import { Box, Typography } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import React from 'react';

interface HighScoreCardProps {
    image: string;
    title: string;
    score: number;
}

const HighScoreCard: React.FC<HighScoreCardProps> = ({ image, title, score }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={image} width='64px' height='64px' alt='games' loading='lazy' style={{ borderRadius: '5px' }} />
                <Box sx={{ marginLeft: 2 }}>
                    <Typography component='h3' fontSize='14px' fontWeight={700}>
                        {title}
                    </Typography>
                    <Typography component='span' fontWeight={600} fontSize='14px' sx={{ color: '#949494' }}>
                        High Scores:
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src='/icons/high-score.png' width='14.29px' height='24.11px' alt='high score' />
                <Typography component='h3' fontSize='14px' fontWeight={600} marginLeft={1}>
                    {numberFormat(score)}
                </Typography>
            </Box>
        </Box>
    );
};

export default HighScoreCard;
