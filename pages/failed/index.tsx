import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const FailedContainer = dynamic(() => import('containers/Failed'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Topup Failed | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <FailedContainer />
            </Layout>
        </>
    );
};

export default Page;
