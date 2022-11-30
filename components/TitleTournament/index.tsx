import { Box, Typography } from '@mui/material';
import React from 'react';

interface TitleTournamentProps {
    image?: string;
    title: string;
    subTitle: string;
}

const TitleTournament: React.FC<TitleTournamentProps> = ({ image, title, subTitle }) => {
    return (
        <>
            <Box sx={{ display: 'flex', gap: '5px' }}>
                {image && <img src={image} alt='tournament' width='31px' height='31px' />}
                <Typography variant='h5' lineHeight={1.6} sx={{ fontWeight: 'bold' }}>
                    {title}
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#949494' }}>{subTitle}</Typography>
            </Box>
        </>
    );
};

export default TitleTournament;
