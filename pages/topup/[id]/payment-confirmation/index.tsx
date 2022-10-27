import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';
import Script from 'next/script';

const PaymentConfirmationContainer = dynamic(() => import('containers/PaymentConfirmation'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Payment Confirmation | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Script type='text/javascript' src='https://app.sandbox.midtrans.com/snap/snap.js' data-client-key='<CLIENT-KEY>' />
            <Layout backgoundColor='#fff' isBackground>
                <PaymentConfirmationContainer />
            </Layout>
        </>
    );
};

Page.getPageProps = async () => {
    return {
        protectedRoute: true
    };
};

export default Page;
