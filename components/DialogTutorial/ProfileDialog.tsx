/* eslint-disable no-unused-vars */
import { Dialog, Box, Typography, Avatar } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import numberFormat from 'helper/numberFormat';
import CardDialog from './CardDialog';

interface IProfileDialog {
    onClose: any;
    open: any;
}

const ProfileDialog: React.FC<IProfileDialog> = ({ onClose, open }) => {
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
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: -4, right: '24px' }}>
                <Box
                    sx={{
                        borderRadius: '27px',
                        position: 'relative',
                        mb: 1
                    }}
                >
                    <Avatar alt='profile' src='/images/avatar.png' sx={{ width: '50px', height: '50px' }} />
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
                <CardDialog
                    title='Profile'
                    info='Here is your Profile ,you can set up your profile, see statistic & History'
                    onClose={onClose}
                />
            </Box>
        </Dialog>
    );
};

export default ProfileDialog;
