import { Box, Skeleton } from '@mui/material';
import React from 'react';

const LoadingEmailPassword = () => {
    return (
        <Box width='-webkit-fill-available' px='20px'>
            <Skeleton sx={{ height: '50px' }} />
            <Skeleton sx={{ width: '100px', height: '30px', mt: 4 }} />
            <Skeleton sx={{ height: '100px' }} />
            <Skeleton sx={{ width: '100px', height: '30px', mt: 4 }} />
            <Skeleton />
            <Skeleton sx={{ height: '100px' }} />
            <Skeleton sx={{ height: '100px' }} />
            <Skeleton sx={{ height: '100px' }} />
            <Skeleton />
            <Skeleton sx={{ height: '100px', mt: 5 }} />
        </Box>
    );
};

export default LoadingEmailPassword;
