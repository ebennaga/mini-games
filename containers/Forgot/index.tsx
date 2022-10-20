import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
// import { ArrowCircleLeft } from '@mui/icons-material';
import useAPICaller from 'hooks/useAPICaller';
import { useForm } from 'react-hook-form';
import Input from 'components/Input';
import HeaderBack from 'components/HeaderBack';
import Button from 'components/Button/Index';
import RewardDialog from 'components/Dialog/RewardDialog';
import DialogOtp from './DialogOtp';

const ForgotPasswordPage = () => {
    const { fetchAPI: postForgot, isLoading: loadingForgot } = useAPICaller();
    const { fetchAPI: postReset, isLoading: loadingReset } = useAPICaller();
    const { fetchAPI: postOtp, isLoading: loadingOtp } = useAPICaller();
    const form = useForm({
        mode: 'all',
        defaultValues: {
            email: '',
            'New password': '',
            'Confirm password': '',
            otp: ''
        }
    });
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    const [isConfirmed, setIsConfirmed] = React.useState<boolean>(false);
    const [dialogChanged, setDialogChanged] = React.useState<boolean>(false);
    const [disabled, setDisabled] = React.useState<any>(true);
    const [isSamePwd, setIsSamePwd] = React.useState<boolean>(true);
    const [isMatch, setIsMatch] = React.useState<boolean>(false);
    const [disabledChange, setDisabledChange] = React.useState<any>(true);
    const rules = { required: true };

    const postForgotHandler = async () => {
        const response = await postForgot({
            method: 'POST',
            endpoint: 'auths/forgotPassword',
            data: {
                email: form.watch('email')
            }
        });
        if (response?.data.status === 200) {
            setOpenDialog(!openDialog);
        }
    };

    const postResetHandler = async () => {
        const response = await postReset({
            method: 'POST',
            endpoint: 'auths/forgotPassword/reset',
            data: {
                email: form.watch('email'),
                forgot_password_token: form.watch('otp'),
                password: form.watch('New password'),
                password_confirmation: form.watch('Confirm password')
            }
        });
        if (response?.data.status === 200) {
            setDialogChanged(!dialogChanged);
        }
    };

    const postCheckOtpHandler = async () => {
        const response = await postOtp({
            method: 'POST',
            endpoint: 'auths/forgotPassword/check',
            data: {
                email: form.watch('email'),
                forgot_password_token: form.watch('otp')
            }
        });
        console.log(response);
        if (response?.data.status === 200) {
            setIsMatch(false);
            setIsConfirmed(!isConfirmed);
            setOpenDialog(false);
        } else {
            setIsMatch(true);
        }
    };

    React.useEffect(() => {
        const value = form.watch();
        if (value['New password'].length >= 6) {
            if (value['New password'] === value['Confirm password']) {
                setIsSamePwd(true);
            } else {
                setIsSamePwd(false);
            }
        }
    }, [form.watch('New password'), form.watch('Confirm password')]);

    React.useEffect(() => {
        if (form.watch('email') === '') {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [form.watch('email'), disabled]);

    React.useEffect(() => {
        if (form.watch('Confirm password') === '' && form.watch('New password') === '') {
            setDisabledChange(true);
        } else {
            setDisabledChange(false);
        }
    }, [form.watch('Confirm password'), form.watch('New password'), disabled]);

    return (
        <Box sx={{ width: '100%', height: '90vh' }}>
            <Box
                sx={{
                    padding: '30px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                }}
            >
                <Box>
                    <HeaderBack />
                    <Box sx={{ mt: '20px' }}>
                        <Grid container flexDirection='column'>
                            <Grid item xs={9}>
                                <Typography sx={{ fontSize: '33px', fontWeight: 'bold' }}>
                                    Set your <br /> new password
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: '10px' }}>
                                <Typography sx={{ fontSize: '13px', color: '#949494' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, explicabo?
                                </Typography>
                                <form onSubmit={form.handleSubmit(() => {})} style={{ marginTop: '20px' }}>
                                    {isConfirmed ? (
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            <Input
                                                isOTP={false}
                                                validator={{ minLength: 6, required: true }}
                                                type='password'
                                                name='New password'
                                                form={form}
                                                placeholder='Insert your New Password'
                                            />
                                            <Input
                                                isOTP={false}
                                                validator={{ minLength: 6, required: true }}
                                                type='password'
                                                name='Confirm password'
                                                form={form}
                                                placeholder='Insert your Confirm Password'
                                            />
                                            {!isSamePwd && (
                                                <Box ml='1em'>
                                                    <Typography
                                                        component='span'
                                                        sx={{ color: '#CD1719', fontSize: '14px', fontWeight: 'bold' }}
                                                    >
                                                        Password and Confirm Password does not match
                                                    </Typography>
                                                </Box>
                                            )}
                                        </Box>
                                    ) : (
                                        <Input
                                            isOTP={false}
                                            validator={rules}
                                            type='email'
                                            name='email'
                                            form={form}
                                            placeholder='Insert your email'
                                        />
                                    )}
                                </form>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{ position: 'sticky', zIndex: 999, bottom: '20px' }}>
                    {isConfirmed ? (
                        <Button
                            loading={loadingReset}
                            onClick={postResetHandler}
                            type='submit'
                            title='Confirm'
                            backgoundColor='#A54CE5'
                            color='white'
                            disabled={disabledChange}
                        />
                    ) : (
                        <Button
                            loading={loadingForgot}
                            onClick={postForgotHandler}
                            type='submit'
                            title='Send Verification Code'
                            backgoundColor='#A54CE5'
                            color='white'
                            disabled={disabled}
                        />
                    )}
                </Box>
            </Box>
            <DialogOtp
                isLoading={loadingOtp}
                form={form}
                isMatch={isMatch}
                onClick={postCheckOtpHandler}
                open={openDialog}
                setOpenDialog={setOpenDialog}
            />
            <RewardDialog path='/login' open={dialogChanged} setOpenDialog={setDialogChanged} body='Your password changed successfully !' />
        </Box>
    );
};

export default ForgotPasswordPage;
