import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const CasualPlayContainer = dynamic(() => import('containers/Casual'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Casual Play | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <CasualPlayContainer />
            </Layout>
        </>
    );
};

export default Page;
