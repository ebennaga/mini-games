import { Box, Divider, Grid, Typography, TextField } from '@mui/material';
import React from 'react';
import Header from 'components/Header';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button/Index';
import { useForm, Controller } from 'react-hook-form';
import RewardDialog from 'components/Dialog/RewardDialog';

interface TextFieldProps {
    form: any;
    name: string;
    label: string;
}

const TextFieldInput: React.FC<TextFieldProps> = ({ form, name, label }) => {
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field }) => {
                return (
                    <TextField
                        {...field}
                        id='standard-basic'
                        label={label}
                        variant='standard'
                        fullWidth
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
    return (
        <Box sx={{ width: '100%', pb: '20px' }}>
            <Box
                padding='25px'
                sx={{
                    borderBottom: '1px solid rgba(148, 148, 148, 0.35)',
                    mb: 2,
                    position: 'sticky',
                    top: -1,
                    backgroundColor: 'white',
                    zIndex: 999,
                    width: '415px'
                }}
            >
                <Header hrefBack='/shops' isBack point={102_300} profilePicture='/icons/dummy/profile.png' />
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
                <Paragraph
                    title='Lorem Ipsum'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
                <Paragraph
                    title='Description'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
                <Paragraph
                    title='Lorem Ipsum'
                    paragraph='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                />
                <Box sx={{ mt: '70px' }}>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                        Address
                    </Typography>
                    <form onSubmit={form.handleSubmit(() => {})}>
                        <TextFieldInput label='Address' form={form} name='address' />
                        <TextFieldInput label='Notes' form={form} name='notes' />
                        <TextFieldInput label={`Recipient's Name`} form={form} name='recipient' />
                        <TextFieldInput label='Phone Number' form={form} name='phone' />
                        <Box sx={{ mt: '285px' }}>
                            <Button
                                onClick={() => {
                                    setOpenDialog(!openDialog);
                                }}
                                type='submit'
                                title='Proceed to Reedem'
                                backgoundColor='#A54CE5'
                                color='white'
                            />
                        </Box>
                    </form>
                </Box>
            </Box>
            <RewardDialog open={openDialog} setOpenDialog={setOpenDialog} body='The redeem completed. Your prize will arrive soon.' />
        </Box>
    );
};

export default PrizeConfirmationContainer;
