import { Box, ButtonBase, Skeleton } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface HeaderSkeletonProps {
    page?: string;
}

const HeaderSkeleton: React.FC<HeaderSkeletonProps> = ({ page }) => {
    const router = useRouter();

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {page === 'home' ? (
                    <ButtonBase onClick={() => router.push('/')}>
                        <img src='/icons/logo.svg' width='75px' height='39px' alt='prize play' loading='lazy' />
                    </ButtonBase>
                ) : (
                    <Skeleton sx={{ width: '75px', height: '48px' }} />
                )}
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Skeleton sx={{ width: '75px', height: '38px' }} />
                    <Skeleton variant='circular' sx={{ width: '40px', height: '40px', marginLeft: '10px' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeaderSkeleton;
