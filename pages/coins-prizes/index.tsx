import Layout from 'components/Layout/Index';
import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';

const CoinsPrizeContainer = dynamic(() => import('containers/CoinsPrizes'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Coins & Prize | Prize Play</title>
                <meta name='description' content='Prize play coins and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <CoinsPrizeContainer />
            </Layout>
        </>
    );
};

export default Page;
