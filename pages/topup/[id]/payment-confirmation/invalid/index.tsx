import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const PaymentInvalidContainer = dynamic(() => import('containers/Invalid'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Success Payment | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <PaymentInvalidContainer />
            </Layout>
        </>
    );
};

export default Page;
