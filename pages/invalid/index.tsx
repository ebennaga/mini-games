import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const InvalidContainer = dynamic(() => import('containers/Invalid'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Topup Invalid | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <InvalidContainer />
            </Layout>
        </>
    );
};

export default Page;
