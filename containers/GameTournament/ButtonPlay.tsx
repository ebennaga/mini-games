import { ButtonBase, Typography, Box, CircularProgress } from '@mui/material';
import React from 'react';

interface IButtonPlay {
    onClick: any;
    title: string;
    points: number;
    isLoading?: boolean;
}

const ButtonPlay: React.FC<IButtonPlay> = ({ onClick, title, points, isLoading }) => {
    return (
        <ButtonBase
            onClick={onClick}
            disabled={isLoading}
            sx={{
                marginTop: '8px',
                width: '100%',
                padding: '18px 23.5px',
                borderRadius: '15px',
                display: 'flex',
                justifyContent: isLoading ? 'center' : 'space-between',
                background: isLoading ? '#F9F0FF' : '#A54CE5',
                color: '#fff'
            }}
        >
            {isLoading ? (
                <CircularProgress sx={{ color: '#A54CE5' }} />
            ) : (
                <>
                    {' '}
                    <Typography fontSize='14px' fontWeight={700} component='span'>
                        {title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src='/icons/coins.svg' width='25.39px' height='24px' alt='coins' loading='lazy' />
                        <Typography component='span' fontSize='16px' fontWeight={700} marginLeft='7px'>
                            {points}
                        </Typography>
                    </Box>
                </>
            )}
        </ButtonBase>
    );
};

export default ButtonPlay;
