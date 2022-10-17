import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
// import { ArrowCircleLeft } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import Input from 'components/Input';
import HeaderBack from 'components/HeaderBack';
import Button from 'components/Button/Index';
import RewardDialog from 'components/Dialog/RewardDialog';
import DialogOtp from './DialogOtp';

const ForgotPasswordPage = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            email: '',
            'New password': '',
            'Confirm password': ''
        }
    });
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    const [isConfirmed, setIsConfirmed] = React.useState<boolean>(false);
    const [dialogChanged, setDialogChanged] = React.useState<boolean>(false);
    const [disabled, setDisabled] = React.useState<any>(true);
    const [disabledChange, setDisabledChange] = React.useState<any>(true);
    const rules = { required: true };

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
                                                validator={rules}
                                                type='password'
                                                name='New password'
                                                form={form}
                                                placeholder='Insert your New Password'
                                            />
                                            <Input
                                                isOTP={false}
                                                validator={rules}
                                                type='password'
                                                name='Confirm password'
                                                form={form}
                                                placeholder='Insert your Confirm Password'
                                            />
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
                            onClick={() => {
                                setDialogChanged(!dialogChanged);
                            }}
                            type='submit'
                            title='Confirm'
                            backgoundColor='#A54CE5'
                            color='white'
                            disabled={disabledChange}
                        />
                    ) : (
                        <Button
                            onClick={() => {
                                setOpenDialog(!openDialog);
                            }}
                            type='submit'
                            title='Send Verification Code'
                            backgoundColor='#A54CE5'
                            color='white'
                            disabled={disabled}
                        />
                    )}
                </Box>
            </Box>
            <DialogOtp setIsConfirmed={setIsConfirmed} isConfirmed={isConfirmed} open={openDialog} setOpenDialog={setOpenDialog} />
            <RewardDialog path='/login' open={dialogChanged} setOpenDialog={setDialogChanged} body='Your password changed successfully !' />
        </Box>
    );
};

export default ForgotPasswordPage;
