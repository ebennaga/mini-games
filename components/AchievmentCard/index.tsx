import { Box, Typography } from '@mui/material';
import React from 'react';

interface AchievmentCardProps {
    xp: number;
    isComplete?: boolean;
    scores: number;
    coints: number;
    isClaimed?: boolean;
}

const AchievmentCard: React.FC<AchievmentCardProps> = ({ xp, isComplete, scores, coints, isClaimed }) => {
    return (
        <Box
            sx={{
                background: '#F4F1FF',
                borderRadius: '8px',
                padding: '16px 19px',
                mt: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: isClaimed ? 0.5 : 1
            }}
        >
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography component='h3' fontSize='14px' fontWeight={700} mr='8px'>
                        +{xp}
                    </Typography>
                    {(isComplete || isClaimed) && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <img src='/icons/complete.png' width='16.9px' height='auto' alt='complete' loading='lazy' />
                            <Typography component='span' fontSize='12px' fontWeight={400} ml='6.8px'>
                                Complete
                            </Typography>
                        </Box>
                    )}
                </Box>
                <Box mt='18px'>
                    <Typography component='h4' fontSize='14px' fontWeight={700}>
                        Get {scores} Scores
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#FFF5CD',
                    borderRadius: '10px',
                    padding: '2px 6px',
                    width: 'fit-content',
                    height: 'fit-content'
                }}
            >
                <img src='/images/coin.png' width='22.88px' height='auto' alt='coins' loading='lazy' />
                <Typography component='span' fontSize='14px' fontWeight={700} ml='8.1px'>
                    {coints}
                </Typography>
            </Box>
        </Box>
    );
};

export default AchievmentCard;
