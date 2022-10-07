import { Box, Skeleton } from '@mui/material';
import React from 'react';

const HeaderSkeleton = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton sx={{ width: '75px', height: '48px' }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Skeleton sx={{ width: '75px', height: '38px' }} />
                    <Skeleton variant='circular' sx={{ width: '40px', height: '40px', marginLeft: '10px' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderSkeleton;
