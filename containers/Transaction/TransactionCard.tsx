/* eslint-disable no-nested-ternary */
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import dateToStringFormat from 'helper/dateToStringFormat';

interface TransactionCardProps {
    title: string;
    subtitle: string;
    amount: any;
    isCoin?: boolean;
    created?: any;
    isToday?: any;
    isYesterday?: any;
    status?: any;
    type?: any;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
    title,
    subtitle,
    amount,
    isCoin = false,
    created,
    isYesterday = true,
    isToday = true,
    status,
    type
}) => {
    const date = new Date(created);
    const today = new Date();

    return (
        <Box>
            {!isToday && !isYesterday && (
                <Typography sx={{ fontWeight: 'bold', mt: '15px' }}>{created ? dateToStringFormat(created) : 'Unknown'}</Typography>
            )}
            <Grid container alignItems='center' borderBottom='1px solid rgba(40, 38, 38, 0.1)' padding='10px 0px'>
                <Grid item xs={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <Box
                            sx={{
                                width: '10px',
                                height: '10px',
                                backgroundColor: String(today).slice(8, 11) === String(date).slice(8, 11) ? '#A54CE5' : 'transparent',
                                borderRadius: '100%'
                            }}
                        />
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
                            {isCoin && (
                                <Box
                                    sx={{
                                        borderRadius: '15px',
                                        padding: '4px',
                                        color: 'white',
                                        fontSize: '11px',
                                        backgroundColor: status === 'pending-payment' ? '#FFD833' : status === 'done' ? '#56CF54' : 'red'
                                    }}
                                >{`${status === 'pending-payment' ? 'Pending' : status === 'done' ? 'Success' : 'Failed'}`}</Box>
                            )}
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
                                <Typography sx={{ fontSize: '13px', fontWeight: 'bold', color: type === 'MINUS' ? 'red' : 'green' }}>
                                    {`${type === 'MINUS' ? '-' : '+'}`}
                                    {amount}
                                </Typography>
                                <img src={isCoin ? '/images/xs-coin.png' : '/images/xs-point.png'} alt='coin' width={15} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TransactionCard;
