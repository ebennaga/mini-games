import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Layout from 'components/Layout/Index';

const HomeContainer = dynamic(() => import('containers/Home'));

const Page = () => {
    return (
        <>
            <Head>
                <title>Home | Prize Play</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout backgoundColor='#fff' isCarousel isTab>
                <HomeContainer />
            </Layout>
        </>
    );
};

export default Page;
