import { Box, Divider, Grid, Typography, TextField } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import Button from 'components/Button/Index';
import { useForm, Controller } from 'react-hook-form';
import RewardDialog from 'components/Dialog/RewardDialog';
import ConfirmSkeleton from './ConfirmationSkeleton';

interface TextFieldProps {
    form: any;
    name: string;
    label: string;
    validator?: any;
    type: 'text';
}

const TextFieldInput: React.FC<TextFieldProps> = ({ form, name, label, validator, type = 'text' }) => {
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
    const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
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
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
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
                            <img src='/images/ps5-3.png' alt='ps5-icon' style={{ width: '100%' }} />
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Playstation 5</Typography>
                        <Typography sx={{ fontWeight: '600', fontSize: '12px', mt: '7px', lineHeight: '12px' }}>
                            Lorem ipsum dolor sit consectetur adipiscing
                        </Typography>
                        <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center', mt: 2 }}>
                            <Box>
                                <img src='/images/point-shops.png' alt='pointshops' />
                            </Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px' }}>80.000</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Typography sx={{ fontSize: '12px', fontWeight: '500', lineHeight: '12px', color: '#949494', mt: '30px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box padding='0 20px'>
                <Box sx={{ mt: '30px', position: 'relative', zIndex: 0 }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Address
                    </Typography>
                    <form style={{ position: 'relative', zIndex: 0, marginBottom: '185px' }} onSubmit={form.handleSubmit(() => {})}>
                        <TextFieldInput type='text' label='Address' form={form} name='address' validator={rules} />
                        <TextFieldInput type='text' label='Notes' form={form} name='notes' />
                        <TextFieldInput type='text' label={`Recipient's Name`} form={form} name='recipient' validator={rules} />
                        <TextFieldInput type='text' label='Phone Number' form={form} name='phone' validator={rules} />
                    </form>
                </Box>
            </Box>
            <Box padding='0 20px' sx={{ position: 'sticky', bottom: '20px', zIndex: 1 }}>
                <Button
                    onClick={() => {
                        setOpenDialog(!openDialog);
                    }}
                    type='submit'
                    title='Proceed to Reedem'
                    backgoundColor='#A54CE5'
                    color='white'
                    disabled={isDisabled}
                />
            </Box>
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
