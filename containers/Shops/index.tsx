import { Box, Divider, Typography, Grid, ButtonBase, ImageList, ImageListItem } from '@mui/material';
import { WatchLater } from '@mui/icons-material';
import Button from 'components/Button/Index';
import Header from 'components/Header';
import React from 'react';

const itemData = [
    { image: '/images/keyboard.png', label: 'Rexus Daxa Mechanical Keyboard RGB', points: 5000 },
    { image: '/images/tablet.png', label: 'Lorem Ipsum dolor Dolor sit amet', points: 5000 },
    { image: '/images/ps5.png', label: 'Playstation 5', points: 5000 },
    { image: '/images/smartphone.png', label: 'Realme Narzo 20 Pro4/64GB', points: 5000 }
];

const ShopsContainer = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='5px 20px'>
                <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Divider sx={{ mt: 1 }} />
            <Grid container>
                <Grid container xs={12} sx={{ my: '10px' }} justifyContent='space-between' alignItems='baseline'>
                    <Grid item xs={7}>
                        <Typography variant='h5' sx={{ fontWeight: '700' }}>
                            Redeem Prize
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <ButtonBase>
                            <Typography sx={{ color: '#A54CE5', fontSize: '12px', fontWeight: '600', textAlign: 'end' }}>
                                See All
                            </Typography>
                        </ButtonBase>
                    </Grid>
                </Grid>
                <Box>
                    <ImageList variant='masonry' cols={2} gap={8}>
                        {itemData.map((item, idx) => (
                            <ImageListItem key={idx}>
                                <Box sx={{ backgroundColor: '#F4F1FF', padding: '10px', borderRadius: '14px' }}>
                                    <img src={item.image} alt={item.label} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '12px', fontWeight: '700', mt: 1 }}>{item.label}</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                        <img src='/images/point-shops.png' alt='point-shop' />
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
                        sx={{ backgroundColor: '#A54CE5', borderRadius: '15px' }}
                        direction='row'
                    >
                        <Grid item xs={7} sx={{ padding: '20px 30px' }}>
                            <Typography sx={{ fontSize: '22px', color: 'white', fontWeight: '700' }}>Lucky Raffle</Typography>
                            <Typography sx={{ fontSize: '12px', color: 'white' }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing.
                            </Typography>
                            <Box sx={{ display: 'flex', my: 3, color: 'white', gap: '5px' }}>
                                <WatchLater />
                                <Typography>6d 13h 23m</Typography>
                            </Box>
                            <Button title='Join Now' backgoundColor='white' color='#A54CE5' height='30px' />
                        </Grid>
                        <Grid item xs={5} sx={{ textAlign: 'end' }}>
                            <img src='/images/lucky-raffle.png' alt='luckyraffle' />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container gap='10px' sx={{ backgroundColor: '#56CF54', mt: 2, p: '5px', borderRadius: '15px' }} alignItems='center'>
                    <Grid item xs={5}>
                        <img src='/images/maskot-shops.png' alt='maskot' />
                    </Grid>
                    <Grid item xs={5} sx={{ color: 'white' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Play & Join the Tournament</Typography>
                        <Typography sx={{ fontSize: '10px', mt: 2 }}>Get the Points and Redeem it with our special prize!</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ShopsContainer;
