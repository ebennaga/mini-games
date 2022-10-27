import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const PendingConatiner = dynamic(() => import('containers/Pending'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Topup Pending | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <PendingConatiner />
            </Layout>
        </>
    );
};

export default Page;
