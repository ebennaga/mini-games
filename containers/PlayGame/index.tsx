import React from 'react';
import { Box } from '@mui/material';

const PlayGameContainer = () => {
    return (
        <Box>
            <iframe
                src='https://verdantegames.com/Hopup/'
                style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, width: '100%', height: '100%', border: 'none' }}
                title='Prize Play'
            />
        </Box>
    );
};

export default PlayGameContainer;
