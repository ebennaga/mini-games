import { ButtonBase, Dialog, Typography } from '@mui/material';
import React from 'react';

interface DeleteAccountDialogProps {
    open: boolean;
    setOpen: any;
    handleDelete: any;
}

const DeleteAccountDialog: React.FC<DeleteAccountDialogProps> = ({ open, setOpen, handleDelete }) => {
    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                '& .MuiPaper-root': {
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '30px 19px',
                    borderRadius: '15px'
                }
            }}
        >
            <Typography component='h3' fontSize='14px' fontWeight={700} mb='17px'>
                Confirmation
            </Typography>
            <img src='/images/delete-logo.svg' width='192px' height='auto' alt='delete account' />
            <Typography component='h4' fontSize='14px' fontWeight={600} mt='16px'>
                Are you sure want to Delete Account?
            </Typography>
            <Typography
                component='p'
                fontSize='12px'
                fontWeight={400}
                lineHeight='12px'
                textAlign='center'
                mt='21px'
                sx={{ color: '#949494' }}
            >
                Notes : All of your data and information will be removed and you can’t recover.
            </Typography>
            <ButtonBase
                onClick={handleDelete}
                sx={{ background: '#A54CE5', borderRadius: '15px', width: '100%', padding: '20px', mt: '20px' }}
            >
                <Typography component='span' fontSize='14px' fontWeight={700} sx={{ color: '#fff' }}>
                    Sure
                </Typography>
            </ButtonBase>
            <ButtonBase
                onClick={() => setOpen(false)}
                sx={{ border: '1px solid #A54CE5', borderRadius: '15px', width: '100%', padding: '20px', mt: '16px' }}
            >
                <Typography component='span' fontSize='14px' fontWeight={700} sx={{ color: '#A54CE5' }}>
                    Close
                </Typography>
            </ButtonBase>
        </Dialog>
    );
};

export default DeleteAccountDialog;
