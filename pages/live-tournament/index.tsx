import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const LiveTournamentsContainer = dynamic(() => import('containers/LiveTournaments'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Live Tournaments | Prize Play</title>
                <meta name='description' content='Prize play help and support' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isTab>
                <LiveTournamentsContainer />
            </Layout>
        </>
    );
};

export default Page;
