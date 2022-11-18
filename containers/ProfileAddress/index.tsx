/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import { Box, ButtonBase, CircularProgress, Typography } from '@mui/material';
import HeaderBack from 'components/HeaderBack';
import InputUnderline from 'components/InputUnderline';
import PinpointCard from 'components/PinpointCard';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const ProfileAddress = () => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [isDisable, setIsDisable] = React.useState<boolean>(true);
    // const [listAddress, setListAddress] = React.useState({ address: null });
    const userState = useSelector((state: any) => state.webpage.user?.user);
    const { fetchAPI } = useAPICaller();
    const notify = useNotify();
    const router = useRouter();

    const form = useForm({
        mode: 'all',
        defaultValues: {
            address: '',
            notes: '',
            recipient: '',
            phone: ''
        }
    });

    React.useEffect(() => {
        const { address, notes, recipient, phone } = form.watch();
        if (address && notes && recipient && phone) {
            setIsDisable(false);
        } else {
            setIsDisable(true);
        }
    }, [form.watch()]);

    const getData = async () => {
        const response = await fetchAPI({
            method: 'GET',
            endpoint: 'auths/detail'
        });
        if (response.status === 200 && response.data.data.primary_address) {
            const { address, notes, receipent_name, phone_number } = response.data.data.primary_address[0];
            form.setValue('address', address);
            form.setValue('notes', notes);
            form.setValue('recipient', receipent_name);
            form.setValue('phone', phone_number);
        }
    };
    React.useEffect(() => {
        getData();
    }, []);
    // console.log('listaddress', listAddress);
    const handleSubmit = async (data: any) => {
        setIsLoading(true);
        const { address, notes, recipient, phone } = data;

        const response = await fetchAPI({
            method: 'PUT',
            endpoint: 'auths/profile/change-address',
            data: {
                address,
                notes,
                recipient_name: recipient,
                phone_number: phone
            }
        });

        if (response.status === 200) {
            notify('Address has been successfully changed!');
            router.push('/profile/settings');
        } else {
            notify('Failed to change address');
        }
        setIsLoading(false);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} style={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737' }}>
            <HeaderBack title='Address' />
            <Box component='section' sx={{ marginTop: '63px' }}>
                <Typography component='h2' fontSize='18px' fontWeight={700}>
                    Address
                </Typography>
                {/* <Typography component='p' lineHeight='14px' marginTop='17px' fontWeight={400} sx={{ color: '#949494' }}>
                    Pinpoint
                </Typography>
                <PinpointCard text='Jalan Yos Sudarso, Serpong, Tangerang Selatan' /> */}
            </Box>
            <Box sx={{ marginTop: '29px' }}>
                <InputUnderline name='address' form={form} placeholder='Address' />
                <InputUnderline name='notes' form={form} placeholder='Notes' />
                <InputUnderline name='recipient' form={form} placeholder='Recipient`s Name' />
                <InputUnderline name='phone' form={form} placeholder='Phone Number' type='number' />
            </Box>
            <ButtonBase
                type='submit'
                disabled={isDisable || isLoading}
                sx={{
                    padding: isLoading ? '19px 0' : '23px 0',
                    background: isDisable ? '#cec2d6' : '#A54CE5',
                    width: '100%',
                    color: '#fff',
                    borderRadius: '15px',
                    marginTop: '132px',
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

export default ProfileAddress;
