import Layout from 'components/Layout/Index';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React from 'react';

const TournamentsContainer = dynamic(() => import('containers/Tournaments'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Tournaments | Prize Play</title>
                <meta name='description' content='Prize play help and support' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout isCarousel>
                <TournamentsContainer />
            </Layout>
        </>
    );
};

export default Page;
