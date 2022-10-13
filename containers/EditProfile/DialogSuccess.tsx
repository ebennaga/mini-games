import { ButtonBase, Dialog, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface DialogSuccessProps {
    open: boolean;
    setOpen: any;
}

const DialogSuccess: React.FC<DialogSuccessProps> = ({ open, setOpen }) => {
    const router = useRouter();

    const handleClose = () => {
        setOpen(false);
        router.push('/profile/settings');
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                '& .MuiPaper-root': {
                    borderRadius: '15px',
                    width: '100%',
                    padding: '28px 19px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }
            }}
        >
            <Typography component='h2' fontSize='14px' fontWeight={700} mb='10px'>
                Awesome!
            </Typography>
            <img src='/images/thumbs-bg-star.svg' width='206px' height='auto' alt='success changes' />
            <Typography component='p' fontSize='14px' fontWeight={400}>
                Changes has been updated
            </Typography>
            <ButtonBase
                onClick={handleClose}
                sx={{ color: '#A54CE5', border: '1px solid #A54CE5', width: '100%', borderRadius: '15px', padding: '20px', mt: '20px' }}
            >
                <Typography component='span' fontSize='14px' fontWeight={700}>
                    Close
                </Typography>
            </ButtonBase>
        </Dialog>
    );
};

export default DialogSuccess;
