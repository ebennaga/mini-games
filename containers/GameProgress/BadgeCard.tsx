import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';

interface BadgeCardProps {
    title: string;
    scores: number;
    isClaimed: boolean;
    onClick: any;
}

// eslint-disable-next-line no-unused-vars
const BadgeCard: React.FC<BadgeCardProps> = ({ title, scores, isClaimed, onClick }) => {
    return (
        <Box className='badgeCard' marginRight='20px'>
            <Box
                sx={{
                    background: '#F4F1FF',
                    borderRadius: '8px',
                    padding: '14px 13px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <img src='/icons/badge.png' width='45.2px' height='auto' alt='badge' loading='lazy' />
                <Typography component='h3' fontSize='14px' fontWeight={700} mr='8px' mt='18px'>
                    {title}
                </Typography>
                <Typography component='span' fontSize='12px' fontWeight={400} ml='6.8px' mt='7px'>
                    Get {scores} Scores
                </Typography>
                <ButtonBase
                    disabled={isClaimed}
                    onClick={onClick}
                    sx={{
                        background: '#A54CE5',
                        width: '100%',
                        padding: '5px',
                        color: '#fff',
                        borderRadius: '8px',
                        mt: '27px',
                        opacity: isClaimed ? 0.5 : 1
                    }}
                >
                    <Typography component='span' fontSize='14px' fontWeight={700}>
                        {isClaimed ? 'Claimed' : 'Claim'}
                    </Typography>
                </ButtonBase>
            </Box>
        </Box>
    );
};

export default BadgeCard;
