import { Box, Typography, ButtonBase } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import { SmartDisplay } from '@mui/icons-material';
import React from 'react';
import { useRouter } from 'next/router';

const ResultContainer = () => {
    const router = useRouter();
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
                <HeaderBack handleBack={() => router.push(`/games/${router.query.id}`)} />
            </Box>
            <Box sx={{ padding: '0px 20px', textAlign: 'center', m: '0px 0px 300px' }}>
                <Box sx={{ textAlign: 'center', margin: '20px' }}>
                    <img src='/images/loading-img-casual.png' alt='loading-casual' />
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Block Stack</Typography>
                <Box sx={{ mt: '160px' }}>
                    <Typography sx={{ fontWeight: 300, fontSize: '14px', color: '#949494' }}>Total Scores</Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: '44px' }}>20</Typography>
                </Box>
            </Box>
            <Box sx={{ padding: '20px', position: 'sticky', bottom: '20px' }}>
                <ButtonBase
                    onClick={() => {
                        router.push('/casual/loading');
                        // router.push('/casual/ads');
                    }}
                    sx={{
                        textTransform: 'none',
                        position: 'relative',
                        borderRadius: '15px',
                        fontWeight: 'bold',
                        color: 'white',
                        backgroundColor: '#A54CE5',
                        width: '100%',
                        height: '60px',
                        '&:hover': {
                            backgroundColor: '#A54CE5',
                            color: 'white',
                            fontWeight: 'bold'
                        }
                    }}
                >
                    Watch Ads{' '}
                    <span style={{ margin: '0px 5px' }}>
                        <SmartDisplay />
                    </span>{' '}
                    to Play Again
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default ResultContainer;
