import { Box, Divider, Typography, Grid, ButtonBase, ImageList, ImageListItem } from '@mui/material';
import Header from 'components/Header';
import React from 'react';

const itemData = [
    { image: '/images/keyboard.png', label: 'keyboard' },
    { image: '/images/tablet.png', label: 'tablet' },
    { image: '/images/ps5.png', label: 'ps5' },
    { image: '/images/smartphone.png', label: 'smartphone' }
];

const ShopsContainer = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Box padding='5px 20px'>
                <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Divider sx={{ mt: 1 }} />
            <Grid container>
                <Grid container xs={12} sx={{ m: '30px 20px' }} justifyContent='space-between' alignItems='baseline'>
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
                <Box border='1px solid red' sx={{ width: '100%' }}>
                    <ImageList variant='masonry' cols={2} gap={8}>
                        {itemData.map((item, idx) => (
                            <ImageListItem key={idx}>
                                <Box sx={{ backgroundColor: '#F4F1FF', padding: '10px' }}>
                                    <img src={item.image} alt={item.label} />
                                </Box>
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            </Grid>
        </Box>
    );
};

export default ShopsContainer;
