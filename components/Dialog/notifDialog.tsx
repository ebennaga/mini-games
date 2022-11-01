import { Box, Typography, Dialog, ButtonBase } from '@mui/material';
import React from 'react';
import Button from 'components/Button/Index';
import { Close } from '@mui/icons-material';
import { useRouter } from 'next/router';

interface RewardDialogProps {
    open: any;
    setOpenDialog: any;
    body: string;
    textButton?: string;
}

const RewardDialog: React.FC<RewardDialogProps> = ({ open, setOpenDialog, body, textButton }) => {
    const router = useRouter();
    return (
        <Dialog
            sx={{
                '& .MuiPaper-root': {
                    margin: 0,
                    borderRadius: '15px'
                }
            }}
            onClose={() => {
                setOpenDialog(!open);
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box />
                    <Typography sx={{ fontWeight: 'bold' }}>Get Coins</Typography>
                    <ButtonBase>
                        <Close
                            onClick={() => {
                                setOpenDialog(!open);
                            }}
                        />
                    </ButtonBase>
                </Box>
                <Box sx={{ mt: '20px' }}>
                    {router.asPath.includes('/games') ? (
                        <img src='/images/lg-coins.png' alt='dialog-img' />
                    ) : (
                        <img src='/images/lg-points.png' alt='dialog-img' />
                    )}
                </Box>
                <Typography sx={{ fontWeight: 500, mt: '14px' }}>{body}</Typography>
                <Box sx={{ mt: '30px', width: '100%' }}>
                    <Button
                        onClick={() => {
                            if (router.asPath.includes('/games')) {
                                return router.push('/topup');
                            }
                            return router.push('/tournaments');
                        }}
                        title={textButton || 'Top up Now!'}
                        border='1px solid #A54CE5'
                        color='white'
                        backgoundColor='#A54CE5'
                    />
                </Box>
            </Box>
        </Dialog>
    );
};

export default RewardDialog;
