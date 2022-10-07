import { Typography, Box } from '@mui/material';
import CircularStatic from 'components/CircularProgress';
import React from 'react';

const LoadingCasual = () => {
    return (
        <Box sx={{ textAlign: 'center', padding: '0px 30px 40px' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Block Stack</Typography>
            <Box sx={{ textAlign: 'center', my: '32px' }}>
                <img src='/images/loading-img-casual.png' alt='loading-casual' />
            </Box>
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#949494', mb: '100px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
                The Game <br /> Starts in
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ mt: '10px' }}>
                    <CircularStatic />
                </Box>
            </Box>
            <Typography sx={{ fontSize: '10px', fontWeight: 500, color: '#949494', mt: '210px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
            </Typography>
        </Box>
    );
};

export default LoadingCasual;
