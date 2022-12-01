import { Box, Skeleton } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import TournamentSliderSkeleton from 'components/TournamentSlider/TournamentSliderSkeleton';
import React from 'react';
import { useSelector } from 'react-redux';

const TournamentsSkeleton = () => {
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    return (
        <Box width='-webkit-fill-available'>
            <HeaderBack title={`${userState?.page === 'casual' ? 'Casual Tournaments' : 'Grand Tournaments'}`} isTournament />
            <Skeleton sx={{ height: '30px', width: '200px', mt: 3 }} />
            <TournamentSliderSkeleton />
            {[...Array(2)].map((_item: any, index: number) => {
                return (
                    <Box key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Skeleton sx={{ height: '100px', width: '90px' }} />
                            <Skeleton sx={{ height: '40px', width: '100px', marginLeft: '20px' }} />
                        </Box>
                        <TournamentSliderSkeleton />
                    </Box>
                );
            })}
        </Box>
    );
};

export default TournamentsSkeleton;
