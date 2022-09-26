import React from 'react';
import { ArrowCircleLeft } from '@mui/icons-material';
import { Grid, Typography, ButtonBase } from '@mui/material';
// reuseableComponents
import Layout from 'components/Layout/Index';

const AchievmentsContainer = () => {
    return (
        <Layout>
            <Grid container padding='20px'>
                <Grid item xs={2}>
                    <ButtonBase>
                        <ArrowCircleLeft sx={{ width: '35px', height: '35px', color: '#A54CE5' }} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={8}>
                    <Typography sx={{ textAlign: 'center', fontSize: '25px', fontWeight: 700 }}>Game Progress</Typography>
                </Grid>
            </Grid>
            <Grid container padding='20px'>
                <Grid item xs={2}>
                    <img src='/images/profileAchiement.png' alt='pachiev' />
                </Grid>
                <Grid item xs={10} direction='row' gap={4}>
                    <Grid item xs={12}>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '24px' }}>Banana Jump</Typography>
                    </Grid>
                    <Grid container xs={12} justifyContent='space-between' alignItems='center'>
                        <Grid container xs={6} alignItems='center' justifyContent='center' spacing={4}>
                            <Grid item xs={1}>
                                <img src='/images/badge-level.png' alt='badge' />
                            </Grid>
                            <Grid item xs={10}>
                                <Typography fontWeight='600'>Beginner</Typography>
                            </Grid>
                        </Grid>
                        <Grid container xs={6}>
                            <Grid item xs={12} textAlign='end'>
                                <Typography fontWeight='600'>Exp.370/500</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Box sx={{ width: '100%', position: 'relative', overflowY: 'auto', height: '55px', left: '20px' }}>
                <Box sx={{ backgroundColor: '#949494', height: '15px', width: '120%' }} />
            </Box> */}
        </Layout>
    );
};

export default AchievmentsContainer;
