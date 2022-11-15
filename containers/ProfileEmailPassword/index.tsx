import { Box, ButtonBase, CircularProgress, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import Input from 'components/Input';
import useAPICaller from 'hooks/useAPICaller';
import useAuthReducer from 'hooks/useAuthReducer';
import useNotify from 'hooks/useNotify';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import CurrentEmailCard from './CurrentEmailCard';
import InfoCard from './InfoCard';

const ProfileEmailPassword = () => {
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const [errConfirm, setErrConfirm] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { fetchAPI } = useAPICaller();
    const { clearUser } = useAuthReducer();
    const notify = useNotify();
    const router = useRouter();

    const form = useForm({
        mode: 'all',
        defaultValues: {
            newEmail: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        }
    });

    const onSubmit = async (data: any) => {
        setIsLoading(true);
        const { currentPassword, newPassword, confirmNewPassword } = data;

        let dataInput = {};
        if (userState.displayName) {
            dataInput = {
                new_password: newPassword,
                new_password_confirmation: confirmNewPassword
            };
        } else {
            dataInput = {
                old_password: currentPassword,
                new_password: newPassword,
                new_password_confirmation: confirmNewPassword
            };
        }

        const response = await fetchAPI({
            method: 'PUT',
            endpoint: 'auths/profile/change-password',
            data: { ...dataInput }
        });

        if (response.status === 200) {
            notify('Password successfully changed! Please log in again');
            clearUser();
            router.push('/login');
        } else {
            notify(response.data.message, 'error');
        }
        setIsLoading(false);
    };

    useEffect(() => {
        const { newPassword, confirmNewPassword } = form.watch();
        if (newPassword.length > 5) {
            if (newPassword === confirmNewPassword) {
                setErrConfirm('');
            } else {
                setErrConfirm('New password and Confirm password must be match!');
            }
        }
    }, [form.watch('newPassword'), form.watch('confirmNewPassword')]);

    const isDisabled = isLoading || (!form.watch('newPassword') && !form.watch('confirmNewPassword')) || !!errConfirm;

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Email & Password' />
            <Box component='section' sx={{ marginTop: '63px' }}>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Email
                </Typography>
                {/* <Typography component='p' lineHeight='14px' fontSize='14px' fontWeight={400} sx={{ color: '#949494' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </Typography> */}
            </Box>
            <Box component='section' sx={{ marginTop: '35px' }}>
                <Box sx={{ marginBottom: 1.4 }}>
                    <CurrentEmailCard email={userState?.email} title='Current Email Address' />
                </Box>
                {/* <InputEdit name='newEmail' form={form} label='New Email Address' placeholder='Ex: your@email.com' disabled /> */}
                {/* <InfoCard text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit' /> */}
            </Box>
            <Box mt='32px'>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Password
                </Typography>
                <Typography component='p' lineHeight='16px' fontSize='14px' fontWeight={400} sx={{ color: '#949494' }}>
                    Enter new password for email account {userState?.email}
                </Typography>
                <Box mt='30px'>
                    {!userState?.displayName && (
                        <Input type='password' name='currentPassword' form={form} placeholder='Your Current Password' />
                    )}
                </Box>
                <Box mt='10px'>
                    <Input type='password' name='newPassword' validator={{ minLength: 6 }} form={form} placeholder='New Password' />
                </Box>
                <Box mt='10px'>
                    <Input type='password' name='confirmNewPassword' form={form} placeholder='Confirm New Password' />
                    <Typography sx={{ color: '#CD1719', fontWeight: 700, fontSize: '14px', ml: '15px', mt: '10px' }}>
                        {errConfirm}
                    </Typography>
                </Box>
            </Box>
            {!userState?.displayName && (
                <InfoCard text='After changing the password, please log in again with a new password on the Prizeplay' />
            )}
            <ButtonBase
                disabled={isDisabled}
                type='submit'
                sx={{
                    padding: isLoading ? '19px 0' : '23px 0',
                    background: isDisabled ? '#cec2d6' : '#A54CE5',
                    width: '100%',
                    color: '#fff',
                    borderRadius: '15px',
                    marginTop: '60px',
                    marginBottom: '50px'
                }}
            >
                {isLoading ? (
                    <CircularProgress size={30} sx={{ color: '#fff' }} />
                ) : (
                    <Typography component='span' fontSize='14px' fontWeight={700}>
                        Save Changes
                    </Typography>
                )}
            </ButtonBase>
        </form>
    );
};

export default ProfileEmailPassword;
