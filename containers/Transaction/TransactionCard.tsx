import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

interface TransactionCardProps {
    isDot: any;
    title: string;
    subtitle: string;
    amount: any;
    isCoin?: boolean;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ isDot, title, subtitle, amount, isCoin = true }) => {
    return (
        <Grid container alignItems='center' borderBottom='1px solid rgba(40, 38, 38, 0.1)' padding='10px 0px'>
            <Grid item xs={3}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <Box sx={{ width: '10px', height: '10px', backgroundColor: isDot ? '#A54CE5' : 'transparent', borderRadius: '100%' }} />
                    <Box
                        sx={{
                            backgroundColor: isCoin ? '#FFF5CD' : '#C7E7FF',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5px'
                        }}
                    >
                        <img src={isCoin ? '/images/sm-coin.png' : '/images/sm-point.png'} alt='sm-img' />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '13px' }}>{title}</Typography>
                        {!isCoin && <Typography sx={{ textAlign: 'end', fontWeight: 'bold', fontSize: '13px' }}>Place 100th</Typography>}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <Typography sx={{ fontSize: '13px' }}>{subtitle}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'center' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: 'red' }}>{amount}</Typography>
                            <img src={isCoin ? '/images/xs-coin.png' : '/images/xs-point.png'} alt='coin' width={15} />
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default TransactionCard;
