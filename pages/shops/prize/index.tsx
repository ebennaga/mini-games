import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const PrizeContainer = dynamic(() => import('containers/Prize'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Prize | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isTab isBackground>
                <PrizeContainer />
            </Layout>
        </>
    );
};

export default Page;
