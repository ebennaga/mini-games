import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import React from 'react';
import { Box, Typography } from '@mui/material';

const Page: NextPage = () => {
    return (
        <>
            <Head>
                <title>Loading Blank | Prize Play</title>
                <link rel='manifest' href='/manifest.json' />
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Layout backgoundColor='#fff' isCarousel isBackground>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Typography component='h2' sx={{ fontSize: '20px', fontWeight: 700 }}>
                        Please wait...
                    </Typography>
                </Box>
            </Layout>
        </>
    );
};

export default Page;
