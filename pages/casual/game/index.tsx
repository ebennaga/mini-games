import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const PlayGameContainer = dynamic(() => import('containers/PlayGame'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Casual Result | Prize Play</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <PlayGameContainer />
            </Layout>
        </>
    );
};

export default Page;