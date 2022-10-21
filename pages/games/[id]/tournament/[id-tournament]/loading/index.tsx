import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const TournamentLoadingContainer = dynamic(() => import('containers/LoadingTournament'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Tournament Play | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <TournamentLoadingContainer />
            </Layout>
        </>
    );
};

export default Page;
