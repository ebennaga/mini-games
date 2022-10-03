import { Box, Skeleton } from '@mui/material';
import React from 'react';

const InboxSkeleton = () => {
    return (
        <Box sx={{ width: '-webkit-fill-available', padding: '0 20px' }}>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Skeleton sx={{ height: '30px', width: '30px' }} />
                <Skeleton sx={{ height: '30px', width: '100px', margin: 'auto' }} />
            </Box>
            {[...Array(3)].map((_data: any, idx: number) => (
                <Box key={idx} margin='40px 0'>
                    <Skeleton sx={{ height: '30px', width: '150px' }} />
                    <Skeleton sx={{ height: '330px', margin: '-30px 0' }} />
                    {[...Array(3)].map((_item: any, index: number) => (
                        <Skeleton key={index} sx={{ height: '30px' }} />
                    ))}
                </Box>
            ))}
        </Box>
    );
};

export default InboxSkeleton;
