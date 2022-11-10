/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { Box, Divider, Grid, Typography, TextField, Skeleton, CircularProgress } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import Button from 'components/Button/Index';
import { useForm, Controller } from 'react-hook-form';
import RewardDialog from 'components/Dialog/RewardDialog';
import { useRouter } from 'next/router';
import useNotify from 'hooks/useNotify';
import useAPICaller from 'hooks/useAPICaller';
import numberFormat from 'helper/numberFormat';
import ConfirmSkeleton from './ConfirmationSkeleton';

interface TextFieldProps {
    form: any;
    name: string;
    label: string;
    validator?: any;
    type: 'text' | 'tel';
}

const TextFieldInput: React.FC<TextFieldProps> = ({ form, name, label, validator, type }) => {
    const { errors } = form.formState;
    const error = errors[name] ? errors[name] : null;

    const errType: string = error?.type;
    let helperText: string = '';
    if (errType === 'required') {
        helperText = `${name} is required`;
    }

    return (
        <Controller
            name={name}
            control={form.control}
            rules={validator}
            render={({ field }) => {
                return (
                    <TextField
                        helperText={helperText.charAt(0).toUpperCase() + helperText.slice(1)}
                        {...field}
                        id='standard-basic'
                        label={label}
                        variant='standard'
                        fullWidth
                        type={type}
                        sx={{
                            my: '20px',
                            '& .MuiInputBase-input': {
                                fontSize: '12px',
                                paddingTop: '10px',
                                paddingBottom: '10px'
                            },
                            '& .MuiFormLabel-root': {
                                fontSize: '12px',
                                fontWeight: 600,
                                color: '#949494'
                            },
                            '& .MuiFormHelperText-root': {
                                color: 'red',
                                fontWeight: 400
                            }
                        }}
                    />
                );
            }}
        />
    );
};

const PrizeConfirmationContainer = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            address: '',
            notes: '',
            recipient: '',
            phone: ''
        }
    });
    const [openDialog, setOpenDialog] = React.useState<boolean>(false);
    const [borderValue, setBorderValue] = React.useState<string>('none');
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [loadingRedeem, setLoadingRedeem] = React.useState<boolean>(false);
    const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
    const [dataGoods, setDataGoods] = React.useState<any>(null);

    const { fetchAPI } = useAPICaller();

    const router = useRouter();
    const notify = useNotify();

    const rules = { required: true };

    const handleScroll = () => {
        if (window.scrollY === 0) {
            return setBorderValue('none');
        }
        return setBorderValue('0.5px solid rgba(148, 148, 148, 0.35)');
    };

    const formValue = (name: any) => {
        return form.watch(name);
    };

    const getDetailGoods = async () => {
        setIsLoading(true);
        const response = await fetchAPI({
            method: 'GET',
            endpoint: `redemptions/${router.query.id}`
        });

        if (response.status === 200) {
            setDataGoods(response.data.data);
        } else {
            notify(response.data.message, 'error');
        }
        setIsLoading(false);
    };

    const handleRedeem = async (data: any) => {
        setLoadingRedeem(true);
        const { address, notes, recipient, phone } = data;
        const response = await fetchAPI({
            method: 'PUT',
            endpoint: `redemptions/${router.query.id}/redeem`,
            data: {
                address,
                notes,
                recipient_name: recipient,
                recipient_phone_number: phone
            }
        });
        if (response?.status === 200) {
            setOpenDialog(!openDialog);
        } else {
            notify(response?.data.message || 'Redeem failed', 'error');
        }
        setLoadingRedeem(false);
    };

    React.useEffect(() => {
        ['address', 'recipient', 'phone'].forEach((item: any) => {
            if (formValue(item) !== '') {
                setIsDisabled(false);
            }
            if (formValue(item) === '') {
                setIsDisabled(true);
            }
        });
    }, [form.watch(), isDisabled]);

    React.useEffect(() => {
        const watchScroll = () => {
            window.addEventListener('scroll', handleScroll);
        };
        watchScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    React.useEffect(() => {
        getDetailGoods();
    }, []);

    if (isLoading) {
        return <ConfirmSkeleton />;
    }
    return (
        <Box sx={{ width: '100%', pb: '20px' }}>
            <Box
                padding='20px'
                sx={{
                    borderBottom: borderValue,
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999,
                    width: '-webkit-fill-available'
                }}
            >
                <Header isShops hrefBack='/shops' isBack point={102_300} profilePicture='/icons/dummy/profile.png' />
            </Box>
            <Box padding='0 20px' sx={{ mt: '30px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Box sx={{ backgroundColor: '#F4F4F4', padding: '10px', borderRadius: '10px' }}>
                            <img
                                src={dataGoods.image_url}
                                alt='ps5-icon'
                                style={{ width: '100%' }}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null;
                                    currentTarget.src = '/images/img_error.svg';
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>{dataGoods.name}</Typography>

                        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', mt: 2 }}>
                            <Box>
                                <img src='/images/point-shops.png' alt='pointshops' />
                            </Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>{numberFormat(dataGoods.price)}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '12px', color: '#949494', mt: '30px' }}>
                    {dataGoods.description}
                </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <form onSubmit={form.handleSubmit(handleRedeem)}>
                <Box padding='0 20px'>
                    <Box sx={{ mt: '30px', position: 'relative', zIndex: 0 }}>
                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                            Address
                        </Typography>
                        <div style={{ position: 'relative', zIndex: 0, marginBottom: '185px' }}>
                            <TextFieldInput type='text' label='Address' form={form} name='address' validator={rules} />
                            <TextFieldInput type='text' label='Notes' form={form} name='notes' />
                            <TextFieldInput type='text' label={`Recipient's Name`} form={form} name='recipient' validator={rules} />
                            <TextFieldInput type='tel' label='Phone Number' form={form} name='phone' validator={rules} />
                        </div>
                    </Box>
                </Box>
                <Box padding='0 20px' sx={{ position: 'sticky', bottom: '20px', zIndex: 1 }}>
                    {loadingRedeem ? (
                        <Box width='100%' display='flex' justifyContent='center'>
                            <CircularProgress sx={{ color: '#A54CE5' }} />
                        </Box>
                    ) : (
                        <Button type='submit' title='Proceed to Reedem' backgoundColor='#A54CE5' color='white' disabled={isDisabled} />
                    )}
                </Box>
            </form>
            <RewardDialog
                path='/shops'
                open={openDialog}
                setOpenDialog={setOpenDialog}
                body='The redeem completed. Your prize will arrive soon.'
            />
        </Box>
    );
};

export default PrizeConfirmationContainer;
