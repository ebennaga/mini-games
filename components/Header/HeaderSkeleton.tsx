import { Box, Skeleton } from '@mui/material';
import React from 'react';

const HeaderSkeleton = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Skeleton sx={{ width: '75px', height: '48px' }} />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Skeleton sx={{ width: '75px', height: '38px' }} />
                    <Skeleton sx={{ width: '35px', height: '48px', borderRadius: '100px', marginLeft: '10px' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderSkeleton;
