import Layout from 'components/Layout/Index';
// import GameResultTournament from 'containers/GameResultTournament';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const GameResultTournament = dynamic(() => import('containers/GameResultTournament'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Result Tournament | Prize Play</title>
                <meta name='description' content='Game Tournament Prize Play' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <GameResultTournament />
            </Layout>
        </>
    );
};

export default Page;
