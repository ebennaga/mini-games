import { Box, Typography } from '@mui/material';
import numberFormat from 'helper/numberFormat';
import React from 'react';

interface StatsCardProps {
    title: string;
    icon: any;
    value: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, icon, value }) => {
    return (
        <Box
            sx={{
                border: '1px solid #E6E6E6',
                borderRadius: '8px',
                padding: '13px 14px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Typography component='h3' sx={{ fontSize: '14px', fontWeight: 600 }}>
                {title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', margin: '16px 0 11px 0' }}>
                <img src={icon} width={24} height={24} alt='coins' />
                <Typography component='p' sx={{ fontSize: '19px', marginLeft: 1, fontWeight: 700 }}>
                    {numberFormat(value)}
                </Typography>
            </Box>
        </Box>
    );
};

export default StatsCard;
