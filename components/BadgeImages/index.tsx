import { Box, Typography } from '@mui/material';
import React from 'react';

interface BadgeImagesProps {
    images1: string;
    images2: string;
    images3: string;
    total: number;
    backgroundColor?: any;
}

const BadgeImages: React.FC<BadgeImagesProps> = ({ images1, images2, images3, total, backgroundColor = '#FFDD50' }) => {
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
                    width: '16.71px',
                    height: '16.71px',
                    borderRadius: '22px',
                    border: `1px solid ${backgroundColor}`
                }}
            />
            <Box
                sx={{
                    background: `url(${images2})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '16.71px',
                    height: '16.71px',
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
                    width: '16.71px',
                    height: '16.71px',
                    borderRadius: '22px',
                    border: `1px solid ${backgroundColor}`,
                    marginLeft: '-10px'
                }}
            />
            <Typography component='span' sx={{ fontSize: '12px', height: '14px', fontWeight: 'bold', paddingLeft: '4px' }}>
                {total}
            </Typography>
        </Box>
    );
};

export default BadgeImages;
