import { Box, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    width: '100%',
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#9163F6' : '#9163F6'
    }
}));

interface BarExpProps {
    value: number;
    labelBar: string;
}

const BarExp: React.FC<BarExpProps> = ({ value, labelBar }) => {
    return (
        <Box sx={{ width: '70%', display: 'flex', marginTop: 1 }}>
            <Typography component='span' fontWeight='bold' lineHeight={0.7} sx={{ color: '#9163F6' }}>
                XP
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '0 10px' }}>
                <BorderLinearProgress variant='determinate' value={value} />
                <Typography component='span' fontWeight='bold' sx={{ fontSize: '10px', color: '#373737', textAlign: 'center' }}>
                    {labelBar}
                </Typography>
            </Box>
            <ArrowForwardIosIcon sx={{ color: '#9163F6', fontSize: '1.1rem' }} />
        </Box>
    );
};

export default BarExp;
