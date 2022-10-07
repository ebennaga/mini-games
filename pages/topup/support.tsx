import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Layout from 'components/Layout/Index';

const TopupTutorialContainer = dynamic(() => import('containers/SupportTopup'));
const Page = () => {
    return (
        <>
            <Head>
                <title>Topup Tutorial | Prize Play</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isBackground>
                <TopupTutorialContainer />
            </Layout>
        </>
    );
};

export default Page;
