import { Typography, Box } from '@mui/material';
import CircularStatic from 'components/CircularProgress';
import React from 'react';
import { useSelector } from 'react-redux';

const LoadingCasual = () => {
    const userState = useSelector((state: any) => state.webpage?.user?.user);

    return (
        <Box sx={{ textAlign: 'center', padding: '0px 30px 40px' }}>
            <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>{userState?.titleGame}</Typography>
            <Box
                sx={{
                    textAlign: 'center',
                    mx: 'auto',
                    my: '32px',
                    background: `url(${userState?.imageGame})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    width: '105px',
                    height: '105px',
                    borderRadius: '8px'
                }}
            />
            <Typography sx={{ fontWeight: 400, fontSize: '14px', color: '#949494', mb: '100px' }}>{userState?.descriptionGame}</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
                The Game <br /> Starts in
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ mt: '10px' }}>
                    <CircularStatic />
                </Box>
            </Box>
            <Typography sx={{ fontSize: '10px', fontWeight: 500, color: '#949494', mt: '210px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum.
            </Typography>
        </Box>
    );
};

export default LoadingCasual;
