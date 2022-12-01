import { Box, Typography } from '@mui/material';
import React from 'react';

interface TypeTournamentCardProps {
    type: string;
    isTransparent?: boolean;
}

const TypeTournamentCard: React.FC<TypeTournamentCardProps> = ({ type, isTransparent }) => {
    return (
        <>
            {type === 'accumulation' && (
                <Box
                    sx={{
                        background: isTransparent ? 'rgba(0, 0, 0, 0)' : '#fff',
                        borderRadius: '10.3px',
                        width: 'fit-content',
                        display: 'flex',
                        alignItems: 'center',
                        padding: isTransparent ? '5px 0 0 0' : '3px 7px'
                    }}
                >
                    <img
                        src={isTransparent ? '/icons/accumulation-transparent.svg' : '/icons/accumulation.svg'}
                        width='17px'
                        height='17px'
                        alt='accumulation'
                    />
                    <Typography
                        component='span'
                        fontSize='12px'
                        fontWeight={700}
                        lineHeight={0}
                        pl='5px'
                        sx={{ color: isTransparent ? '#fff' : '#373737' }}
                    >
                        Accumulation
                    </Typography>
                </Box>
            )}
            {(type === 'HIGHSCORE' || type === 'high score' || type === 'highscore') && (
                <Box
                    sx={{
                        background: isTransparent ? 'rgba(0, 0, 0, 0)' : '#fff',
                        borderRadius: '10.3px',
                        width: 'fit-content',
                        display: 'flex',
                        alignItems: 'center',
                        padding: isTransparent ? '5px 0 0 0' : '3px 7px'
                    }}
                >
                    <img
                        src={isTransparent ? '/icons/high-score-transparent.svg' : '/icons/high-score.svg'}
                        width='17px'
                        height='17px'
                        alt='accumulation'
                    />
                    <Typography
                        component='span'
                        fontSize='12px'
                        fontWeight={700}
                        lineHeight={0}
                        pl='5px'
                        sx={{ color: isTransparent ? '#fff' : '#373737' }}
                    >
                        High Score
                    </Typography>
                </Box>
            )}
        </>
    );
};

export default TypeTournamentCard;
