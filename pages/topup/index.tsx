import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const TopupContainer = dynamic(() => import('containers/TopUp'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Topup | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isTab isBackground>
                <TopupContainer />
            </Layout>
        </>
    );
};

export default Page;
