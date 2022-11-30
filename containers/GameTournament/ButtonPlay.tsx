/* eslint-disable no-nested-ternary */
import { ButtonBase, Typography, Box, CircularProgress } from '@mui/material';
import React from 'react';

interface IButtonPlay {
    onClick: any;
    title: string;
    points: number;
    isLoading?: boolean;
    isComingSoon?: boolean;
    typeTournament: 'casual' | 'grand';
}

const ButtonPlay: React.FC<IButtonPlay> = ({ onClick, title, points, isLoading, isComingSoon, typeTournament }) => {
    return (
        <ButtonBase
            onClick={onClick}
            disabled={isLoading || isComingSoon}
            sx={{
                marginTop: '8px',
                width: '100%',
                padding: '18px 23.5px',
                borderRadius: '15px',
                display: 'flex',
                justifyContent: isLoading || isComingSoon ? 'center' : typeTournament === 'casual' ? 'start' : 'space-between',
                alignItems: 'center',
                background: isLoading ? '#F9F0FF' : isComingSoon ? '#949494' : '#A54CE5',
                color: '#fff'
            }}
        >
            {isLoading ? (
                <CircularProgress sx={{ color: '#A54CE5' }} />
            ) : (
                <>
                    {typeTournament === 'casual' && (
                        <img src='/icons/youtube.png' alt='ads' width='20px' height='18px' style={{ marginRight: '10px' }} />
                    )}
                    <Typography fontSize='14px' fontWeight={700} component='span' lineHeight={1}>
                        {title}
                    </Typography>
                    {typeTournament === 'grand' && (
                        <Box sx={{ display: isComingSoon ? 'none' : 'flex', alignItems: 'center' }}>
                            <img src='/icons/coins.svg' width='25.39px' height='24px' alt='coins' loading='lazy' />
                            <Typography component='span' fontSize='16px' fontWeight={700} marginLeft='7px'>
                                {points}
                            </Typography>
                        </Box>
                    )}
                </>
            )}
        </ButtonBase>
    );
};

export default ButtonPlay;
