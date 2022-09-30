/* eslint-disable no-unused-vars */
import React from 'react';
import Header from 'components/Header';

import { Box, Typography, Stack, ButtonBase } from '@mui/material';
import { useRouter } from 'next/router';

const TopUp = () => {
    const router = useRouter();
    const cards = [
        {
            id: 1,
            price: 'Rp.10.000',
            poin: 100
        },
        {
            id: 2,
            price: 'Rp 40.000',
            poin: 200
        }
    ];
    const transaction = [
        {
            id: 3,
            title: 'Menara Dingdong',
            point: '+1000'
        },
        {
            id: 4,
            title: 'Join Tourney',
            point: '+3000'
        },
        {
            id: 5,
            title: '50 Coins Up',
            point: '+4000'
        }
    ];
    return (
        <Box sx={{ color: '#373737', width: '100%' }}>
            <Box
                padding='25px'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    zIndex: 9999,
                    backgroundColor: 'white',
                    width: '415px',
                    top: 0
                }}
            >
                <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 700, lineHeight: '33px' }}>Top Up Coins</Typography>
            </Box>
            <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>Exchange Rate</Typography>
                <Box
                    sx={{
                        background: '#FFF5CD',

                        borderRadius: '10px',
                        width: '126px',
                        height: '35px',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box>
                        <img
                            src='/images/poin.png'
                            width={22}
                            height={22}
                            alt='maskot-logo'
                            style={{ marginLeft: '11px', marginTop: '6px' }}
                        />
                    </Box>
                    <Box sx={{ mt: '7px' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>1 =</Typography>
                    </Box>
                    <Box sx={{ mt: '7px', mr: 2 }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: 700 }}>RP 100</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                <Stack direction='row' justifyContent='space-between' alignItems='center' spacing={{ xs: 1.5, sm: 15 }} sx={{ mt: '10%' }}>
                    {cards.map((index: any) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    width: '182px',
                                    height: '115px',
                                    borderRadius: '8px',
                                    opacity: 0.85,
                                    background:
                                        'linear-gradient(331deg, rgba(255,234,152,1) 0%, rgba(250,226,134,1) 50%, rgba(255,205,64,1) 100%)'
                                }}
                            >
                                <Box sx={{ mt: 2, ml: '65%' }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '10px', color: '#373737' }}>
                                        {index.price}
                                    </Typography>
                                </Box>
                                <Box sx={{ mt: 4 }}>
                                    <img src='/images/poin.png' width={22} height={22} alt='maskot-logo' style={{ marginLeft: '11px' }} />
                                </Box>
                                <Box sx={{ mt: -2, ml: 5 }}>
                                    <Typography sx={{ fontSize: '32px', fontWeight: 'bold', lineHeight: '10px', color: '#373737' }}>
                                        {index.poin}
                                    </Typography>
                                </Box>
                                <Box sx={{ ml: 2, mt: 1.5, alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 'bold', lineHeight: '10px', color: '#949494' }}>
                                        lorem ipsum
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
                </Stack>
            </Box>
            <Box sx={{ mt: '60px', ml: '20px', display: 'flex', justifyContent: 'flex-start', mr: '18px', height: '33px' }}>
                <Box sx={{ mt: 2 }}>
                    <img src='/images/subtract.png' width={22} height={22} alt='subtract' />
                </Box>
                <Box sx={{ mt: 2, ml: 1, width: '339px' }}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 600, lineHeight: '33px', color: '#949494' }}>
                        Lorem ipsum dolor sit amet, sed do.
                    </Typography>
                    <Typography sx={{ mt: -4, ml: 28, fontSize: '12px', fontWeight: 600, lineHeight: '33px', color: '#FF4567' }}>
                        click here
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ mt: '40px', ml: '20px', display: 'flex', justifyContent: 'space-between', mr: '18px', height: '33px' }}>
                <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px' }}>Transaction</Typography>
            </Box>
            <Box
                sx={{
                    mt: '20px',
                    ml: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    mr: '18px',
                    height: '33px',
                    direction: 'row'
                }}
            >
                <Box sx={{ background: '#FFF5CD', borderRadius: '6px', width: '48px', height: '48px', ml: 2 }}>
                    <img src='/images/poin.png' width={30} height={30} alt='maskot-logo' style={{ marginLeft: '20%', marginTop: '15%' }} />
                </Box>
                <Box sx={{ ml: -8 }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '33px' }}>Menara Dingdong</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '33px', mt: -1 }}>Transaction 10-04</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px', mt: 3, color: '#56CF54', mr: 0 }}>
                        +1000
                        <img src='/images/poin.png' width={16} height={16} alt='poin' style={{ marginLeft: 2 }} />
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ ml: 3, border: '1px solid rgba(40, 38, 38, 0.1)', width: '373px', mt: 4 }} />
            <Box
                sx={{
                    mt: '20px',
                    ml: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    mr: '18px',
                    height: '33px'
                }}
            >
                <Box sx={{ background: '#FFF5CD', borderRadius: '6px', width: '48px', height: '48px', ml: 2 }}>
                    <img src='/images/poin.png' width={30} height={30} alt='maskot-logo' style={{ marginLeft: '20%', marginTop: '15%' }} />
                </Box>
                <Box sx={{ ml: -8 }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '33px' }}>Menara Dingdong</Typography>
                    <Typography sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '33px', mt: -1 }}>Transaction 10-04</Typography>
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '18px', fontWeight: 700, lineHeight: '33px', mt: 3, color: '#FF4566', mr: 0 }}>
                        -2000
                        <img src='/images/poin.png' width={16} height={16} alt='poin' style={{ marginLeft: 2 }} />
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ ml: 3, border: '1px solid rgba(40, 38, 38, 0.1)', width: '373px', mt: 4 }} />.
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                <ButtonBase
                    onClick={() => {
                        router.push('/transaction');
                    }}
                    sx={{ color: '#A54CE5' }}
                >
                    Show all
                </ButtonBase>
            </Box>
            <Box
                sx={{
                    mt: '20px',
                    ml: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    mr: '18px',
                    height: '33px'
                }}
            >
                <Box sx={{ borderRadius: '6px', width: '48px', height: '48px', ml: 2 }}>
                    <img src='/images/star.png' width={30} height={30} alt='maskot-logo' style={{ marginLeft: '20%', marginTop: '5%' }} />
                </Box>
                <Box sx={{ ml: -10 }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '33px' }}>How to get coins and prizes</Typography>
                </Box>
                <Box sx={{ mt: 1, mr: 0 }}>
                    <img src='/images/tanda_panah.png' width={10} height={10} alt='poin' style={{ marginLeft: 0 }} />
                </Box>
            </Box>
            <Box
                sx={{
                    mt: '20px',
                    ml: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    mr: '18px',
                    height: '33px'
                }}
            >
                <Box sx={{ borderRadius: '6px', width: '48px', height: '48px', ml: 2 }}>
                    <img src='/images/ask.png' width={30} height={30} alt='maskot-logo' style={{ marginLeft: '20%', marginTop: '5%' }} />
                </Box>
                <Box sx={{ ml: -19 }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, lineHeight: '33px' }}>Help and Support</Typography>
                </Box>
                <Box sx={{ marginTop: '2%' }}>
                    <img src='/images/tanda_panah.png' width={10} height={10} alt='poin' style={{ marginLeft: 0 }} />
                </Box>
            </Box>
        </Box>
    );
};

export default TopUp;
