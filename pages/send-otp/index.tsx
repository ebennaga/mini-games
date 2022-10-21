import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const SendOtpContainer = dynamic(() => import('containers/SendOtp'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Send OTP | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <SendOtpContainer />
            </Layout>
        </>
    );
};

export default Page;
