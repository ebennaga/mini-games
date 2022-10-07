import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface PinpointProps {
    text: string;
}

const PinpointCard: React.FC<PinpointProps> = ({ text }) => {
    return (
        <Box
            sx={{
                background: '#F4F1FF',
                padding: '14px 20px',
                borderRadius: '10px',
                marginTop: '5px',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <LocationOnIcon sx={{ color: '#A54CE5' }} />
            <Typography component='p' paddingLeft='15px' fontSize='12px' fontWeight={600} lineHeight='12px' sx={{ color: '#949494' }}>
                {text}
            </Typography>
            <ButtonBase>
                <Typography component='p' paddingLeft='15px' fontSize='12px' fontWeight={600} sx={{ color: '#A54CE5' }}>
                    Change
                </Typography>
            </ButtonBase>
        </Box>
    );
};

export default PinpointCard;
