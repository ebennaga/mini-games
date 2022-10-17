import { Dialog, Typography, ButtonBase } from '@mui/material';
import React from 'react';

interface ResendSuccessDialogProps {
    open: boolean;
    setOpen: any;
}

const ResendSuccessDialog: React.FC<ResendSuccessDialogProps> = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{
                '& .MuiPaper-root': {
                    width: '100%',
                    padding: '25px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '15px'
                }
            }}
        >
            <Typography component='h2' fontSize='14px' fontWeight={700} sx={{ color: '#373737' }}>
                Awesome!
            </Typography>
            <img src='/icons/thumbs.svg' width='207px' height='207px' alt='thumbs success' />
            <Typography component='p' fontSize='14px' fontWeight={400} sx={{ color: '#373737' }}>
                Your OTP has been resend
            </Typography>
            <ButtonBase
                onClick={handleClose}
                sx={{
                    color: '#A54CE5',
                    border: '1px solid #A54CE5',
                    borderRadius: '15px',
                    width: '100%',
                    padding: '20px',
                    marginTop: '21px'
                }}
            >
                <Typography component='span' fontSize='14px' fontWeight={700}>
                    Close
                </Typography>
            </ButtonBase>
        </Dialog>
    );
};

export default ResendSuccessDialog;
