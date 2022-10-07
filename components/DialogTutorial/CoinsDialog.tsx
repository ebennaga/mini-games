/* eslint-disable no-unused-vars */
import { Dialog, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import numberFormat from 'helper/numberFormat';
import CardDialog from './CardDialog';

interface ICoinsDialog {
    onClose: any;
    open: any;
}

const CoinsDialog: React.FC<ICoinsDialog> = ({ onClose, open }) => {
    return (
        <Dialog
            open={open}
            sx={{
                zIndex: 999,
                '& .MuiPaper-root': {
                    width: '-webkit-fill-available',
                    padding: '50px 30px',
                    margin: 0,
                    top: 30,
                    position: 'absolute',
                    background: 'rgba(0,0,0,0.0)',
                    boxShadow: 'none'
                }
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: 4, right: '73px' }}>
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
                        <img src='/icons/plus-point.png' width='16px' height='16px' alt='plus point' />
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
                        <img src='/icons/point.png' width='21px' height='20.02px' alt='point icon' />
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
                        marginTop: '5px'
                    }}
                />
            </Box>
            <Box sx={{ mt: '5px' }}>
                <CardDialog title='Prize Play Coins' info='Here is your Coins Balance' onClose={onClose} />
            </Box>
        </Dialog>
    );
};

export default CoinsDialog;
