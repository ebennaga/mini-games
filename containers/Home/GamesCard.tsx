import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';

const GamesCard = () => {
    return (
        <ButtonBase sx={{ display: 'flex', flexDirection: 'column', marginTop: '27px' }}>
            <Box
                sx={{
                    background: `url(${'/icons/dummy/main-ikan.png'})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '120px',
                    height: '120px',
                    borderRadius: '22px'
                }}
            />
            <Typography variant='subtitle1' component='p' marginTop='14px' marginBottom='7px' sx={{ fontWeight: 'bold' }}>
                Main Ikan
            </Typography>
            <Box sx={{ display: 'flex' }}>
                <Box
                    sx={{
                        background: `url(${'/icons/dummy/main-ikan.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '16.71px',
                        height: '16.71px',
                        borderRadius: '22px',
                        border: '1.5px solid #fff'
                    }}
                />
                <Box
                    sx={{
                        background: `url(${'/icons/dummy/user-1.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '16.71px',
                        height: '16.71px',
                        borderRadius: '22px',
                        border: '1.5px solid #fff',
                        marginLeft: '-13px'
                    }}
                />
                <Box
                    sx={{
                        background: `url(${'/icons/dummy/user-2.png'})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        width: '16.71px',
                        height: '16.71px',
                        borderRadius: '22px',
                        border: '1.5px solid #fff',
                        marginLeft: '-13px'
                    }}
                />
                <Typography variant='subtitle2' fontWeight={600} component='span' paddingLeft='8px'>
                    46.000
                </Typography>
            </Box>
        </ButtonBase>
    );
};

export default GamesCard;
