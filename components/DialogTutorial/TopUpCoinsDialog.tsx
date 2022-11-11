import { Box, Dialog, Grid } from '@mui/material';
import React from 'react';
import CardDialog from './CardDialog';

interface TopUpCoinsDialogProps {
    open: boolean;
    onClose: any;
}

const TopUpCoinsDialog: React.FC<TopUpCoinsDialogProps> = ({ open, onClose }) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
            sx={{
                zIndex: 999,
                '& .MuiBackdrop-root': {
                    background: 'rgba(0, 0, 0, 0.75)'
                },
                '& .MuiPaper-root': {
                    width: '-webkit-fill-available',
                    padding: '109px 20px',
                    margin: 0,
                    bottom: -21,
                    position: 'absolute',
                    background: 'rgba(0,0,0,0.0)',
                    boxShadow: 'none'
                }
            }}
        >
            <CardDialog title='Top Up Coins' info='Needs more coins to play, you can Top Up in here!' onClose={onClose} isTab />
            <Grid container sx={{ position: 'absolute', bottom: 35, zIndex: -1 }}>
                <Grid xs={3} item />
                <Grid xs={3} item />
                <Grid xs={3} item />
                <Grid
                    item
                    xs={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '8% !important',
                        '@media (max-width: 625px)': { maxWidth: '9% !important' },
                        '@media (max-width: 615px)': { maxWidth: '10% !important' },
                        '@media (max-width: 609px)': { maxWidth: '11% !important' },
                        '@media (max-width: 599px)': { maxWidth: '14% !important' },
                        '@media (max-width: 404px)': { maxWidth: '10.5% !important' }
                    }}
                >
                    <Box
                        sx={{
                            width: '50px',
                            height: '50px',
                            background: '#2D3037',
                            transform: 'rotate(45deg)',
                            borderRadius: '4px',
                            mb: '30px'
                        }}
                    />
                    <Box>
                        <img src='/icons/coin-not-active.svg' alt='home-icon' loading='lazy' />
                    </Box>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default TopUpCoinsDialog;
