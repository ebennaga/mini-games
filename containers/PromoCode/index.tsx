import HeaderBack from 'components/HeaderBack';
import React from 'react';
import { Box, ButtonBase, Typography } from '@mui/material';
import InputEdit from 'components/InputEdit';
import { useForm } from 'react-hook-form';

const PromoCode = () => {
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
    return (
        <Box component='main' sx={{ width: '-webkit-fill-available', padding: '0 20px', color: '#373737', height: '100%' }}>
            <Box sx={{ position: 'relative', height: '100%' }}>
                <HeaderBack title='Promo Code' />
                <Box component='section' sx={{ marginTop: '57px', textAlign: 'left' }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '24px', lineHeight: '24px' }}>Have a promo code ?</Typography>
                    <Typography sx={{ color: '#949494', fontWeight: 400, fontSize: '12px', marginBottom: '24px' }}>
                        Enter your promo code below to reedem it.
                    </Typography>
                    <InputEdit name='promoCode' form={form} label='Promo Code' placeholder='eg. XYTW1' disabled={false} />
                </Box>
                <Box sx={{ position: 'absolute', width: '100%', bottom: '0' }}>
                    <ButtonBase
                        sx={{ background: '#A54CE5', borderRadius: '15px', width: '100%', marginTop: '27px', marginBottom: '27px' }}
                    >
                        <Typography
                            component='span'
                            fontSize='14px'
                            paddingTop='24px'
                            paddingBottom='24px'
                            fontWeight={700}
                            sx={{ color: '#ffff' }}
                        >
                            Verify your Code
                        </Typography>
                    </ButtonBase>
                </Box>
            </Box>
        </Box>
    );
};

export default PromoCode;
