import React from 'react';
import { Box, Typography, Dialog, ButtonBase } from '@mui/material';
import Input from 'components/Input';
import { useForm } from 'react-hook-form';
import Button from 'components/Button/Index';

interface DialogOtpProps {
    open: any;
    setOpenDialog: any;
    setIsConfirmed: any;
    isConfirmed: any;
}

const DialogOtp: React.FC<DialogOtpProps> = ({ open, setOpenDialog, setIsConfirmed, isConfirmed }) => {
    const otp = '12345';
    const [isMatch, setIsMatch] = React.useState<boolean>(false);
    const form = useForm({
        mode: 'all',
        defaultValues: {
            otp: ''
        }
    });
    const handleConfirmOtp = () => {
        if (otp === form.watch('otp')) {
            setIsMatch(false);
            setIsConfirmed(!isConfirmed);
            setOpenDialog(false);
        } else {
            setIsMatch(true);
        }
    };
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
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Insert OTP Number to Continue</Typography>
                </Box>
                <Box sx={{ mt: '30px', width: '100%' }}>
                    {isMatch && <Typography sx={{ color: '#FF4242' }}>OTP Number is not invalid !</Typography>}
                    <Input isMatch={isMatch} isOTP name='otp' type='text' form={form} placeholder='Insert Your OTP Number' />
                    <Box sx={{ mt: '10px' }}>
                        <Button
                            onClick={handleConfirmOtp}
                            border='1px solid #A54CE5'
                            title='Confirm'
                            backgoundColor='white'
                            color='#A54CE5'
                        />
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center', mt: '12px' }}>
                    <Box>
                        <Typography sx={{ fontSize: '12px', fontWeight: 500, color: '#949494' }}>If you don’t receive OTP,</Typography>
                    </Box>
                    <ButtonBase onClick={() => {}}>
                        <Typography sx={{ fontWeight: 'bold', color: '#A54CE5', fontSize: '12px' }}>Resend OTP</Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Dialog>
    );
};

export default DialogOtp;
