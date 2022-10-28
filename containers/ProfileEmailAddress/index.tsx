/* eslint-disable no-unused-vars */
import { Box, ButtonBase, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import InputEdit from 'components/InputEdit';
import InputUnderline from 'components/InputUnderline';
import React from 'react';
import { useForm } from 'react-hook-form';
import CurrentEmailCard from './CurrentEmailCard';
// import InfoCard from './InfoCard';
import PinpointCard from './PinpointCard';

const ProfileEmailAddress = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            newEmail: '',
            address: '',
            notes: '',
            recipient: '',
            phone: ''
        }
    });

    const onSubmit = async (data: any) => {
        // console.log(data);
    };

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} style={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Email & Address' />
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
                    <CurrentEmailCard email='rintokun@yah.com' title='Current Email Address' />
                </Box>
                <InputEdit name='newEmail' form={form} label='New Email Address' placeholder='Ex: your@email.com' disabled />
                {/* <InfoCard text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit' /> */}
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
