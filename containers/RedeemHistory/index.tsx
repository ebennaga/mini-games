import React from 'react';
import { Box, Tabs, Tab, ButtonBase, Typography } from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';
import { useRouter } from 'next/router';

const RedeemHistoryContainer = () => {
    const router = useRouter();
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
            <Box sx={{ ml: '20px' }}>
                <ButtonBase
                    onClick={() => {
                        router.push('/shops');
                    }}
                    sx={{ mt: 5 }}
                >
                    <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                </ButtonBase>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: -10 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '24px', mt: 5 }}>Redeem History</Typography>
            </Box>

            <Box sx={{ mt: '20px', maxWidth: { xs: 370, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant='scrollable'
                    scrollButtons={false}
                    aria-label='scrollable prevent tabs example'
                >
                    <Tab label='Semua' />
                    <Tab label='Diproses' />
                    <Tab label='Dikemas' />
                    <Tab label='Dikirim' />
                    <Tab label='Selesai' />
                </Tabs>
            </Box>
            <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} />
            {cards.map((index: any) => {
                return (
                    <>
                        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', ml: '20px', mr: '21px', mt: '20px' }}>
                            <Box sx={{ width: '86px', height: '86px', background: '#F4F1FF', borderRadius: '4px' }}>
                                <img
                                    src={index.image || '/images/tablet.png'}
                                    height={60}
                                    width={60}
                                    style={{ marginTop: '12px', marginLeft: '13px', marginRight: '12px' }}
                                    alt='tablet-redeem'
                                />
                            </Box>
                            <Box sx={{ ml: 1.5, width: '100%' }}>
                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>{index.title}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', mt: '3px' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#949494' }}>Redeem Date</Typography>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#949494', ml: 1 }}>
                                        {index.redeemDate}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', mt: '3px' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#949494' }}>Courier:</Typography>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', color: '#949494', ml: 1 }}>Sicepat</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', width: '100%', mt: '3px' }}>
                                    <img src='/images/new-point.png' height={21} width={21} alt='tablet-redeem' />
                                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#373737', ml: 1 }}>
                                        {index.price}
                                    </Typography>
                                    <Box sx={{ ml: 10 }}>
                                        <Typography sx={{ color: '#A54CE5', fontWeight: 500 }}>On Delivery</Typography>
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
