import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const ShopsContainer = dynamic(() => import('containers/Shops'), { ssr: false });

const Page = () => {
    return (
        <>
            <Head>
                <title>Shops | Prize Play</title>
                <meta name='description' content='Play for fun and prize' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isTab isBackground>
                <ShopsContainer />
            </Layout>
        </>
    );
};

export default Page;
