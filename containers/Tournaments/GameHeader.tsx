import { Box, Typography } from '@mui/material';
import React from 'react';

interface GameHeaderProps {
    image: string;
    title: string;
}

const GameHeader: React.FC<GameHeaderProps> = ({ image, title }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
                sx={{
                    background: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '65px',
                    height: '65px',
                    borderRadius: '7px',
                    marginRight: '17px'
                }}
            />
            <Typography component='h2' fontSize='18px' fontWeight={700}>
                {title}
            </Typography>
        </Box>
    );
};

export default GameHeader;
