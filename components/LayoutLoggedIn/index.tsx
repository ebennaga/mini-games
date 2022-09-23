import React from 'react';
import { Grid, ButtonBase, Box, Typography } from '@mui/material';
import Layout from 'components/Layout/Index';
// import { ArrowCircleLeft } from '@mui/icons-material';

interface LayoutLoggedInProps {
    myCoin: string;
    children: any;
}

const LayoutLoggedIn: React.FC<LayoutLoggedInProps> = ({ myCoin, children }) => {
    return (
        <Layout>
            <Grid container justifyContent='space-between' alignItems='center' paddingX='20px' position='relative' zIndex={99}>
                <Grid item xs={2}>
                    <ButtonBase>
                        {/* <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} /> */}
                        <img src='/images/arrowBack.png' alt='arrowBack' />
                    </ButtonBase>
                </Grid>
                <Grid container justifyContent='space-between' alignItems='center' xs={4}>
                    <Grid item xs={8}>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2,
                                position: 'relative',
                                backgroundColor: '#FFF5CD',
                                padding: '8px 9px',
                                borderRadius: '25px'
                            }}
                            component='div'
                        >
                            <img src='/images/coin.png' alt='coin' />
                            <Typography fontWeight='bold'>{myCoin}</Typography>
                            <Box sx={{ position: 'absolute', bottom: '25px', left: '0px' }}>
                                <img src='/images/badge-plus.png' alt='badge' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3}>
                        <img src='/images/avatar.png' alt='avatar' />
                    </Grid>
                </Grid>
            </Grid>
            {children}
        </Layout>
    );
};

export default LayoutLoggedIn;
