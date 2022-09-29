import { Box, Typography } from '@mui/material';
import React from 'react';

interface BadgeImagesProps {
    images1: string;
    images2: string;
    images3: string;
    total: number;
    backgroundColor?: any;
    size?: 'small' | 'large';
}

const BadgeImages: React.FC<BadgeImagesProps> = ({ images1, images2, images3, total, backgroundColor = '#FFDD50', size = 'small' }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                background: backgroundColor,
                borderRadius: '19px',
                padding: '4px 5px',
                width: 'fit-content'
            }}
        >
            <Box
                sx={{
                    background: `url(${images1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: size === 'small' ? '16.71px' : '24.02px',
                    height: size === 'small' ? '16.71px' : '24.02px',
                    borderRadius: '22px',
                    border: `1px solid ${backgroundColor}`
                }}
            />
            <Box
                sx={{
                    background: `url(${images2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: size === 'small' ? '16.71px' : '24.02px',
                    height: size === 'small' ? '16.71px' : '24.02px',
                    borderRadius: '22px',
                    border: `1px solid ${backgroundColor}`,
                    marginLeft: '-10px'
                }}
            />
            <Box
                sx={{
                    background: `url(${images3})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: size === 'small' ? '16.71px' : '24.02px',
                    height: size === 'small' ? '16.71px' : '24.02px',
                    borderRadius: '22px',
                    border: `1px solid ${backgroundColor}`,
                    marginLeft: '-10px'
                }}
            />
            <Typography
                component='span'
                sx={{
                    fontSize: size === 'small' ? '12px' : '14.3717px',
                    height: size === 'small' ? '14px' : '16px',
                    fontWeight: 'bold',
                    paddingLeft: '4px'
                }}
            >
                {total}
            </Typography>
        </Box>
    );
};

export default BadgeImages;
