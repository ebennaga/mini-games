import { Box, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import InputEdit from 'components/InputEdit';
import React from 'react';
import { useForm } from 'react-hook-form';
import CurrentEmailCard from './CurrentEmailCard';
import InfoCard from './InfoCard';
import PinpointCard from './PinpointCard';

const ProfileEmailAddress = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            newEmail: ''
        }
    });

    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Email & Address' />
            <Box component='section' sx={{ marginTop: '63px' }}>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Email
                </Typography>
                <Typography component='p' lineHeight='14px' fontSize='14px' fontWeight={400} sx={{ color: '#949494' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </Typography>
            </Box>
            <Box component='section' sx={{ marginTop: '35px' }}>
                <Box sx={{ marginBottom: 1.4 }}>
                    <CurrentEmailCard email='lordrinto@yah.com' title='Current Email Address' />
                </Box>
                <InputEdit name='newEmail' form={form} label='New Email Address' placeholder='Ex: your@email.com' />
                <InfoCard text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit' />
            </Box>
            <Box component='section' sx={{ marginTop: '63px' }}>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Address
                </Typography>
                <Typography component='p' lineHeight='14px' marginTop='17px' fontWeight={400} sx={{ color: '#949494' }}>
                    Pinpoint
                </Typography>
                <PinpointCard text='Jalan ipsum dolor sit amet, consectetur adipiscing elit, sed do. Lorem ipsum dolor sit' />
            </Box>
        </Box>
    );
};

export default ProfileEmailAddress;
