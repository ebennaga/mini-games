import React from 'react';
import { Box } from '@mui/material';

const PlayGameContainer = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <iframe
                // src='https://verdantegames.com/Hopup/'
                src='https://aesthetic-kleicha-2fce21.netlify.app/'
                style={{
                    // border: '1px solid red',
                    // backgroundColor: 'red',
                    // position: 'absolute',
                    // top: 0,
                    // left: 0,
                    // bottom: 0,
                    // right: 0,
                    width: '100%',
                    height: '100vh',
                    padding: '0px'
                }}
                title='Prize Play || HopUp'
            />
        </Box>
    );
};

export default PlayGameContainer;
