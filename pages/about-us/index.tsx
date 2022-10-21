import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const AboutUsContainer = dynamic(() => import('containers/AboutUs'));

const Page = () => {
    return (
        <>
            <Head>
                <title>About us | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <AboutUsContainer />
            </Layout>
        </>
    );
};

export default Page;
