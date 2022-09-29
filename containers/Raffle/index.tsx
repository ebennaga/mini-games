import { Box, Grid, Divider, Typography, ButtonBase } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import { WatchLater, Add, Remove } from '@mui/icons-material';
import Button from 'components/Button/Index';

const RaffleContainer = () => {
    const [quantity, setQuantity] = React.useState<number>(0);
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                padding='20px'
                sx={{
                    borderBottom: '1px solid rgba(148, 148, 148, 0.35)',
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999
                }}
            >
                <Header logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box padding='20px'>
                <Typography sx={{ fontWeight: 700, fontSize: '24px' }}>Lucky Raffle</Typography>
                <Grid container justifyContent='center' alignItems='center' sx={{ mt: '25px' }}>
                    <Grid
                        container
                        justifyContent='space-between'
                        sx={{ backgroundColor: '#373737', borderRadius: '15px', height: '100%' }}
                        direction='row'
                    >
                        <Grid item xs={6} sx={{ padding: '10px 20px' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%'
                                }}
                            >
                                <Box>
                                    <Typography sx={{ fontSize: '12px', color: 'white', fontWeight: 500 }}>Price Worth</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <img src='/icons/points.png' alt='point' />
                                        <Typography sx={{ fontSize: '40px', color: 'white', fontWeight: 700 }}>35.000</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: '12px', color: 'white' }}>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex', my: 2, color: 'white', gap: '5px', alignItems: 'center' }}>
                                        <WatchLater />
                                        <Typography sx={{ fontSize: '15px' }}>6d 13h 23m</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'end' }}>
                            <img src='/images/lucky-raffle.png' alt='luckyraffle' />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='center' alignItems='center' sx={{ mt: '50px' }}>
                        <Grid item xs={6}>
                            <Typography sx={{ textAlign: 'center', color: '#949494', fontSize: '14px' }}>No. of Raffle</Typography>
                        </Grid>
                        <Grid container justifyContent='space-between' sx={{ mt: '20px' }} alignItems='center'>
                            <ButtonBase
                                disableRipple
                                onClick={() => {
                                    if (quantity !== 0) {
                                        setQuantity(quantity - 1);
                                    }
                                }}
                                sx={{
                                    ':active': { backgroundColor: '#D9D9D9' },
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '1px solid black',
                                    borderRadius: '100%'
                                }}
                            >
                                <Remove sx={{ fontWeight: 'bold' }} />
                            </ButtonBase>
                            <Typography sx={{ fontSize: '50px', fontWeight: 'bold' }}>{quantity}</Typography>
                            <ButtonBase
                                disableRipple
                                onClick={() => {
                                    if (quantity >= 0) {
                                        setQuantity(quantity + 1);
                                    }
                                }}
                                sx={{
                                    ':active': { backgroundColor: '#D9D9D9' },
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '1px solid black',
                                    borderRadius: '100%'
                                }}
                            >
                                <Add />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={6} mt={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                                <img src='/images/point-shops.png' alt='point' />
                                <Typography sx={{ textAlign: 'center', fontSize: '14px' }}>
                                    <span style={{ fontWeight: 'bold' }}>100</span> per Raffle
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Box sx={{ mt: '300px' }}>
                    <Button title={`Buy ${quantity} Raffle`} backgoundColor='#A54CE5' color='white' />
                </Box>
            </Box>
        </Box>
    );
};

export default RaffleContainer;
