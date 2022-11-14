import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const CasualLoadingContainer = dynamic(() => import('containers/LoadingCasual'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Casual Play | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
                <script
                    async
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3078290294001067'
                    crossOrigin='anonymous'
                />
            </Head>
            <Layout backgoundColor='#fff'>
                <CasualLoadingContainer />
            </Layout>
        </>
    );
};

Page.getPageProps = async () => {
    return {
        protectedRoute: true
    };
};

export default Page;
