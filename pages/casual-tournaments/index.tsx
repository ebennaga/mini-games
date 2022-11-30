import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const CasualTournamentsContainer = dynamic(() => import('containers/CasualTournaments'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Casual Tournaments | Prize Play</title>
                <meta name='description' content='Prize play help and support' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout isCarousel>
                <CasualTournamentsContainer />
            </Layout>
        </>
    );
};

export default Page;
