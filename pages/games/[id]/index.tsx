import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const GameDetailContainer = dynamic(() => import('containers/GameDetail'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Game Detail | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout isBackground>
                <GameDetailContainer />
            </Layout>
        </>
    );
};

export default Page;
