import { Avatar, Box, Typography } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import React from 'react';

interface LeaderboardUserProps {
    image: string;
    username: string;
    score: number;
}

const LeaderboardUser: React.FC<LeaderboardUserProps> = ({ image, username, score }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar alt={username} src={image} />
            <Typography component='h3' fontSize='14px' fontWeight={700}>
                {username?.toLowerCase()}
            </Typography>
            <Typography component='h4' fontSize='12px' fontWeight={400}>
                {numberFormat(Number(score))}
            </Typography>
        </Box>
    );
};

export default LeaderboardUser;
