import { Box, Typography } from '@mui/material';
import React from 'react';

interface InfoCardProps {
    text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ text }) => {
    return (
        <Box
            sx={{
                background: '#F5F5F5',
                padding: '14px 20px',
                borderRadius: '10px',
                marginTop: '30px',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <img src='/icons/info.svg' width='19px' height='19px' alt='info' />
            <Typography component='p' paddingLeft='15px' fontSize='10px' fontWeight={600} lineHeight='10px' sx={{ color: '#949494' }}>
                {text}
            </Typography>
        </Box>
    );
};

export default InfoCard;
