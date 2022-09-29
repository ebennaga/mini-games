import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import { SmartDisplay } from '@mui/icons-material';
import React from 'react';
import Button from 'components/Button/Index';

const ResultContainer = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    mb: 2,
                    position: 'sticky',
                    top: 10,
                    zIndex: 999,
                    padding: '0px 20px'
                }}
            >
                <HeaderBack />
            </Box>
            <Box sx={{ padding: '0px 20px', textAlign: 'center' }}>
                <Box sx={{ textAlign: 'center', margin: '20px' }}>
                    <img src='/images/loading-img-casual.png' alt='loading-casual' />
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Block Stack</Typography>
                <Box sx={{ mt: '160px' }}>
                    <Typography sx={{ fontWeight: 300, fontSize: '14px', color: '#949494' }}>Total Scores</Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: '44px' }}>20</Typography>
                </Box>
                <Box sx={{ m: '300px 0px 30px' }}>
                    <Box display='flex' alignItems='center' justifyContent='center' gap='5px' mb='10px'>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Watch Ads</Typography>
                        <SmartDisplay sx={{ color: '#A54CE5' }} />
                        <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>for Playing Again</Typography>
                    </Box>
                    <Button title='Play Again' backgoundColor='#A54CE5' color='white' />
                </Box>
            </Box>
        </Box>
    );
};

export default ResultContainer;
