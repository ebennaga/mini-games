import { Box, ButtonBase, Typography } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import React from 'react';

interface BalanceCardProps {
    title: string;
    value: number;
    onClick: any;
    buttonText: string;
    icon: any;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ title, value, onClick, buttonText, icon }) => {
    return (
        <Box sx={{ border: '1px solid #E6E6E6', borderRadius: '8px', padding: '13px 14px' }}>
            <Typography component='h3' sx={{ fontSize: '14px', fontWeight: 600 }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '15px 0' }}>
                <img src={icon} width={25} height={24} alt='coins' />
                <Typography component='p' sx={{ fontSize: '19px', marginLeft: 1, fontWeight: 700 }}>
                    {numberFormat(value)}
                </Typography>
            </Box>
            <ButtonBase onClick={onClick} sx={{ background: '#A54CE5', borderRadius: '12px', width: '100%', height: '48px' }}>
                <Typography component='span' sx={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>
                    {buttonText}
                </Typography>
            </ButtonBase>
        </Box>
    );
};

export default BalanceCard;
