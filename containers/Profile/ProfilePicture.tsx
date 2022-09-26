import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

interface ProfilePictureProps {
    image: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({ image }) => {
    return (
        <Box sx={{ position: 'relative', marginTop: '24px' }}>
            <CircularProgress
                variant='determinate'
                value={70}
                sx={{
                    transform: 'rotate(115deg) !important',
                    height: '103px !important',
                    width: '103px !important',
                    color: '#FFD833'
                }}
            />
            <Box
                sx={{
                    background: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '93px',
                    width: '93px',
                    position: 'absolute',
                    top: 5,
                    left: 5
                }}
            />
            <Box sx={{ position: 'absolute', bottom: -4, left: '18px' }}>
                <img src='/icons/yellow-star.png' width={25} height={25} alt='yellow' />
                <Typography component='span' sx={{ fontSize: '12px', fontWeight: 'bold', position: 'absolute', left: 9, bottom: 8 }}>
                    2
                </Typography>
            </Box>
        </Box>
    );
};

export default ProfilePicture;
