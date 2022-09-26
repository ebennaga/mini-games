import React from 'react';
import { Grid, ButtonBase, Typography, Box } from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';

import useStyles from './useStyle';

const History = () => {
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const cardOnGoing = [
        {
            id: 11,
            image: '/images/dingdong.png'
        },
        {
            id: 12,
            image: '/images/dingdong.png'
        }
    ];
    const cards = [
        {
            id: 1,
            title: 'Today',
            image: '/images/dingdong.png',
            price: '1000'
        },
        {
            id: 2,
            title: '23 Agustus 2022',
            image: '/images/dingdong.png',
            price: '5000'
        },
        {
            id: 3,
            title: '21 September 2022',
            image: '/images/dingdong.png',
            price: '3000'
        },
        {
            id: 4,
            title: '15 September 2022',
            image: '/images/dingdong.png',
            price: '5000'
        }
    ];
    return (
        <Grid container spacing={2} sx={{ marginLeft: '20px' }} direction='column' alignItems='space-between'>
            <Grid item xs={4}>
                <Box>
                    <ButtonBase sx={{ mt: 5 }}>
                        <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                    </ButtonBase>
                </Box>

                <Box sx={{ mt: -10, ml: 20 }}>
                    <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px', mt: 6 }}>History</Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px', mt: 2 }}>On Going</Typography>
            </Grid>

            {cardOnGoing.map((index: any) => {
                return (
                    <>
                        <Grid item xs={1}>
                            <Box>
                                <img src='/images/ellipse.png' width={10} height={18} alt='detail-item' style={{ marginTop: '8%' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={4} key={index.id}>
                            <Box
                                sx={{
                                    mt: -5,
                                    width: '88px',
                                    height: '78px',
                                    background: '#D9D9D9',
                                    borderRadius: '8px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    ml: 2
                                }}
                            >
                                <img src='/images/dingdong.png' width={88} height={78} alt='maskot-logo' style={{ borderRadius: '12px' }} />
                                <Box sx={{ ml: 2 }}>
                                    <Box>
                                        <Typography
                                            variant='h6'
                                            fontWeight='bold'
                                            component='h2'
                                            sx={{ fontSize: '14px', fontWeight: 700 }}
                                        >
                                            Tournament
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography
                                            variant='h6'
                                            fontWeight='bold'
                                            component='h2'
                                            sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '14px' }}
                                        >
                                            Games 10.03
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ ml: 6, width: '100%', mt: 2 }}>
                                    <ButtonBase sx={{ background: '#A54CE5', borderRadius: '12px', width: '94px', height: '40px' }}>
                                        <Typography
                                            variant='h6'
                                            fontWeight='bold'
                                            component='h2'
                                            sx={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}
                                        >
                                            Go
                                        </Typography>
                                    </ButtonBase>
                                </Box>
                            </Box>
                            <Grid item xs={1}>
                                <Box sx={{ border: '1px solid rgba(40, 38, 38, 0.1)', mt: 2, width: '343px', ml: 1, height: '0px' }} />
                            </Grid>
                        </Grid>
                    </>
                );
            })}
            {cards.map((index: any) => {
                return (
                    <>
                        <Grid item xs={4} key={index.id}>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '19.5px', mt: 2 }}>{index.title}</Typography>
                        </Grid>
                        <Grid item xs={4} key={index.id}>
                            <Box
                                sx={{
                                    mt: 2,
                                    width: '88px',
                                    height: '78px',
                                    background: '#D9D9D9',
                                    borderRadius: '22px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    ml: 2
                                }}
                            >
                                <img
                                    className={classes.pointImage}
                                    src='/images/dingdong.png'
                                    width={88}
                                    height={78}
                                    alt='maskot-logo'
                                    style={{ borderRadius: '12px' }}
                                />
                                <Box sx={{ ml: 2 }}>
                                    <Box>
                                        <Typography
                                            variant='h6'
                                            fontWeight='bold'
                                            component='h2'
                                            sx={{ fontSize: '14px', fontWeight: 700 }}
                                        >
                                            Tournament
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography
                                            variant='h6'
                                            fontWeight='bold'
                                            component='h2'
                                            sx={{ fontSize: '14px', fontWeight: 300, lineHeight: '14px' }}
                                        >
                                            Games 10.03
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ ml: 7, width: '100%' }}>
                                    <Box>
                                        <Typography
                                            variant='h6'
                                            fontWeight='bold'
                                            component='h2'
                                            sx={{ fontSize: '14px', fontWeight: 700 }}
                                        >
                                            Place100th
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mt: 2, ml: '25px' }}>
                                        <Typography
                                            variant='h6'
                                            fontWeight='bold'
                                            component='h2'
                                            sx={{ fontSize: '14px', fontWeight: 700, color: '#1BA95D' }}
                                        >
                                            {index.price} <img src='/images/star_icon.png' width={13} height={13} alt='star-icon' />
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Box sx={{ border: '1px solid rgba(40, 38, 38, 0.1)', mt: 2, width: '353px', ml: 2 }} />
                    </>
                );
            })}
        </Grid>
    );
};

export default History;
