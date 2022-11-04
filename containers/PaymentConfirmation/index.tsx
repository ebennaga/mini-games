/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import Button from 'components/Button/Index';
import Header from 'components/Header';
import useAPICaller from 'hooks/useAPICaller';
import useNotify from 'hooks/useNotify';
import { useSelector } from 'react-redux';
import useAuthReducer from 'hooks/useAuthReducer';
import numberFormat from 'helper/numberFormat';
// import NavigationCard from 'components/NavigationCard';
// import { Controller, useForm } from 'react-hook-form';

// interface CheckboxControllerProps {
//     form: any;
//     name: string;
//     onClick: any;
//     checked: any;
//     sx?: any;
// }

// const CheckboxController: React.FC<CheckboxControllerProps> = ({ form, name, onClick, checked, sx }) => {
//     return (
//         <Controller
//             control={form.control}
//             name={name}
//             render={({ field }) => (
//                 <FormControlLabel
//                     sx={{ '& .MuiTypography-root': { fontSize: '11px' } }}
//                     label='Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, libero.'
//                     control={<Checkbox size='medium' color='secondary' onClick={onClick} checked={checked} sx={sx} {...field} />}
//                 />
//             )}
//         />
//     );
// };
declare let snap: any;

const PaymentConfirmationContainer = () => {
    const { fetchAPI, isLoading } = useAPICaller();
    const router = useRouter();
    const notify = useNotify();

    const userState = useSelector((state: any) => state.webpage?.user?.user);
    const { setUser } = useAuthReducer();

    const updateUserData = async () => {
        try {
            const result = await fetchAPI({
                endpoint: 'auths',
                method: 'GET'
            });
            if (result.status === 200) {
                return setUser({ api_token: userState.api_token, ...result.data.data });
            }
            return false;
        } catch (err: any) {
            return false;
        }
    };

    const postTopupHandler = async () => {
        const response = await fetchAPI({
            method: 'POST',
            endpoint: `coins/purchase`,
            data: {
                coin_id: router.query.id
            }
        });
        // console.log(response);
        if (response.status === 200) {
            if (!isLoading) {
                // window.open(response.data.data.payment.redirect_url, '_blank');
                snap.pay(response?.data?.data?.payment.token, {
                    onSuccess(result: any) {
                        updateUserData();
                        // console.log('success');
                        // console.log('result', result);
                        notify(result.status_message, 'success');
                        if (result.status_code === '200') {
                            router.push('/success');
                        }
                    },
                    onPending(result: any) {
                        notify(result.status_message, 'success');
                        // console.log('result', result);
                        if (result.status_code === '201') {
                            router.push('/pending');
                        }
                    },
                    onError(result: any) {
                        notify(result.status_message[0], 'error');
                        if (result.status_code === '406') {
                            router.push('/failed');
                        }
                    },
                    onClose() {
                        notify('customer closed the popup without finishing the payment', 'error');
                    }
                });
                // router.push('/topup');
            }
        } else {
            notify('Post data top up failed', 'error');
        }
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
                                <Typography sx={{ color: '#373737', fontWeight: 700, fontSize: '32px' }}>
                                    {numberFormat(userState.topupData.coin)}
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 500 }}>Rp. {numberFormat(userState.topupData.price)}</Typography>
                        </Box>
                    </Box>
                    <Typography sx={{ fontWeight: '400', fontSize: '12px', lineHeight: '12px', color: '#949494', my: '40px' }}>
                        If you sure want to buy {numberFormat(userState.topupData.coin)} coin for Rp{' '}
                        {numberFormat(userState.topupData.price)} , tap Confirm to pay
                    </Typography>
                </Box>
            </Box>
            {/* <Box
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
            </Box> */}
            <Box sx={{ position: 'relative', height: '50vh', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ position: 'absolute', width: '90%', bottom: '20px' }}>
                    <Button
                        // disabled={!form.watch('check')}
                        title='Confirm to pay'
                        backgoundColor='#A54CE5'
                        color='white'
                        onClick={postTopupHandler}
                        loading={isLoading}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default PaymentConfirmationContainer;
