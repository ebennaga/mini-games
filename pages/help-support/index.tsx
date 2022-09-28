import Layout from 'components/Layout/Index';
import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const HelpSupportContainer = dynamic(() => import('containers/HelpSuport'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Help & Support | Prize Play</title>
                <meta name='description' content='Prize play help and support' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <HelpSupportContainer />
            </Layout>
        </>
    );
};

export default Page;
