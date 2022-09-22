import React from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Mission = () => {
    return (
        <Box
            sx={{
                background: '#2E2E2E',
                color: '#fff',
                height: '67px',
                borderRadius: '15px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingRight: '25px',
                marginTop: '48px'
            }}
        >
            <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: '-14px' }}>
                    <img src='/icons/mission.png' alt='mission' width='81.8px' height='71px' />
                </Box>
                <Box sx={{ paddingLeft: '95px' }}>
                    <Typography variant='subtitle1' component='h2' fontWeight='bold'>
                        Complete Your Mission
                    </Typography>
                    <Typography variant='subtitle2' component='h2'>
                        8 left mission must be completed
                    </Typography>
                </Box>
            </Box>
            <ButtonBase sx={{ marginLeft: '10px', display: 'flex', justifyContent: 'end' }}>
                <ArrowForwardIcon />
            </ButtonBase>
            <Box
                sx={{
                    borderRadius: '50px',
                    width: '11px',
                    height: '11px',
                    background: '#FF4567',
                    position: 'absolute',
                    right: 0,
                    top: 0
                }}
            />
        </Box>
    );
};

export default Mission;
