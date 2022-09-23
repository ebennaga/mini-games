import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import { ArrowCircleLeft } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import Layout from 'components/Layout/Index';
import Input from 'components/Input';
import Button from 'components/Button/Index';

const ForgotPasswordPage = () => {
    const form = useForm({
        mode: 'all',
        defaultValues: {
            email: '',
            code: ''
        }
    });
    return (
        <Layout>
            <Grid container direction='row' sx={{ padding: '20px' }} spacing={4}>
                <Grid item xs={1}>
                    <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h3' fontWeight='700'>
                        Set your <br /> new password
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography fontSize='16px' fontWeight='400' color='#949494'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </Typography>
                </Grid>
                {/* <Grid item xs={12}></Grid>
                <Grid item xs={12}></Grid> */}
                <Grid item xs={12}>
                    <form onSubmit={form.handleSubmit(() => {})}>
                        <Input name='email' placeholder='Insert Your Email' form={form} validator={{ required: true }} type='email' />
                        <Box sx={{ marginY: '20px' }}>
                            <Input
                                name='code'
                                placeholder='Insert Code Verification'
                                form={form}
                                validator={{ required: true }}
                                type='email'
                                component={
                                    <Box
                                        sx={{
                                            backgroundColor: '#A54CE5',
                                            borderRadius: '20px',
                                            width: '90px',
                                            textAlign: 'center',
                                            padding: '8px'
                                        }}
                                    >
                                        <Typography sx={{ fontWeight: 'bold', fontSize: '13px', color: 'white' }}>Send Code</Typography>
                                    </Box>
                                }
                            />
                        </Box>

                        <Input
                            name='password'
                            placeholder='Insert Your Password'
                            form={form}
                            validator={{ required: true }}
                            type='password'
                        />
                        <Box sx={{ marginTop: '305px' }}>
                            <Button type='submit' title='Confirmation' backgoundColor='#A54CE5' color='#FFF' onClick={() => {}} />
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </Layout>
    );
};

export default ForgotPasswordPage;
