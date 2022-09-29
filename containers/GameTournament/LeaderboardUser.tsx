import { Avatar, Box, Typography } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import React from 'react';

interface LeaderboardUserProps {
    image: string;
    username: string;
    point: number;
}

const LeaderboardUser: React.FC<LeaderboardUserProps> = ({ image, username, point }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar alt={username} src={image} />
            <Typography component='h3' fontSize='14px' fontWeight={700}>
                {username}
            </Typography>
            <Typography component='h4' fontSize='12px' fontWeight={400}>
                {numberFormat(point)}
            </Typography>
        </Box>
    );
};

export default LeaderboardUser;
