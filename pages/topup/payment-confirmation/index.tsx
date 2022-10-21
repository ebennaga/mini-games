import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const PaymentConfirmationContainer = dynamic(() => import('containers/PaymentConfirmation'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Payment Confirmation | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <PaymentConfirmationContainer />
            </Layout>
        </>
    );
};

export default Page;
