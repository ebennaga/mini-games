/* eslint-disable no-unused-vars */
import { Box, Dialog, Typography } from '@mui/material';
import React from 'react';
import Button from 'components/Button/Index';
import Header from 'components/Header';

interface StatusRoundDialogProps {
    open: any;
    setOpen: any;
    isWinner: boolean;
}

const StatusRoundDialog: React.FC<StatusRoundDialogProps> = ({ open, setOpen, isWinner }) => {
    // const [isWinner, setIsWinner] = React.useState<boolean>(false);
    return (
        <Dialog
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
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <Box
                    padding='15px 20px'
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
                <Box sx={{ textAlign: 'center', mt: '55px' }}>
                    {isWinner ? (
                        <Typography sx={{ fontSize: '24px', color: '#A54CE5', fontWeight: 700, mb: '55px' }}>Awesome</Typography>
                    ) : (
                        <Typography sx={{ fontSize: '24px', color: '#FF4566', fontWeight: 700, mb: '55px', fontStyle: 'italic' }}>
                            Oh, no....
                        </Typography>
                    )}
                    <Typography sx={{ fontSize: '24px', color: '#373737', fontWeight: 700 }}>
                        Winners of Raffle rounds 285 <br />{' '}
                        {isWinner ? (
                            <span style={{ color: '#949494', fontSize: '14px' }}>
                                The winner is <span style={{ color: '#A54CE5' }}>you</span>
                            </span>
                        ) : (
                            <span style={{ color: '#949494', fontSize: '14px' }}>You aren`t the winner in this round</span>
                        )}
                    </Typography>
                    <Box sx={{ marginTop: '75px', padding: '20px' }}>
                        <img src={isWinner ? '/images/winner.png' : '/images/not-winner.png'} alt='winner' />
                        <Typography sx={{ fontSize: '20px', fontWeight: 700, mt: '30px' }}>Arya Stark</Typography>
                        <Typography sx={{ fontSize: '16px', fontWeight: 700, mt: '60px' }}>Prize</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: '25px', gap: '2px' }}>
                            <img src='/icons/points.png' alt='points' style={{ width: '40px' }} />
                            <Typography sx={{ fontSize: '40px', fontWeight: 700 }}>350.000</Typography>
                        </Box>
                        <Typography sx={{ fontWeight: 500, fontSize: '12px', color: '#949494', mt: '135px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate{' '}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '90%', paddingY: '20px', position: 'sticky', bottom: '20px' }}>
                    <Button
                        onClick={() => {
                            setOpen(!open);
                        }}
                        title='Close'
                        border='1px solid #A54CE5'
                        color='white'
                        backgoundColor='#A54CE5'
                    />
                </Box>
            </Box>
        </Dialog>
    );
};

export default StatusRoundDialog;
