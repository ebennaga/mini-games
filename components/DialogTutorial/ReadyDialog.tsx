import { Dialog, Typography, ButtonBase, Box } from '@mui/material';
import React from 'react';

interface ReadyDialogProps {
    open: boolean;
    onClose: any;
}

// eslint-disable-next-line no-unused-vars
const ReadyDialog: React.FC<ReadyDialogProps> = ({ open, onClose }) => {
    return (
        <Dialog
            open={open}
            sx={{
                '& .MuiBackdrop-root': {
                    background: 'rgba(0, 0, 0, 0.75)'
                },
                '& .MuiPaper-root': {
                    width: '-webkit-fill-available',
                    padding: '41px 30px',
                    margin: 0,
                    position: 'absolute',
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }
            }}
        >
            <Typography component='h2' fontSize='24px' marginBottom='15px' fontWeight={700}>
                You Are Ready!
            </Typography>
            <Box sx={{ mb: '20px' }}>
                <img src='/icons/ready.svg' width='270px' height='223px' alt='Welcome Prize Play' />
            </Box>
            {/* <Typography
                component='p'
                fontSize='14px'
                fontWeight={400}
                lineHeight='14px'
                px='30px'
                mb='42px'
                textAlign='center'
                sx={{ color: '#373737' }}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </Typography> */}
            <ButtonBase onClick={onClose} sx={{ background: '#A54CE5', borderRadius: '15px', padding: '23px', width: '100%' }}>
                <Typography component='span' fontSize='14px' fontWeight={700} sx={{ color: '#fff' }}>
                    Enter the PrizePlay
                </Typography>
            </ButtonBase>
        </Dialog>
    );
};

export default ReadyDialog;
