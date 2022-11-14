import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const PrizeDetailContainer = dynamic(() => import('containers/PrizeDetail'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Prize Detail | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <PrizeDetailContainer />
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
