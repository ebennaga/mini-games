import { Box, Dialog, Typography } from '@mui/material';
import React from 'react';
import Button from 'components/Button/Index';
import Header from 'components/Header';

interface StatusRoundDialogProps {
    open: any;
    setOpen: any;
}

const StatusRoundDialog: React.FC<StatusRoundDialogProps> = ({ open, setOpen }) => {
    return (
        <Dialog
            fullScreen
            sx={{
                '& .MuiPaper-root': {
                    margin: 0
                }
            }}
            onClose={() => {
                setOpen(!open);
            }}
            open={open}
        >
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box
                    padding='25px'
                    sx={{
                        borderBottom: '1px solid rgba(148, 148, 148, 0.35)',
                        mb: 2,
                        position: 'sticky',
                        top: -1,
                        backgroundColor: 'white',
                        zIndex: 999,
                        width: '-webkit-fill-available'
                    }}
                >
                    <Header isBack isShops logo='/icons/logo.svg' point={102_300} profilePicture='/icons/dummy/profile.png' />
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ fontSize: '24px', color: '#A54CE5', fontWeight: 700, mb: '55px' }}>Awesome</Typography>
                    <Typography sx={{ fontSize: '24px', color: '#373737', fontWeight: 700 }}>
                        Winners of Raffle rounds 285 <br />{' '}
                        <span style={{ color: '#949494', fontSize: '14px' }}>
                            The winner is <span style={{ color: '#A54CE5' }}>you</span>
                        </span>{' '}
                    </Typography>
                </Box>
                <Box sx={{ width: '90%', paddingY: '20px' }}>
                    <Button
                        onClick={() => {
                            setOpen(!open);
                        }}
                        title='Close'
                        border='1px solid #A54CE5'
                        color='#A54CE5'
                        backgoundColor='white'
                    />
                </Box>
            </Box>
        </Dialog>
    );
};

export default StatusRoundDialog;
