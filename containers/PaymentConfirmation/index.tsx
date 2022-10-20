import { useRouter } from 'next/router';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import Button from 'components/Button/Index';
import Header from 'components/Header';
import NavigationCard from 'components/NavigationCard';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

interface CheckboxControllerProps {
    form: any;
    name: string;
    onClick: any;
    checked: any;
    sx?: any;
}

const CheckboxController: React.FC<CheckboxControllerProps> = ({ form, name, onClick, checked, sx }) => {
    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormControlLabel
                    sx={{ '& .MuiTypography-root': { fontSize: '11px' } }}
                    label='Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, libero.'
                    control={<Checkbox size='medium' color='secondary' onClick={onClick} checked={checked} sx={sx} {...field} />}
                />
            )}
        />
    );
};

const PaymentConfirmationContainer = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            check: false
        }
    });
    const router = useRouter();
    const handleCheckbox = (e: any) => {
        form.setValue('check', e.target.check);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ position: 'sticky', top: '0px', backgroundColor: 'white', p: '20px', zIndex: 99 }}>
                <Header logo='/icons/logo.svg' profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='0px 20px'>
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <Box sx={{ width: '100%' }}>
                        <Typography sx={{ textAlign: 'start', fontWeight: 'bold', mt: '20px', fontSize: '24px' }}>
                            Payment Confirmation
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            background: 'linear-gradient(0.35turn, #FFEDA7 20% ,#FFEA98 12.5%, #FFEDA7 80%, #FFEA98 20%)',
                            padding: '15px',
                            width: '75%',
                            mt: '30px',
                            borderRadius: '15px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            height: '120px'
                        }}
                    >
                        <Box sx={{ width: '50%', display: 'flex', alignItems: 'flex-end' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src='/images/sm-coin.png' alt='coin' />
                                <Typography sx={{ color: '#373737', fontWeight: 700, fontSize: '32px' }}>100</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 500 }}>Rp. 10.000</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '12px', color: '#949494', my: '20px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi{' '}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: '#F4F1FF',
                    display: 'flex',
                    padding: '5px 5px 4px',
                    boxSizing: 'border-box'
                }}
            >
                <Box sx={{ boxSizing: 'border-box', width: '100%' }}>
                    {[...Array(10)].map((i: any, idx: number) => (
                        <Box key={idx} sx={{ padding: '10px', backgroundColor: 'white', mb: '1px', cursor: 'pointer' }}>
                            <NavigationCard
                                icon='/images/card-img.png'
                                body='Pay with Visa, MasterCard, JCB, or Amex'
                                title='Credit/DebitCard'
                                onClick={() => {}}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
            <Box sx={{ padding: '19px' }}>
                <CheckboxController name='check' form={form} onClick={handleCheckbox} checked={form.watch('check')} />
            </Box>
            <Box sx={{ padding: '20px', position: 'sticky', bottom: '0px', zIndex: 99, mt: '100px' }}>
                <Button
                    disabled={!form.watch('check')}
                    title='Confirm to pay'
                    backgoundColor='#A54CE5'
                    color='white'
                    onClick={() => {
                        router.push(`${router.asPath}/pay-form`);
                    }}
                />
            </Box>
        </Box>
    );
};

export default PaymentConfirmationContainer;
