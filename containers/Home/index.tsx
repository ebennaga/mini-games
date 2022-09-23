import { Box, Typography } from '@mui/material';
import React from 'react';

const HomeContainer = () => {
    return (
        <>
            <Box>
                <img src='/icons/logo.svg' width='75px' height='39px' alt='prize play' />
                <Box>
                    <Box sx={{ background: '#FFF5CD', borderRadius: '27px', width: '96px', height: '30px', position: 'relative' }}>
                        <Box sx={{ position: 'absolute', top: '-7px' }}>
                            <img src='/icons/plus-point.png' width='16px' height='16px' alt='plus point' />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src='/icons/point.png' width='21px' height='20.02px' alt='point icon' />
                            <Typography
                                variant='subtitle1'
                                component='span'
                                sx={{ fontWeight: 'bold', fontSize: '14px', color: '#373737' }}
                            >
                                102.300
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>input</Box>
        </>
    );
};

export default HomeContainer;
