import React from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
// import { ArrowCircleLeft } from '@mui/icons-material';
// import { useRouter } from 'next/router';
import HeaderBack from 'components/HeaderBack';

const RedeemHistoryContainer = () => {
    // const router = useRouter();
    const cards = [
        {
            id: 1,
            title: 'lorem ipsum dong amat',
            image: '/images/tablet.png',
            redeemDate: '12-10-22',
            price: 2000
        },
        {
            id: 2,
            title: 'lorem ipsum dong amat',
            image: '/images/tablet.png',
            redeemDate: '11-10-22',
            price: 3000
        },
        {
            id: 3,
            title: 'lorem ipsum dong amat',
            image: '/images/tablet.png',
            redeemDate: '13-10-22',
            price: 3000
        },
        {
            id: 4,
            title: 'lorem ipsum dong amat',
            image: '/images/tablet.png',
            redeemDate: '14-10-22',
            price: 1000
        }
    ];
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px 20px 0px'>
                <HeaderBack title='Redeem History' />
            </Box>
            <Box sx={{ mt: '20px', maxWidth: { xs: 370, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    indicatorColor='secondary'
                    textColor='inherit'
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons={false}
                    aria-label='scrollable prevent tabs example'
                >
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Semua'
                    />
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Diproses'
                    />
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Dikemas'
                    />
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Dikirim'
                    />
                    <Tab
                        disableRipple
                        sx={{
                            textTransform: 'none',
                            '&.Mui-selected': {
                                fontWeight: 'bold'
                            }
                        }}
                        label='Selesai'
                    />
                </Tabs>
            </Box>
            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} />
            {cards.map((item: any, idx: number) => {
                return (
                    <>
                        <Box
                            key={idx}
                            sx={{ display: 'flex', justifyContent: 'space-between', ml: '20px', mr: '21px', mt: '20px', gap: '15px' }}
                        >
                            <Box sx={{ width: '86px', height: '86px', background: '#F4F1FF', borderRadius: '4px' }}>
                                <img
                                    src={item.image || '/images/tablet.png'}
                                    height={60}
                                    width={60}
                                    style={{ marginTop: '12px', marginLeft: '13px', marginRight: '12px' }}
                                    alt='tablet-redeem'
                                />
                            </Box>
                            <Box sx={{ width: '100%' }}>
                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>{item.title}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', mt: '3px' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#949494' }}>Redeem Date</Typography>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#949494', ml: 1 }}>
                                        {item.redeemDate}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', mt: '3px' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#949494' }}>Courier:</Typography>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#949494', ml: 1 }}>Sicepat</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%',
                                        mt: '3px',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <img src='/images/new-point.png' height={21} width={21} alt='tablet-redeem' />
                                        <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#373737', ml: 1 }}>
                                            {item.price}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ ml: 10 }}>
                                        <Typography sx={{ color: '#A54CE5', fontWeight: 600, fontSize: '12px' }}>On Delivery</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ border: '1px solid rgba(40, 38, 38, 0.1)', ml: '20px', mr: '21px', mt: '20px' }} />
                    </>
                );
            })}
        </Box>
    );
};

export default RedeemHistoryContainer;
