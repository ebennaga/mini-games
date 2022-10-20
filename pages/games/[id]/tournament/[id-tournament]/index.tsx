import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const GameTournamentContainer = dynamic(() => import('containers/GameTournament'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Game Tournament | Prize Play</title>
                <meta name='description' content='Game Tournament Prize Play' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout isBackground>
                <GameTournamentContainer />
            </Layout>
        </>
    );
};

export default Page;
