import { Box, Divider, Typography, Grid, ButtonBase, ImageList, ImageListItem } from '@mui/material';
import { WatchLater } from '@mui/icons-material';
import Button from 'components/Button/Index';
import Header from 'components/Header';
import React from 'react';
import ShopsSlider from 'components/ShopsSlider';

const itemData = [
    { image: '/images/keyboard.png', label: 'Rexus Daxa Mechanical Keyboard RGB', points: 5000 },
    { image: '/images/tablet.png', label: 'Lorem Ipsum dolor Dolor sit amet', points: 5000 },
    { image: '/images/ps5.png', label: 'Playstation 5', points: 5000 },
    { image: '/images/smartphone.png', label: 'Realme Narzo 20 Pro4/64GB', points: 5000 }
];

const ShopsContainer = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='20px 10px'>
                <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Divider sx={{ my: 2 }} />
            <Grid container>
                <Grid container xs={12} sx={{ m: '10px' }} justifyContent='space-between' alignItems='baseline'>
                    <Grid item xs={7} sm={7}>
                        <Typography variant='h5' sx={{ fontWeight: '700' }}>
                            Redeem Prize
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={2} sx={{ textAlign: 'end' }}>
                        <ButtonBase>
                            <Typography sx={{ color: '#A54CE5', fontSize: '12px', fontWeight: '600' }}>See All</Typography>
                        </ButtonBase>
                    </Grid>
                </Grid>
                <ShopsSlider>
                    <Grid container sx={{ px: 1, pt: '55px' }}>
                        <Grid
                            container
                            alignItems='center'
                            justifyContent='space-between'
                            position='relative'
                            zIndex={1}
                            sx={{ backgroundColor: '#A54CE5', height: '200px', borderRadius: '15px', width: '100%', padding: '30px' }}
                        >
                            <Grid item xs={4}>
                                <img src='/icons/fire-icon.png' alt='fire-icon' />
                                <Typography sx={{ fontWeight: '800', fontSize: '36px', color: 'white', lineHeight: '38px' }}>
                                    HOT ITEM
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ position: 'absolute', bottom: '35px', right: '10px', zIndex: 9999 }}>
                                    <img src='/images/ps5-2.png' alt='ps5-icon' style={{ width: '200px' }} />
                                    <Typography sx={{ fontWeight: 'bold', color: 'white' }}>Playstation 5</Typography>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <img src='/images/point-shops.png' alt='point-shops' />
                                        <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: '12px' }}>80.000</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ px: 1, pt: '55px' }}>
                        <Grid
                            container
                            alignItems='center'
                            justifyContent='space-between'
                            position='relative'
                            zIndex={1}
                            sx={{ backgroundColor: '#A54CE5', height: '200px', borderRadius: '15px', width: '100%', padding: '30px' }}
                        >
                            <Grid item xs={4}>
                                <img src='/icons/fire-icon.png' alt='fire-icon' />
                                <Typography sx={{ fontWeight: '800', fontSize: '36px', color: 'white', lineHeight: '38px' }}>
                                    HOT ITEM
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Box sx={{ position: 'absolute', bottom: '35px', right: '10px', zIndex: 9999 }}>
                                    <img src='/images/ps5-2.png' alt='ps5-icon' style={{ width: '200px' }} />
                                    <Typography sx={{ fontWeight: 'bold', color: 'white' }}>Playstation 5</Typography>
                                    <Box sx={{ display: 'flex', gap: '10px' }}>
                                        <img src='/images/point-shops.png' alt='point-shops' />
                                        <Typography sx={{ fontWeight: 'bold', color: 'white', fontSize: '12px' }}>80.000</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/* <Box sx={{ px: 1 }}>
                        <Box sx={{ backgroundColor: 'red', height: '180px', borderRadius: '15px', width: '97%', display: 'flex' }}>
                            <Typography>Test</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ px: 1 }}>
                        <Box sx={{ backgroundColor: 'green', height: '180px', borderRadius: '15px', width: '97%', display: 'flex' }}>
                            <Typography>Test</Typography>
                        </Box>
                    </Box> */}
                </ShopsSlider>
                <Box width='100%'>
                    <ImageList variant='masonry' cols={2} gap={10}>
                        {itemData.map((item, idx: number) => (
                            <ImageListItem key={idx}>
                                <Box sx={{ backgroundColor: '#F4F1FF', padding: '45px', borderRadius: '14px' }}>
                                    <img src={item.image} alt={item.label} style={{ width: '100%' }} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '700', mt: 1 }}>{item.label}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <img src='/images/point-shops.png' alt='point-shop' loading='lazy' />
                                        <Typography sx={{ fontSize: '8px', fontWeight: '700' }}>{item.points}</Typography>
                                    </Box>
                                </Box>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <Grid container>
                    <Grid
                        container
                        justifyContent='space-between'
                        alignItems='center'
                        xs={12}
                        sx={{ backgroundColor: '#A54CE5', borderRadius: '15px', height: '230px' }}
                        direction='row'
                    >
                        <Grid item xs={6} sx={{ padding: '10px 20px' }}>
                            <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: '700' }}>Lucky Raffle</Typography>
                            <Typography sx={{ fontSize: '9px', color: 'white' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing.
                            </Typography>
                            <Box sx={{ display: 'flex', my: 2, color: 'white', gap: '5px' }}>
                                <WatchLater />
                                <Typography sx={{ fontSize: '12px' }}>6d 13h 23m</Typography>
                            </Box>
                            <Button title='Join Now' backgoundColor='white' color='#A54CE5' height='30px' />
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            <img src='/images/lucky-raffle.png' alt='luckyraffle' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    gap='10px'
                    position='relative'
                    sx={{ backgroundColor: '#56CF54', mt: 3, borderRadius: '15px', height: '100px' }}
                    alignItems='center'
                >
                    <Grid item xs={5} sx={{ position: 'relative', zIndex: 2, bottom: '10px', left: '10px' }}>
                        <img src='/images/maskot-shops.png' alt='maskot' style={{ width: '135px' }} />
                    </Grid>
                    <Grid item xs={6} sx={{ color: 'white' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Play & Join the Tournament</Typography>
                        <Typography sx={{ fontSize: '10px' }}>Get the Points and Redeem it with our special prize!</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ShopsContainer;
