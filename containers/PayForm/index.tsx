import { Box, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import Header from 'components/Header';
import Button from 'components/Button/Index';
import PayInput from './PayInput';

const PayFormContainer = () => {
    const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
    const form = useForm({
        mode: 'all',
        defaultValues: {
            email: '',
            phone: '',
            card: '',
            expiry: '',
            cvv: ''
        }
    });

    const rules = { required: true };

    const formValue = (name: any) => {
        return form.watch(name);
    };

    React.useEffect(() => {
        ['email', 'phone', 'card', 'expiry', 'cvv'].forEach((item: any) => {
            if (formValue(item) !== '') {
                setIsDisabled(false);
            }
            if (formValue(item) === '') {
                setIsDisabled(true);
            }
        });
    }, [form.watch(), isDisabled]);

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ position: 'sticky', top: '0px', backgroundColor: 'white', p: '20px', zIndex: 99 }}>
                <Header logo='/icons/logo.svg' profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='20px'>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography sx={{ fontWeight: '600', fontSize: '14px', color: '#102C42' }}>amount</Typography>
                    <Typography sx={{ fontSize: '45px', fontWeight: 'bold', color: '#102C42' }}>
                        <sup style={{ fontSize: '14px' }}>Rp</sup>
                        10.000
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    borderTop: '1px solid #102C42',
                    padding: '10px',
                    backgroundColor: '#F4F1FF',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Typography sx={{ fontWeight: 'bold' }}>Order ID</Typography>
                <Typography sx={{ color: '#666', fontWeight: 600, fontSize: '11px' }}>demo-docs-main-9999999999999</Typography>
            </Box>
            <Box>
                <PayInput isTop placeholder='Email' type='email' form={form} name='email' validator={rules} />
                <PayInput placeholder='Phone Number' type='text' form={form} name='phone' validator={rules} />
                <PayInput placeholder='Card Number' type='text' form={form} name='card' validator={rules} />
                <Box sx={{ display: 'flex' }}>
                    <PayInput placeholder='Expiry Date' type='text' form={form} name='expiry' validator={rules} />
                    <Box>
                        <PayInput placeholder='CVV' type='text' form={form} name='cvv' validator={rules} isBorder />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%', mt: '10px' }}>
                <Box
                    sx={{
                        backgroundColor: '#F4F1FF',
                        borderRadius: '15px 15px 0px 0px',
                        padding: '10px 30px',
                        borderBottom: '2px solid #C6C6C6',
                        marginX: '5px'
                    }}
                >
                    <Typography sx={{ color: '#999', fontSize: '12px' }}>Midtrans secured payments</Typography>
                </Box>
                <Box
                    sx={{
                        backgroundColor: '#F4F1FF',
                        borderRadius: '0px 0px 15px 15px',
                        padding: '10px 30px',
                        marginX: '5px',
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}
                >
                    {[...Array(5)].map((i: any, idx: number) => (
                        <img src='/images/JCB.png' alt='JCB' key={idx} />
                    ))}
                </Box>
            </Box>
            <Box sx={{ marginTop: '200px', padding: '20px', position: 'sticky', bottom: '20px', zIndex: 99 }}>
                <Button title='Pay now' backgoundColor='#A54CE5' color='white' disabled={isDisabled} />
            </Box>
        </Box>
    );
};

export default PayFormContainer;
