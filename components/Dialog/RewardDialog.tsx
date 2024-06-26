import { Box, Typography, Dialog } from '@mui/material';
import React from 'react';
import Button from 'components/Button/Index';
import { useRouter } from 'next/router';

interface RewardDialogProps {
    open: any;
    setOpenDialog: any;
    body: string;
    path?: any;
}

const RewardDialog: React.FC<RewardDialogProps> = ({ open, setOpenDialog, body, path }) => {
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
                <Typography sx={{ fontWeight: 'bold' }}>Awesome!</Typography>
                <img src='/images/dialog-image.png' alt='dialog-img' loading='lazy' />
                <Typography sx={{ fontWeight: 500, mt: '23px' }}>{body}</Typography>
                <Box sx={{ mt: '30px', width: '100%' }}>
                    <Button
                        onClick={() => {
                            setOpenDialog(!open);
                            router.push(path);
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

export default RewardDialog;
