import { Box, ButtonBase, Dialog } from '@mui/material';
import { Close } from '@mui/icons-material';
import React from 'react';
import Button from 'components/Button/Index';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import useAuthReducer from 'hooks/useAuthReducer';

interface DialogBannerProps {
    open: boolean;
    setOpen?: any;
}

const DialogBanner: React.FC<DialogBannerProps> = ({ open, setOpen }) => {
    const router = useRouter();
    const { setUser } = useAuthReducer();
    const userState = useSelector((state: any) => state.webpage?.user?.user);

    return (
        <Dialog open={open} onClose={setOpen} maxWidth='xl'>
            <Box
                sx={{
                    backgroundImage: 'url(/images/dummy/banner-welcome.svg)',
                    width: '330px',
                    height: '512px',
                    backgroundSize: 'cover',
                    position: 'relative'
                }}
            >
                <Box sx={{ width: '95%', display: 'flex', justifyContent: 'end', mt: '20px' }}>
                    <ButtonBase
                        disableRipple
                        onClick={() => {
                            setOpen(!open);
                        }}
                    >
                        <Close sx={{ color: 'white', fontWeight: 'bold' }} />
                    </ButtonBase>
                </Box>
                <Box sx={{ position: 'absolute', bottom: 25, left: '50%', translate: '-50%', width: '60%' }}>
                    <Button
                        title='Go to Casual Tournaments'
                        backgoundColor='#FFD833'
                        color='#A54CE5'
                        height='40px'
                        onClick={() => {
                            router.push('/tournaments');
                            setUser({ ...userState, page: 'casual' });
                        }}
                    />
                </Box>
            </Box>
        </Dialog>
    );
};

export default DialogBanner;
