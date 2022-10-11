import { Box, ButtonBase, Typography } from '@mui/material';
import React from 'react';

interface INavigationCard {
    icon: string;
    title: string;
    onClick: any;
    isBorder?: any;
    body?: string;
}

const NavigationCard: React.FC<INavigationCard> = ({ icon, title, onClick, isBorder = false, body = '' }) => {
    return (
        <ButtonBase
            disableRipple
            onClick={onClick}
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: isBorder ? '0.5px solid #F4F1FF' : 'none',
                paddingY: isBorder ? '20px' : 'none'
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={icon} alt={title} width='24px' height='24px' />
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'start', marginLeft: 1.5 }}>
                    <Typography component='span' fontSize='14px' fontWeight={700}>
                        {title}
                    </Typography>
                    <Typography sx={{ color: '#949494' }} component='span' fontSize='12px' fontWeight={400}>
                        {body}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <img src='/icons/arrow-right.svg' width='6px' height='11px' alt='show detail' />
            </Box>
        </ButtonBase>
    );
};

export default NavigationCard;
