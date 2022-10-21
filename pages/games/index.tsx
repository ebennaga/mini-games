import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const GameContainer = dynamic(() => import('containers/Game'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Game | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout isTab isBackground>
                <GameContainer playerImg1='' playerImg2='' playerImg3='' totalPlayer={0} />
            </Layout>
        </>
    );
};

export default Page;
