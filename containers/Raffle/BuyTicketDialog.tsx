import { Dialog, Typography, Box } from '@mui/material';
import React from 'react';
import Button from 'components/Button/Index';

interface BuyTicketDialogProps {
    open: boolean;
    setOpen: any;
    count: number;
    handleBuyRaffle: any;
}

const BuyTicketDialog: React.FC<BuyTicketDialogProps> = ({ open, setOpen, count, handleBuyRaffle }) => {
    return (
        <Dialog
            sx={{
                '& .MuiPaper-root': {
                    margin: 0,
                    borderRadius: '15px'
                }
            }}
            onClose={() => {
                setOpen(!open);
            }}
            open={open}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    p: '20px',
                    maxWidth: { sm: '600px', xs: '300px' },
                    width: { xs: '300px', sm: '500px' },
                    borderRadius: '15px'
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>Awesome!</Typography>
                <Typography sx={{ fontWeight: '400', mt: '23px', fontSize: '14px', alignItems: 'center' }}>
                    Reedem points of{' '}
                    <span style={{ fontWeight: 'bold' }}>
                        {' '}
                        <img src='/images/point-shops.png' alt='point' /> {` ${count * 100} Points`}
                    </span>{' '}
                    for <span style={{ fontWeight: 'bold' }}>{`${count} Tickets Raffle ?`}</span>
                </Typography>
                <img src='/images/raffle-img.png' alt='dialog-img' />
                <Box sx={{ mt: '30px', width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <Button onClick={handleBuyRaffle} title='Buy' border='1px solid #A54CE5' color='white' backgoundColor='#A54CE5' />
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

export default BuyTicketDialog;
