import { Box } from '@mui/material';
import Header from 'components/Header';
import React from 'react';

const LeaderBoard = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    background: `url('/images/menaradingdong.png')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '291.51px',
                    width: '100%'
                }}
            >
                <Header isBack point={102003} profilePicture='/icons/dummy/profile.png' hrefBack='/' />
            </Box>
        </Box>
    );
};

export default LeaderBoard;
