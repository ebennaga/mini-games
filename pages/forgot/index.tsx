import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const ForgotContainer = dynamic(() => import('containers/Forgot'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Forgot Password | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout isBackground>
                <ForgotContainer />
            </Layout>
        </>
    );
};

export default Page;
