import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const LiveDetailContainer = dynamic(() => import('containers/LiveDetail'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Live Tournament Detail Tournaments | Prize Play</title>
                <meta name='description' content='Prize play help and support' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <LiveDetailContainer />
            </Layout>
        </>
    );
};

export default Page;
