import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const GameProgressContainer = dynamic(() => import('containers/GameProgress'));

const index = () => {
    return (
        <>
            <Head>
                <title>Game Progress | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <GameProgressContainer />
            </Layout>
        </>
    );
};

export default index;
