import { Box, Dialog, Grid } from '@mui/material';
import React from 'react';
import CardDialog from './CardDialog';

interface PrizesDialogProps {
    open: boolean;
    onClose: any;
}

const PrizesDialog: React.FC<PrizesDialogProps> = ({ open, onClose }) => {
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
            <CardDialog title='Prizes' info='Here is Prizes , you can redeem many prize in here' onClose={onClose} isTab />
            <Grid container sx={{ position: 'absolute', bottom: 35, zIndex: -1 }}>
                <Grid xs={3} item />
                <Grid xs={3} item />
                <Grid
                    item
                    xs={3}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: '12% !important',
                        '@media (max-width: 599px)': { maxWidth: '16% !important' },
                        '@media (max-width: 404px)': { maxWidth: '14.5% !important' }
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
                        <img src='/icons/redeem-not-active.svg' alt='home-icon' loading='lazy' />
                    </Box>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default PrizesDialog;
