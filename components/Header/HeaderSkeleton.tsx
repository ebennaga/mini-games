import { Box, ButtonBase, Skeleton } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface HeaderSkeletonProps {
    page?: string;
    isPage?: boolean;
}

const HeaderSkeleton: React.FC<HeaderSkeletonProps> = ({ page, isPage = false }) => {
    const router = useRouter();

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {page === 'home' || isPage ? (
                    <ButtonBase onClick={() => router.push('/')}>
                        <img src='/icons/logo.svg' width='75px' height='39px' alt='prize play' loading='lazy' />
                    </ButtonBase>
                ) : (
                    <ButtonBase
                        onClick={() => router.back()}
                        sx={{ width: '24px', height: '24px', borderRadius: '50px', background: '#A54CE5' }}
                    >
                        <ArrowBackIcon sx={{ color: '#fff', width: '40px', height: '20px', fontWeight: 'bold' }} />
                    </ButtonBase>
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
