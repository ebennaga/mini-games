import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const TransactionContainer = dynamic(() => import('containers/Transaction'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Transaction | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <TransactionContainer />
            </Layout>
        </>
    );
};

export default Page;
