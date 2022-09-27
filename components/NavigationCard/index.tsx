import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';

interface INavigationCard {
    icon: string;
    title: string;
    onClick: any;
}

const NavigationCard: React.FC<INavigationCard> = ({ icon, title, onClick }) => {
    return (
        <ButtonBase onClick={onClick} sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={icon} alt={title} width='24px' height='24px' />
                <Typography component='span' fontSize='14px' fontWeight={700} marginLeft={1.5}>
                    {title}
                </Typography>
            </Box>
            <Box>
                <img src='/icons/arrow-right.svg' width='6px' height='11px' alt='show detail' />
            </Box>
        </ButtonBase>
    );
};

export default NavigationCard;
