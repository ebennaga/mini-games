import { ButtonBase, Dialog, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface SignupLoginDialogProps {
    open: boolean;
    setOpen: any;
}
const SignupLoginDialog: React.FC<SignupLoginDialogProps> = ({ open, setOpen }) => {
    const router = useRouter();

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            sx={{
                '& .MuiPaper-root': {
                    color: '#373737',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '30px 19px',
                    borderRadius: '15px'
                }
            }}
        >
            <Typography component='h2' fontSize='14px' fontWeight={700} mb='32px'>
                Oops.. you do not have access
            </Typography>
            <img src='/images/delete-logo.svg' width='192px' height='auto' alt='Prize play signup' loading='lazy' />
            <Typography component='p' fontSize='14px' fontWeight={400} lineHeight='14px' textAlign='center' mt='31px' px='35px'>
                to continue , please sign up and access all feature
            </Typography>
            <ButtonBase
                onClick={() => router.push('/signup')}
                sx={{ color: '#fff', background: '#A54CE5', width: '100%', padding: '20px', borderRadius: '15px', mt: '31px' }}
            >
                <Typography component='span' fontSize='14px' fontWeight={700}>
                    Sign up
                </Typography>
            </ButtonBase>
            <ButtonBase onClick={() => router.push('/login')} sx={{ mt: '18px' }}>
                <Typography component='span' fontSize='14px' fontWeight={400}>
                    Already have an account?
                </Typography>
                <Typography component='span' fontSize='14px' fontWeight={700} pl='6px' sx={{ color: '#A54CE5' }}>
                    Log in
                </Typography>
            </ButtonBase>
        </Dialog>
    );
};

export default SignupLoginDialog;
