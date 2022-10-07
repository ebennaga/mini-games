/* eslint-disable no-unused-vars */
/* eslint-disable no-multi-assign */
import { Dialog, IconButton, Box, Typography, ButtonBase } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CardDialog from './CardDialog';
import CoinsDialog from './CoinsDialog';
import ProfileDialog from './ProfileDialog';

interface IWelcomeDialog {
    open: boolean;
    setOpen: any;
    dataLocal: any;
    setDataLocal: any;
}

const WelcomeDialog: React.FC<IWelcomeDialog> = ({ open, setOpen, dataLocal, setDataLocal }) => {
    const [coinsDialog, setCoinsDialog] = useState<boolean>(false);
    const [profileDialog, setProfileDialog] = useState<boolean>(false);

    const handleClose = () => {
        const local: any = localStorage.getItem('tutorial');
        const resLocal: any = JSON.parse(local);
        resLocal.isTutorial = false;
        localStorage.removeItem('tutorial');
        localStorage.setItem('tutorial', JSON.stringify(resLocal));
        setDataLocal(resLocal);
        setOpen(false);
    };

    const handleStart = () => {
        const local: any = dataLocal;
        local.listTutorial.welcome = false;
        setDataLocal(local);
        setOpen(false);
        setCoinsDialog(true);
    };

    const handleCloseDialog = (name: string, currentSetDialog: any, nextSetDialog: any) => {
        const local: any = dataLocal;
        local.listTutorial[name] = false;
        setDataLocal(local);
        currentSetDialog(false);
        nextSetDialog(true);
    };

    return (
        <>
            <Dialog
                open={dataLocal.isTutorial && dataLocal.listTutorial.welcome && open}
                sx={{
                    '& .MuiPaper-root': {
                        width: '-webkit-fill-available',
                        padding: '18px 30px',
                        margin: 0,
                        position: 'absolute',
                        bottom: 0
                    }
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#373737' }}>
                    <img src='/icons/mission.png' width='163.6px' height='142px' alt='Welcome Prize Play' />
                    <Typography component='h2' fontSize='24px' marginTop='58px' marginBottom='25px' fontWeight={700}>
                        Welcome Friend
                    </Typography>
                    <Typography component='p' fontSize='14px' lineHeight='14px' width='80%' fontWeight={400} textAlign='center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                    </Typography>
                    <ButtonBase
                        onClick={handleStart}
                        sx={{ background: '#A54CE5', borderRadius: '15px', padding: '23px 0', width: '100%', mt: '42px' }}
                    >
                        <Typography component='span' fontSize='14px' fontWeight={700} sx={{ color: '#fff' }}>
                            Lets Start
                        </Typography>
                    </ButtonBase>
                    <ButtonBase onClick={handleClose} sx={{ padding: '13px 0', width: '100%', mt: '10px' }}>
                        <Typography component='span' fontSize='14px' fontWeight={700}>
                            Skip
                        </Typography>
                    </ButtonBase>
                </Box>
            </Dialog>

            <CoinsDialog open={coinsDialog} onClose={() => handleCloseDialog('coins', setCoinsDialog, setProfileDialog)} />
            <ProfileDialog open={profileDialog} onClose={() => handleCloseDialog('profile', setProfileDialog, setCoinsDialog)} />
        </>
    );
};

export default WelcomeDialog;
