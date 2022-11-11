import { Dialog, Box, Typography } from '@mui/material';
import React from 'react';
import CardDialog from './CardDialog';

interface ICoinsDialog {
    onClose: any;
    open: any;
}

const CoinsDialog: React.FC<ICoinsDialog> = ({ onClose, open }) => {
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
                    padding: '50px 20px',
                    margin: 0,
                    top: 30,
                    position: 'absolute',
                    background: 'rgba(0,0,0,0.0)',
                    boxShadow: 'none'
                }
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'absolute',
                    top: 4,
                    right: '83px',
                    '@media (max-width:600px)': { right: '73px' }
                }}
            >
                <Box
                    sx={{
                        background: '#FFF5CD',
                        borderRadius: '27px',
                        width: 'fit-content',
                        height: '30px',
                        position: 'relative',
                        mb: 1
                    }}
                >
                    <Box sx={{ position: 'absolute', top: '-7px' }}>
                        <img src='/icons/plus-point.png' width='16px' height='16px' alt='plus point' loading='lazy' />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0 9px',
                            paddingTop: '2px',
                            gap: '5px'
                        }}
                    >
                        <img src='/icons/point.png' width='21px' height='20.02px' alt='point icon' loading='lazy' />
                        <Typography variant='subtitle1' component='span' sx={{ fontWeight: 'bold', fontSize: '14px', color: '#373737' }}>
                            1.000
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '50px',
                        height: '50px',
                        background: '#2D3037',
                        transform: 'rotate(45deg)',
                        borderRadius: '4px',
                        marginTop: '15px',
                        position: 'absolute',
                        top: '40px'
                    }}
                />
            </Box>
            <Box sx={{ mt: '15px' }}>
                <CardDialog title='Prize Play Coins' info='Here is your Coins Balance' onClose={onClose} />
            </Box>
        </Dialog>
    );
};

export default CoinsDialog;
