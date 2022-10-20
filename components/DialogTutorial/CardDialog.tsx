import { IconButton, Box, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface ICardDialog {
    title: string;
    info: string;
    onClose: any;
    isTab?: boolean;
}

const CardDialog: React.FC<ICardDialog> = ({ title, info, onClose, isTab }) => {
    return (
        <Box
            sx={{
                width: '-webkit-fill-available',
                background: '#2D3037',
                color: '#fff',
                padding: '17px 26px',
                borderRadius: '16px',
                position: 'relative'
            }}
        >
            {isTab ? (
                <Box sx={{ position: 'absolute', top: -47, left: 0, zIndex: 99999 }}>
                    <img src='/icons/mission.svg' width='70px' height='65px' alt='Welcome Prize Play' />
                </Box>
            ) : (
                <Box sx={{ position: 'absolute', bottom: -27, right: 0, zIndex: 99999, transform: 'scaleX(-1)' }}>
                    <img src='/icons/mission.svg' width='70px' height='65px' alt='Welcome Prize Play' />
                </Box>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography component='h2' fontSize='16px' fontWeight={700}>
                    {title}
                </Typography>
                <IconButton onClick={onClose} sx={{ padding: 0 }}>
                    <CloseIcon sx={{ color: '#fff' }} />
                </IconButton>
            </Box>
            <Typography component='p' fontSize='14px' fontWeight={400}>
                {info}
            </Typography>
        </Box>
    );
};

export default CardDialog;
