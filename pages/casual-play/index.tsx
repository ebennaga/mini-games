import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const CasualPlayContainer = dynamic(() => import('containers/CasualPlay'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Casual Play | Prize Play</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff'>
                <CasualPlayContainer />
            </Layout>
        </>
    );
};

export default Page;
