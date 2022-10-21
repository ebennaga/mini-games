import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const AdsContainer = dynamic(() => import('containers/Adsense'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Casual Adsense | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />

                <script
                    async
                    src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3078290294001067'
                    crossOrigin='anonymous'
                />
            </Head>
            <Layout backgoundColor='#fff'>
                <AdsContainer />
            </Layout>
        </>
    );
};

export default Page;
