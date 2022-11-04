import React, { useState } from 'react';
import { Dialog, ButtonBase, Box, Typography, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';
import WebcamScreen from 'components/Webcam';

interface DialogPictureProps {
    open: boolean;
    setOpen: any;
    setSelectedAvatar: any;
    imagesList: any;
}

const DialogPicture: React.FC<DialogPictureProps> = ({ open, setOpen, setSelectedAvatar, imagesList }) => {
    const [isOpenCamera, setIsOpenCamera] = useState<boolean>(false);
    const handleClickAvatar = (avatar: any) => {
        setSelectedAvatar(avatar);
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={() => setOpen(false)}
            sx={{ '& .MuiPaper-root': { maxHeight: 'none', margin: 0, height: '100%', width: '100%' } }}
        >
            {isOpenCamera ? (
                <WebcamScreen setSelectedAvatar={setSelectedAvatar} openCamera={setIsOpenCamera} dialog={setOpen} />
            ) : (
                <Box component='section' sx={{ padding: '20px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '45px' }}>
                        <ButtonBase
                            onClick={() => setOpen(false)}
                            sx={{ width: '24px', height: '24px', borderRadius: '50px', background: '#A54CE5' }}
                        >
                            <ArrowBackIcon sx={{ color: '#fff', width: '40px', height: '20px', fontWeight: 'bold' }} />
                        </ButtonBase>
                        <Typography component='h2' sx={{ fontSize: '24px', fontWeight: 'bold', width: '100%', textAlign: 'center' }}>
                            Select Avatar
                        </Typography>
                    </Box>
                    <Grid container>
                        {/* <Grid item xs={4} padding='15px 0' alignItems='center' justifyContent='center' display='flex'>
                            <ButtonBase
                                onClick={() => setIsOpenCamera(true)}
                                sx={{
                                    background: '#F4F1FF',
                                    width: '89px',
                                    height: '89px',
                                    borderRadius: '100px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <CameraAltIcon sx={{ fontSize: '30px', color: '#373737' }} />
                            </ButtonBase>
                        </Grid> */}
                        {imagesList.map((item: any) => {
                            return (
                                <Grid item xs={4} padding='15px 0' alignItems='center' justifyContent='center' display='flex' key={item.id}>
                                    <ButtonBase
                                        onClick={() => handleClickAvatar(item)}
                                        sx={{
                                            backgroundImage: `url(${item.image_url})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            width: '89px',
                                            height: '89px',
                                            borderRadius: '100px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            )}
        </Dialog>
    );
};

export default DialogPicture;
