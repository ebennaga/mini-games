/* eslint-disable no-param-reassign */
import { ImageListItem, Box, Typography } from '@mui/material';
import React from 'react';

interface ImageListItemComingSoonProps {
    image: string;
    name: string;
}

const ImageListItemComingSoon: React.FC<ImageListItemComingSoonProps> = ({ image, name }) => {
    return (
        <ImageListItem sx={{ cursor: 'pointer' }}>
            <Box>
                <Box sx={{ backgroundColor: '#949494', padding: '25px', borderRadius: '14px', position: 'relative' }}>
                    <img
                        src={image}
                        alt={name}
                        style={{ width: '100%' }}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = '/images/img_error.svg';
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            position: 'absolute',
                            top: '12px',
                            right: '8px',
                            background: '#1F97E8',
                            color: '#fff',
                            borderRadius: '10px',
                            padding: '4px 8px'
                        }}
                    >
                        <img src='/images/point-shops.png' alt='point-shop' loading='lazy' />
                        <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>Coming Soon</Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '16px', fontWeight: '700', mt: 1 }}>{name}</Typography>
                </Box>
            </Box>
        </ImageListItem>
    );
};

export default ImageListItemComingSoon;
