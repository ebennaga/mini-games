import { Box, Typography } from '@mui/material';
import React from 'react';

interface CurrentEmailCardProps {
    email: string;
    title: string;
}

const CurrentEmailCard: React.FC<CurrentEmailCardProps> = ({ email, title }) => {
    return (
        <Box sx={{ background: '#F4F1FF', padding: '13px 21px', borderRadius: '10px' }}>
            <Typography component='p' fontSize='12px' fontWeight={600} sx={{ color: '#949494' }}>
                {title}
            </Typography>
            <Typography component='h2' fontSize='20px' fontWeight={700} sx={{ color: '#373737' }}>
                {email}
            </Typography>
        </Box>
    );
};

export default CurrentEmailCard;
