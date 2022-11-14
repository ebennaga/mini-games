/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import Input from 'components/Input';
import InputEdit from 'components/InputEdit';
import InputUnderline from 'components/InputUnderline';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import CurrentEmailCard from './CurrentEmailCard';
// import InfoCard from './InfoCard';
import PinpointCard from './PinpointCard';

const ProfileEmailAddress = () => {
    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const [errConfirm, setErrConfirm] = useState<string>('');

    const form = useForm({
        mode: 'all',
        defaultValues: {
            newEmail: '',
            address: '',
            notes: '',
            recipient: '',
            phone: '',
            currentPassword: '',
            newPassword: '',
            confirmNewPassword: ''
        }
    });

    const onSubmit = async (data: any) => {
        // console.log(data);
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

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Account & Address' />
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
                <InputEdit name='newEmail' form={form} label='New Email Address' placeholder='Ex: your@email.com' disabled />
                {/* <InfoCard text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit' /> */}
            </Box>
            <Box mt='32px'>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Password
                </Typography>
                <Typography component='p' lineHeight='14px' fontSize='14px' fontWeight={400} sx={{ color: '#949494' }}>
                    Enter for new password for your account.
                </Typography>
                <Box mt='30px'>
                    <Input type='password' name='currentPassword' form={form} placeholder='Your Current Password' />
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
            <Box component='section' sx={{ marginTop: '63px' }}>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Address
                </Typography>
                <Typography component='p' lineHeight='14px' marginTop='17px' fontWeight={400} sx={{ color: '#949494' }}>
                    Pinpoint
                </Typography>
                <PinpointCard text='Jalan Yos Sudarso, Serpong, Tangerang Selatan' />
            </Box>
            <Box sx={{ marginTop: '29px' }}>
                <InputUnderline name='address' form={form} placeholder='Address' />
                <InputUnderline name='notes' form={form} placeholder='Notes' />
                <InputUnderline name='recipient' form={form} placeholder='Recipient`s Name' />
                <InputUnderline name='phone' form={form} placeholder='Phone Number' type='number' />
            </Box>
            <ButtonBase
                type='submit'
                sx={{
                    padding: '23px 0',
                    background: '#A54CE5',
                    width: '100%',
                    color: '#fff',
                    borderRadius: '15px',
                    marginTop: '132px',
                    marginBottom: '50px'
                }}
            >
                <Typography component='span' fontSize='14px' fontWeight={700}>
                    Save Changes
                </Typography>
            </ButtonBase>
        </form>
    );
};

export default ProfileEmailAddress;
