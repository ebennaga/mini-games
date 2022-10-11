import { Dialog, Box, Avatar } from '@mui/material';
import React from 'react';
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
                '& .MuiBackdrop-root': {
                    background: 'rgba(0, 0, 0, 0.75)'
                },
                '& .MuiPaper-root': {
                    width: '-webkit-fill-available',
                    padding: '60px 20px',
                    margin: 0,
                    top: 20,
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
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 4,
                    right: '29px',
                    '@media (max-width:600px)': { right: '24px' }
                }}
            >
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
            <Box sx={{ mt: '15px' }}>
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
